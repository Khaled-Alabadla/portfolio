
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { BlogPost } from '@/data/blog';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useData } from '@/contexts/DataContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminBlog = () => {
  const { blogs, setBlogs } = useData();
  const { t } = useLanguage();
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState<BlogPost>({
    id: '',
    title: '',
    title_ar: '',
    excerpt: '',
    excerpt_ar: '',
    coverImage: '',
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    readTime: '5 min read',
    category: '',
    category_ar: '',
    content: '',
    content_ar: ''
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
      const updatedPosts = blogs.map(post => 
        post.id === isEditing ? { ...formData } : post
      );
      setBlogs(updatedPosts);
      toast({
        title: "Post Updated",
        description: "The blog post has been successfully updated.",
      });
      setIsEditing(null);
    } else {
      // Create new post
      const newId = blogs.length > 0 ? 
        (Math.max(...blogs.map(p => parseInt(p.id))) + 1).toString() : "1";
      const newPost = {
        ...formData,
        id: newId
      };
      setBlogs([...blogs, newPost]);
      toast({
        title: "Post Created",
        description: "A new blog post has been created.",
      });
    }

    // Reset form
    setFormData({
      id: '',
      title: '',
      title_ar: '',
      excerpt: '',
      excerpt_ar: '',
      coverImage: '',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: '5 min read',
      category: '',
      category_ar: '',
      content: '',
      content_ar: ''
    });
    setIsAdding(false);
  };

  const handleEditClick = (post: BlogPost) => {
    setFormData({
      ...post,
      title_ar: post.title_ar || '',
      excerpt_ar: post.excerpt_ar || '',
      category_ar: post.category_ar || '',
      content_ar: post.content_ar || ''
    });
    setIsEditing(post.id);
    setIsAdding(true);
  };

  const handleDeleteClick = (id: string) => {
    const updatedPosts = blogs.filter(post => post.id !== id);
    setBlogs(updatedPosts);
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
            <h1 className="text-3xl font-serif font-semibold">{t('manageBlogPosts')}</h1>
            <div className="flex gap-4">
              <Button onClick={() => setIsAdding(true)}>{t('addNewPost')}</Button>
              <Button variant="outline" asChild>
                <Link to="/admin">{t('backToDashboard')}</Link>
              </Button>
            </div>
          </div>

          {isAdding ? (
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit}>
                  <Tabs defaultValue="general">
                    <TabsList className="mb-4">
                      <TabsTrigger value="general">{t('generalInfo')}</TabsTrigger>
                      <TabsTrigger value="english">{t('englishContent')}</TabsTrigger>
                      <TabsTrigger value="arabic">{t('arabicContent')}</TabsTrigger>
                    </TabsList>

                    <TabsContent value="general">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="coverImage">{t('coverImageUrl')}</Label>
                          <Input 
                            id="coverImage" 
                            name="coverImage" 
                            value={formData.coverImage} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="date">Date</Label>
                            <Input 
                              id="date" 
                              name="date" 
                              value={formData.date} 
                              onChange={handleInputChange} 
                              required 
                            />
                          </div>
                          <div>
                            <Label htmlFor="readTime">Read Time</Label>
                            <Input 
                              id="readTime" 
                              name="readTime" 
                              value={formData.readTime} 
                              onChange={handleInputChange} 
                              required 
                            />
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="english">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="title">{t('postTitle')}</Label>
                          <Input 
                            id="title" 
                            name="title" 
                            value={formData.title} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="category">{t('category')}</Label>
                          <Input 
                            id="category" 
                            name="category" 
                            value={formData.category} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="excerpt">{t('excerpt')}</Label>
                          <Textarea 
                            id="excerpt" 
                            name="excerpt" 
                            value={formData.excerpt} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="content">{t('content')}</Label>
                          <Textarea 
                            id="content" 
                            name="content" 
                            value={formData.content} 
                            onChange={handleInputChange} 
                            required 
                            className="h-64 font-mono"
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="arabic">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="title_ar">{t('postTitleAr')}</Label>
                          <Input 
                            id="title_ar" 
                            name="title_ar" 
                            value={formData.title_ar} 
                            onChange={handleInputChange} 
                            dir="rtl"
                            className="font-arabic"
                          />
                        </div>
                        <div>
                          <Label htmlFor="category_ar">{t('categoryAr')}</Label>
                          <Input 
                            id="category_ar" 
                            name="category_ar" 
                            value={formData.category_ar} 
                            onChange={handleInputChange} 
                            dir="rtl"
                            className="font-arabic"
                          />
                        </div>
                        <div>
                          <Label htmlFor="excerpt_ar">{t('excerptAr')}</Label>
                          <Textarea 
                            id="excerpt_ar" 
                            name="excerpt_ar" 
                            value={formData.excerpt_ar} 
                            onChange={handleInputChange} 
                            dir="rtl"
                            className="font-arabic"
                          />
                        </div>
                        <div>
                          <Label htmlFor="content_ar">{t('contentAr')}</Label>
                          <Textarea 
                            id="content_ar" 
                            name="content_ar" 
                            value={formData.content_ar} 
                            onChange={handleInputChange} 
                            dir="rtl"
                            className="h-64 font-mono font-arabic"
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <div className="flex justify-end gap-2 pt-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => {
                          setIsAdding(false);
                          setIsEditing(null);
                        }}
                      >
                        {t('cancel')}
                      </Button>
                      <Button type="submit">
                        {isEditing ? t('updatePost') : t('createPost')}
                      </Button>
                    </div>
                  </Tabs>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('postTitle')}</TableHead>
                  <TableHead>{t('category')}</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-[150px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogs.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">{t('noPostsFound')}</TableCell>
                  </TableRow>
                ) : (
                  blogs.map((post) => (
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
                            {t('edit')}
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm" 
                            onClick={() => handleDeleteClick(post.id)}
                          >
                            {t('delete')}
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
