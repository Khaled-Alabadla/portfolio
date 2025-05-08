
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import SkillsSection from '@/components/SkillsSection';

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl font-serif font-semibold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Get to know more about my journey, experience, and passion for web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                alt="Profile"
                className="rounded-lg w-full h-auto object-cover shadow-md"
              />
            </div>

            <div className="md:col-span-2">
              <h2 className="text-2xl font-serif font-semibold mb-4">My Story</h2>
              <p className="text-muted-foreground mb-4">
                Hello! I'm Your Name, a passionate web developer with over X years of experience creating websites and applications that not only look great but also provide exceptional user experiences.
              </p>
              <p className="text-muted-foreground mb-4">
                My journey in web development began when I discovered my passion for coding during my studies. Since then, I've worked on numerous projects, ranging from small business websites to complex web applications for clients across different industries.
              </p>
              <p className="text-muted-foreground mb-4">
                I specialize in PHP development, creating custom solutions that meet specific business needs. I'm also proficient in modern frontend technologies like React and TypeScript, allowing me to build full-stack applications that are both powerful and user-friendly.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community engagement.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-serif font-semibold text-center mb-8">Work Experience</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-xl font-serif font-semibold">Senior Web Developer</h3>
                    <p className="text-sm text-muted-foreground">January 2022 - Present</p>
                  </div>
                  <p className="text-muted-foreground mb-2">Company Name, Location</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Lead the development of multiple web applications using PHP and modern JavaScript frameworks</li>
                    <li>Implement and maintain RESTful APIs for various client projects</li>
                    <li>Collaborate with design and product teams to deliver high-quality user experiences</li>
                    <li>Mentor junior developers and conduct code reviews</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-xl font-serif font-semibold">Web Developer</h3>
                    <p className="text-sm text-muted-foreground">March 2019 - December 2021</p>
                  </div>
                  <p className="text-muted-foreground mb-2">Previous Company, Location</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Developed and maintained client websites using PHP, WordPress, and JavaScript</li>
                    <li>Optimized website performance and implemented SEO best practices</li>
                    <li>Worked with cross-functional teams to deliver projects on time and within budget</li>
                    <li>Implemented responsive designs and ensured cross-browser compatibility</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-serif font-semibold text-center mb-8">Education</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-serif font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-sm text-muted-foreground">2015 - 2019</p>
                </div>
                <p className="text-muted-foreground">University Name, Location</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SkillsSection />
    </Layout>
  );
};

export default About;
