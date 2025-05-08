
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <SkillsSection />
      <ProjectsSection limit={3} />
      <BlogSection limit={3} />
      <ContactSection />
    </Layout>
  );
};

export default Index;
