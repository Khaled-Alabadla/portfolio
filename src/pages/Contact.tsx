
import React from 'react';
import Layout from '@/components/Layout';
import ContactSection from '@/components/ContactSection';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className={`text-4xl font-serif font-semibold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('contactMe')}
            </h1>
            <p className={`text-xl text-muted-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('contactDesc')}
            </p>
          </div>
        </div>
      </section>
      
      <ContactSection />
      
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="bg-secondary/40 rounded-lg p-6 md:p-10">
            <h2 className={`text-2xl font-serif font-semibold text-center mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('letsCollaborate')}
            </h2>
            <p className={`text-center text-muted-foreground max-w-2xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('collaborateDesc')}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
