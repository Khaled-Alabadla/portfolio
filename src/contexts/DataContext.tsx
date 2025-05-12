
import React, { createContext, useContext, useState, useEffect } from 'react';
import { blogPosts, BlogPost } from '@/data/blog';
import { projects, Project } from '@/data/projects';
import { skillCategories, SkillCategory } from '@/data/skills';

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
  const [blogs, setBlogs] = useState<BlogPost[]>(blogPosts);
  const [projectsList, setProjects] = useState<Project[]>(projects);
  const [skills, setSkills] = useState<SkillCategory[]>(skillCategories);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
    localStorage.setItem('projects', JSON.stringify(projectsList));
    localStorage.setItem('skills', JSON.stringify(skills));
  }, [blogs, projectsList, skills]);

  // Load data from localStorage on initial load
  useEffect(() => {
    const savedBlogs = localStorage.getItem('blogs');
    const savedProjects = localStorage.getItem('projects');
    const savedSkills = localStorage.getItem('skills');

    if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
    if (savedProjects) setProjects(JSON.parse(savedProjects));
    if (savedSkills) setSkills(JSON.parse(savedSkills));
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
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
