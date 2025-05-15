import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Skill, SkillCategory } from "@/data/skills";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useData } from "@/contexts/DataContext";
import { supabase } from "@/lib/supabaseClient";

const AdminSkills = () => {
  const { skills, setSkills } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [isEditingSkill, setIsEditingSkill] = useState<string | null>(null);

  const [categoryForm, setCategoryForm] = useState<{ name: string }>({
    name: "",
  });

  const [skillForm, setSkillForm] = useState<Skill>({
    name: "",
    icon: "",
    level: 3,
  });

  const fetchSkills = async () => {
    const { data, error } = await supabase.from("skills").select();
    if (!error && data) {
      setSkills(data);
      if (!selectedCategory && data.length > 0) {
        setSelectedCategory(data[0].name);
      }
    } else if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchSkills();

    const subscription = supabase
      .from("skills")
      .on("*", () => {
        fetchSkills();
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(subscription);
    };
  }, []);

  const handleCategoryChange = (e) => {
    setCategoryForm({ ...categoryForm, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (e) => {
    const { name, value } = e.target;
    setSkillForm({
      ...skillForm,
      [name]: name === "level" ? parseInt(value) : value,
    });
  };

  const handleSkillLevelChange = (value) => {
    setSkillForm({ ...skillForm, level: parseInt(value) });
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const newCategory = {
      name: categoryForm.name,
      skills: [],
    };
    const { data, error } = await supabase
      .from("skills")
      .insert([newCategory])
      .select();
    if (!error && data && data.length > 0) {
      toast({
        title: "Category Created",
        description: `The category "${data[0].name}" has been created.`,
      });
    } else {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
    setCategoryForm({ name: "" });
    setIsAddingCategory(false);
  };

  const handleAddSkill = async (e) => {
    e.preventDefault();
    const category = skills.find((cat) => cat.name === selectedCategory);
    if (!category) return;

    const updatedSkills = isEditingSkill
      ? category.skills.map((skill) =>
          skill.name === isEditingSkill ? skillForm : skill
        )
      : [...category.skills, skillForm];

    const { error } = await supabase
      .from("skills")
      .update({ skills: updatedSkills })
      .eq("id", category.id);

    if (!error) {
      toast({
        title: isEditingSkill ? "Skill Updated" : "Skill Added",
        description: `"${skillForm.name}" has been ${
          isEditingSkill ? "updated" : "added"
        }.`,
      });
    } else {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }

    setSkillForm({ name: "", icon: "", level: 3 });
    setIsAddingSkill(false);
    setIsEditingSkill(null);
  };

  const handleEditSkill = (skill: Skill) => {
    setSkillForm({ ...skill });
    setIsEditingSkill(skill.name);
    setIsAddingSkill(true);
  };

  const handleDeleteSkill = async (skillName: string) => {
    const category = skills.find((cat) => cat.name === selectedCategory);
    if (!category) return;

    const updatedSkills = category.skills.filter(
      (skill) => skill.name !== skillName
    );
    const { error } = await supabase
      .from("skills")
      .update({ skills: updatedSkills })
      .eq("id", category.id);

    if (!error) {
      toast({
        title: "Skill Deleted",
        description: `"${skillName}" has been deleted.`,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDeleteCategory = async (categoryName: string) => {
    const category = skills.find((cat) => cat.name === categoryName);
    if (!category) return;

    const { error } = await supabase
      .from("skills")
      .delete()
      .eq("id", category.id);
    if (!error) {
      toast({
        title: "Category Deleted",
        description: `The category "${categoryName}" has been deleted.`,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const currentCategory = skills.find((cat) => cat.name === selectedCategory);

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-serif font-semibold">Manage Skills</h1>
            <div className="flex gap-4">
              <Button onClick={() => setIsAddingCategory(true)}>
                Add New Category
              </Button>
              <Button variant="outline" asChild>
                <Link to="/admin">Back to Dashboard</Link>
              </Button>
            </div>
          </div>

          {isAddingCategory ? (
            <Card className="mb-8">
              <CardContent className="pt-6">
                <form onSubmit={handleAddCategory}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Category Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={categoryForm.name}
                        onChange={handleCategoryChange}
                        required
                      />
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsAddingCategory(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit">Create Category</Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : null}

          {skills.length > 0 && (
            <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
              <div className="w-full md:w-1/3">
                <Label htmlFor="categorySelect">Select Category</Label>
                <Select
                  onValueChange={setSelectedCategory}
                  defaultValue={selectedCategory}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {skills.map((category) => (
                      <SelectItem key={category.name} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {selectedCategory && (
                <div className="flex items-end gap-2">
                  <Button onClick={() => setIsAddingSkill(true)}>
                    Add New Skill
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleDeleteCategory(selectedCategory)}
                  >
                    Delete Category
                  </Button>
                </div>
              )}
            </div>
          )}

          {selectedCategory && isAddingSkill ? (
            <Card className="mb-8">
              <CardContent className="pt-6">
                <form onSubmit={handleAddSkill}>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="skillName">Skill Name</Label>
                        <Input
                          id="skillName"
                          name="name"
                          value={skillForm.name}
                          onChange={handleSkillChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="icon">Icon Name</Label>
                        <Input
                          id="icon"
                          name="icon"
                          value={skillForm.icon}
                          onChange={handleSkillChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="level">Proficiency Level (1-5)</Label>
                      <Select
                        onValueChange={handleSkillLevelChange}
                        defaultValue={skillForm.level.toString()}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select skill level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 - Beginner</SelectItem>
                          <SelectItem value="2">2 - Basic</SelectItem>
                          <SelectItem value="3">3 - Intermediate</SelectItem>
                          <SelectItem value="4">4 - Advanced</SelectItem>
                          <SelectItem value="5">5 - Expert</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setIsAddingSkill(false);
                          setIsEditingSkill(null);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button type="submit">
                        {isEditingSkill ? "Update Skill" : "Add Skill"}
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : null}

          {selectedCategory && currentCategory?.skills.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No skills added to this category yet.
              </p>
            </div>
          ) : selectedCategory ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Icon</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead className="w-[150px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentCategory?.skills.map((skill) => (
                  <TableRow key={skill.name}>
                    <TableCell>{skill.name}</TableCell>
                    <TableCell>{skill.icon}</TableCell>
                    <TableCell>{skill.level}/5</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditSkill(skill)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteSkill(skill.name)}
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : null}
        </div>
      </section>
    </Layout>
  );
};

export default AdminSkills;
