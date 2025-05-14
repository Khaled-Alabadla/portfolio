import React, { createContext, useContext, useState, useEffect } from "react";
import { blogPosts as defaultBlogs, BlogPost } from "@/data/blog";
import { projects as defaultProjects, Project } from "@/data/projects";
import { skillCategories as defaultSkills, SkillCategory } from "@/data/skills";

interface DataContextType {
  blogs: BlogPost[];
  setBlogs: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  skills: SkillCategory[];
  setSkills: React.Dispatch<React.SetStateAction<SkillCategory[]>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  // Load from localStorage or fallback to defaults
  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem("blogs");
    return saved ? JSON.parse(saved) : defaultBlogs;
  });

  const [projectsList, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : defaultProjects;
  });

  const [skills, setSkills] = useState<SkillCategory[]>(() => {
    const saved = localStorage.getItem("skills");
    return saved ? JSON.parse(saved) : defaultSkills;
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projectsList));
  }, [projectsList]);

  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  return (
    <DataContext.Provider
      value={{
        blogs,
        setBlogs,
        projects: projectsList,
        setProjects,
        skills,
        setSkills,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
