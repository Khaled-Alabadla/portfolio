
import React from 'react';
import Layout from '@/components/Layout';
import ProjectsSection from '@/components/ProjectsSection';

const Projects = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl font-serif font-semibold mb-4">My Projects</h1>
            <p className="text-xl text-muted-foreground">
              A showcase of my work, personal projects, and contributions.
            </p>
          </div>
        </div>
      </section>
      
      <ProjectsSection />
    </Layout>
  );
};

export default Projects;
