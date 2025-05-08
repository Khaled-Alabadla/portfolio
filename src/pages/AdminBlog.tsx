
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts, BlogPost } from '@/data/blog';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const AdminBlog = () => {
  const [posts, setPosts] = useState(blogPosts);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState<BlogPost>({
    id: '',
    title: '',
    excerpt: '',
    coverImage: '',
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    readTime: '5 min read',
    category: '',
    content: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update existing post
      const updatedPosts = posts.map(post => 
        post.id === isEditing ? { ...formData } : post
      );
      setPosts(updatedPosts);
      toast({
        title: "Post Updated",
        description: "The blog post has been successfully updated.",
      });
      setIsEditing(null);
    } else {
      // Create new post
      const newId = (Math.max(...posts.map(p => parseInt(p.id))) + 1).toString();
      const newPost = {
        ...formData,
        id: newId
      };
      setPosts([...posts, newPost]);
      toast({
        title: "Post Created",
        description: "A new blog post has been created.",
      });
    }

    // Reset form
    setFormData({
      id: '',
      title: '',
      excerpt: '',
      coverImage: '',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: '5 min read',
      category: '',
      content: ''
    });
    setIsAdding(false);
  };

  const handleEditClick = (post: BlogPost) => {
    setFormData(post);
    setIsEditing(post.id);
    setIsAdding(true);
  };

  const handleDeleteClick = (id: string) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    toast({
      title: "Post Deleted",
      description: "The blog post has been successfully deleted.",
      variant: "destructive"
    });
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-serif font-semibold">Manage Blog Posts</h1>
            <div className="flex gap-4">
              <Button onClick={() => setIsAdding(true)}>Add New Post</Button>
              <Button variant="outline" asChild>
                <Link to="/admin">Back to Dashboard</Link>
              </Button>
            </div>
          </div>

          {isAdding ? (
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Post Title</Label>
                        <Input 
                          id="title" 
                          name="title" 
                          value={formData.title} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Input 
                          id="category" 
                          name="category" 
                          value={formData.category} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="coverImage">Cover Image URL</Label>
                      <Input 
                        id="coverImage" 
                        name="coverImage" 
                        value={formData.coverImage} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>

                    <div>
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea 
                        id="excerpt" 
                        name="excerpt" 
                        value={formData.excerpt} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>

                    <div>
                      <Label htmlFor="content">Content (Markdown)</Label>
                      <Textarea 
                        id="content" 
                        name="content" 
                        value={formData.content} 
                        onChange={handleInputChange} 
                        required 
                        className="h-64 font-mono"
                      />
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => {
                          setIsAdding(false);
                          setIsEditing(null);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button type="submit">
                        {isEditing ? 'Update Post' : 'Create Post'}
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-[150px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">No blog posts found</TableCell>
                  </TableRow>
                ) : (
                  posts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell>{post.title}</TableCell>
                      <TableCell>{post.category}</TableCell>
                      <TableCell>{post.date}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleEditClick(post)}
                          >
                            Edit
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm" 
                            onClick={() => handleDeleteClick(post.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AdminBlog;
