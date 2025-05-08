
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

const ProjectCard = ({ project }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img 
          src={`${project.image}?auto=format&fit=crop&w=600&h=350`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-serif font-semibold">{project.title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        {project.demoUrl && (
          <Button size="sm" variant="default" asChild>
            <a href={project.demoUrl} target="_blank" rel="noreferrer">View Demo</a>
          </Button>
        )}
        {project.repoUrl && (
          <Button size="sm" variant="outline" asChild>
            <a href={project.repoUrl} target="_blank" rel="noreferrer">View Code</a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = ({ limit = 0 }) => {
  const displayProjects = limit > 0 ? projects.slice(0, limit) : projects;
  
  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            Here are some of my recent projects. Each one presented unique challenges and opportunities to grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {limit > 0 && (
          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
