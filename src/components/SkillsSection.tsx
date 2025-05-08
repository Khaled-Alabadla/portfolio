
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { skillCategories } from '@/data/skills';
import { cn } from '@/lib/utils';

const SkillBar = ({ level }: { level: number }) => {
  return (
    <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
      <div 
        className="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level * 20}%` }}
      />
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-4">My Skills</h2>
          <p className="text-muted-foreground">
            I've developed expertise in a range of technologies over the years.
            Here's an overview of my technical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-primary text-primary-foreground p-4">
                <h3 className="text-xl font-serif font-semibold">{category.name}</h3>
              </div>
              <CardContent className="pt-6">
                <ul className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className={cn("font-medium", 
                          skill.level > 3 ? "text-foreground" : "text-muted-foreground"
                        )}>
                          {skill.name}
                        </span>
                      </div>
                      <SkillBar level={skill.level} />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
