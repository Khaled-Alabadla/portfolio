
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useData } from '@/contexts/DataContext';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillBar = ({ level }: { level: number }) => {
  return (
    <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
      <div 
        className="bg-primary h-full rounded-full"
        style={{ width: `${level * 20}%` }}
      />
    </div>
  );
};

const SkillsSection = () => {
  const { skills } = useData();
  const { t, language } = useLanguage();
  
  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className={`text-3xl font-serif font-semibold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('mySkills')}
          </h2>
          <p className={`text-muted-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('skillsDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="bg-primary text-primary-foreground p-4">
                <h3 className={`text-xl font-serif font-semibold ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' && category.name_ar ? category.name_ar : category.name}
                </h3>
              </div>
              <CardContent className="pt-6">
                <ul className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className={cn("font-medium", 
                          skill.level > 3 ? "text-foreground" : "text-muted-foreground"
                        )}>
                          {language === 'ar' && skill.name_ar ? skill.name_ar : skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}/5
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
