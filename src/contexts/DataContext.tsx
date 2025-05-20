import React, { createContext, useContext, useState, useEffect } from "react";
import { BlogPost } from "@/data/blog";
import { Project } from "@/data/projects";
import { SkillCategory } from "@/data/skills";
import { supabase } from "@/lib/supabaseClient"; // Make sure this file exists

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
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [projectsList, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<SkillCategory[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // Load blogs if you plan to use Supabase for blogs too
      const { data: blogsData } = await supabase.from("blogs").select("*");
      if (blogsData) setBlogs(blogsData);

      const { data: projectsData } = await supabase
        .from("projects")
        .select("*");
      if (projectsData) setProjects(projectsData);

      const { data: skillsData } = await supabase.from("skills").select("*");
      if (skillsData) setSkills(skillsData);
    };

    fetchData();
  }, []);

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
