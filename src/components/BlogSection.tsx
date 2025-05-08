
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blog';

const BlogPostCard = ({ post }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col blog-card">
      <div className="aspect-video overflow-hidden">
        <img 
          src={`${post.coverImage}?auto=format&fit=crop&w=600&h=350`}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline">{post.category}</Badge>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-xl font-serif font-semibold hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">{post.readTime}</span>
        <Button variant="ghost" size="sm" asChild>
          <Link to={`/blog/${post.id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const BlogSection = ({ limit = 0 }) => {
  const displayPosts = limit > 0 ? blogPosts.slice(0, limit) : blogPosts;
  
  return (
    <section className="py-16 bg-secondary/40">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-4">From The Blog</h2>
          <p className="text-muted-foreground">
            Insights, tutorials, and thoughts on development, design, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        {limit > 0 && (
          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
