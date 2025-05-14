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
  const [formData, setFormData] = useState<Project>({
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
      const { data, error } = await supabase
        .from("projects")
        .insert([{ ...formData }])
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

  return <Layout>{/* rest of the component remains unchanged */}</Layout>;
};

export default AdminProjects;
