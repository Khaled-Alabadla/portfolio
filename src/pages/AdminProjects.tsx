import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/projects";
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
import { useData } from "@/contexts/DataContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/lib/supabaseClient";

const AdminProjects = () => {
  const { projects, setProjects } = useData();
  const { t } = useLanguage();
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<Project, "id">>({
    title: "",
    title_ar: "",
    description: "",
    description_ar: "",
    image: "",
    tags: [],
    tags_ar: [],
    demoUrl: "",
    repoUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "tags") {
      setFormData({
        ...formData,
        tags: value.split(",").map((tag) => tag.trim()),
      });
    } else if (name === "tags_ar") {
      setFormData({
        ...formData,
        tags_ar: value.split(",").map((tag) => tag.trim()),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      const { error } = await supabase
        .from("projects")
        .update({ ...formData })
        .eq("id", isEditing);

      if (!error) {
        const updatedProjects = projects.map((project) =>
          project.id === isEditing ? { ...formData } : project
        );
        setProjects(updatedProjects);
        toast({
          title: "Project Updated",
          description: "The project has been successfully updated.",
        });
        setIsEditing(null);
      } else {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    } else {
      const { id, ...dataToInsert } = formData;
      const { data, error } = await supabase
        .from("projects")
        .insert([dataToInsert])
        .select();
      if (!error && data) {
        setProjects([...projects, data[0]]);
        toast({
          title: "Project Created",
          description: "A new project has been created.",
        });
      } else {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    }

    setFormData({
      id: "",
      title: "",
      title_ar: "",
      description: "",
      description_ar: "",
      image: "",
      tags: [],
      tags_ar: [],
      demoUrl: "",
      repoUrl: "",
    });
    setIsAdding(false);
  };

  const handleEditClick = (project: Project) => {
    setFormData({
      ...project,
      tags: [...project.tags],
      tags_ar: project.tags_ar ? [...project.tags_ar] : [],
      title_ar: project.title_ar || "",
      description_ar: project.description_ar || "",
    });
    setIsEditing(project.id);
    setIsAdding(true);
  };

  const handleDeleteClick = async (id: string) => {
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (!error) {
      const updatedProjects = projects.filter((project) => project.id !== id);
      setProjects(updatedProjects);
      toast({
        title: "Project Deleted",
        description: "The project has been successfully deleted.",
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

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-serif font-semibold">
              {t("manageProjects")}
            </h1>
            <div className="flex gap-4">
              <Button onClick={() => setIsAdding(true)}>
                {t("addNewPost")}
              </Button>
              <Button variant="outline" asChild>
                <Link to="/admin">{t("backToDashboard")}</Link>
              </Button>
            </div>
          </div>

          {isAdding ? (
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit}>
                  <Tabs defaultValue="general">
                    <TabsList className="mb-4">
                      <TabsTrigger value="general">
                        {t("generalInfo")}
                      </TabsTrigger>
                      <TabsTrigger value="english">
                        {t("englishContent")}
                      </TabsTrigger>
                      <TabsTrigger value="arabic">
                        {t("arabicContent")}
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="general">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="image">{t("projectImage")}</Label>
                          <Input
                            id="image"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="demoUrl">{t("demoUrl")}</Label>
                            <Input
                              id="demoUrl"
                              name="demoUrl"
                              value={formData.demoUrl || ""}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div>
                            <Label htmlFor="repoUrl">{t("repoUrl")}</Label>
                            <Input
                              id="repoUrl"
                              name="repoUrl"
                              value={formData.repoUrl || ""}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="english">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="title">{t("projectTitle")}</Label>
                          <Input
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="description">
                            {t("projectDesc")}
                          </Label>
                          <Textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="tags">{t("tags")}</Label>
                          <Input
                            id="tags"
                            name="tags"
                            value={formData.tags.join(", ")}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="arabic">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="title_ar">
                            {t("projectTitleAr")}
                          </Label>
                          <Input
                            id="title_ar"
                            name="title_ar"
                            value={formData.title_ar || ""}
                            onChange={handleInputChange}
                            dir="rtl"
                            className="font-arabic"
                          />
                        </div>

                        <div>
                          <Label htmlFor="description_ar">
                            {t("projectDescAr")}
                          </Label>
                          <Textarea
                            id="description_ar"
                            name="description_ar"
                            value={formData.description_ar || ""}
                            onChange={handleInputChange}
                            dir="rtl"
                            className="font-arabic"
                          />
                        </div>

                        <div>
                          <Label htmlFor="tags_ar">{t("tagsAr")}</Label>
                          <Input
                            id="tags_ar"
                            name="tags_ar"
                            value={
                              formData.tags_ar
                                ? formData.tags_ar.join(", ")
                                : ""
                            }
                            onChange={handleInputChange}
                            dir="rtl"
                            className="font-arabic"
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <div className="flex justify-end gap-2 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setIsAdding(false);
                          setIsEditing(null);
                        }}
                      >
                        {t("cancel")}
                      </Button>
                      <Button type="submit">
                        {isEditing ? t("updatePost") : t("createPost")}
                      </Button>
                    </div>
                  </Tabs>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("projectTitle")}</TableHead>
                  <TableHead>{t("tags")}</TableHead>
                  <TableHead className="w-[150px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center">
                      {t("noPostsFound")}
                    </TableCell>
                  </TableRow>
                ) : (
                  projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell>{project.title}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditClick(project)}
                          >
                            {t("edit")}
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteClick(project.id)}
                          >
                            {t("delete")}
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AdminProjects;
