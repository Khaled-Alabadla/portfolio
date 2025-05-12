
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { useData } from '@/contexts/DataContext';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogPostCard = ({ post }) => {
  const { language } = useLanguage();
  
  // Use localized content based on the selected language
  const title = language === 'ar' && post.title_ar ? post.title_ar : post.title;
  const excerpt = language === 'ar' && post.excerpt_ar ? post.excerpt_ar : post.excerpt;
  const category = language === 'ar' && post.category_ar ? post.category_ar : post.category;
  
  return (
    <Card className="overflow-hidden h-full flex flex-col blog-card">
      <div className="aspect-video overflow-hidden">
        <img 
          src={`${post.coverImage}?auto=format&fit=crop&w=600&h=350`}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline">{category}</Badge>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>
        <Link to={`/blog/${post.id}`}>
          <h3 className={`text-xl font-serif font-semibold hover:text-primary transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
            {title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className={`text-muted-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
          {excerpt}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">{post.readTime}</span>
        <Button variant="ghost" size="sm" asChild>
          <Link to={`/blog/${post.id}`} className={language === 'ar' ? 'font-arabic' : ''}>
            {language === 'ar' ? 'قراءة المزيد' : 'Read More'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const BlogSection = ({ limit = 0 }) => {
  const { blogs } = useData();
  const { t, language } = useLanguage();
  const displayPosts = limit > 0 ? blogs.slice(0, limit) : blogs;
  
  return (
    <section className="py-16 bg-secondary/40">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className={`text-3xl font-serif font-semibold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('fromTheBlog')}
          </h2>
          <p className={`text-muted-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('blogInsights')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        {limit > 0 && blogs.length > limit && (
          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/blog" className={language === 'ar' ? 'font-arabic' : ''}>
                {t('readMore')}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
