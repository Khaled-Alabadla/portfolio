
import React from 'react';
import Layout from '@/components/Layout';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl font-serif font-semibold mb-4">Contact Me</h1>
            <p className="text-xl text-muted-foreground">
              Have a question or want to work together? Let's get in touch!
            </p>
          </div>
        </div>
      </section>
      
      <ContactSection />
      
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="bg-secondary/40 rounded-lg p-6 md:p-10">
            <h2 className="text-2xl font-serif font-semibold text-center mb-6">Let's collaborate!</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Whether you have a question or just want to say hi, I'll try my best to get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
