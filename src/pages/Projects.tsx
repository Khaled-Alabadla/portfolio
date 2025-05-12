
import React from 'react';
import Layout from '@/components/Layout';
import ProjectsSection from '@/components/ProjectsSection';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t, language } = useLanguage();
  
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className={`text-4xl font-serif font-semibold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('myProjects')}
            </h1>
            <p className={`text-xl text-muted-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('projectsDescription')}
            </p>
          </div>
        </div>
      </section>
      
      <ProjectsSection />
    </Layout>
  );
};

export default Projects;
