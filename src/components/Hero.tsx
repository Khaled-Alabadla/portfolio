
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="hero-gradient absolute top-0 right-0 w-1/3 h-1/3 rounded-full blur-[120px] opacity-20" />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative rounded-full overflow-hidden border-4 border-primary/20 shadow-xl w-40 h-40 md:w-48 md:h-48">
              <AspectRatio ratio={1/1} className="bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="Khaled Esam"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </AspectRatio>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 font-serif animate-fade-in">
            <span className="inline-block">Hello, I'm </span>
            <span className="text-primary inline-block">Khaled Esam</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            A passionate developer creating elegant solutions for the web.
            Specializing in PHP, React, and building beautiful digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-base">
              <Link to="/projects">
                View My Work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
