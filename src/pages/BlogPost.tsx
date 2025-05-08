
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/blog';
import { Card, CardContent } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);
  
  React.useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) return null;
  
  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);
  
  return (
    <Layout>
      <article className="py-20">
        <div className="container max-w-4xl fade-in">
          <Button variant="ghost" asChild className="mb-8 hover-link">
            <Link to="/blog" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Back to all posts
            </Link>
          </Button>
          
          <div className="flex items-center gap-4 mb-8">
            <Badge variant="outline" className="px-3 py-1 text-sm font-medium">{post.category}</Badge>
            <span className="text-muted-foreground text-sm">{post.date}</span>
            <span className="text-muted-foreground text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              {post.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="aspect-[2/1] overflow-hidden rounded-xl mb-10 shadow-lg">
            <img 
              src={`${post.coverImage}?auto=format&fit=crop&w=1200&h=600`}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          {relatedPosts.length > 0 && (
            <div className="mt-20 border-t pt-12">
              <h3 className="text-2xl font-serif font-semibold mb-8">Related Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map(relatedPost => (
                  <Card key={relatedPost.id} className="overflow-hidden blog-card">
                    <div className="aspect-[3/2] overflow-hidden">
                      <img 
                        src={`${relatedPost.coverImage}?auto=format&fit=crop&w=400&h=250`}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <Link 
                        to={`/blog/${relatedPost.id}`}
                        className="text-lg font-serif font-medium hover:text-primary transition-colors"
                      >
                        {relatedPost.title}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-3">
                        {relatedPost.excerpt.substring(0, 100)}...
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
