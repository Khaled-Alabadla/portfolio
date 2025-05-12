
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const Admin = () => {
  React.useEffect(() => {
    toast({
      title: "Admin Dashboard",
      description: "Welcome to the admin dashboard. Please select an option to manage your content.",
    });
  }, []);

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl font-serif font-semibold mb-4">Admin Dashboard</h1>
            <p className="text-xl text-muted-foreground">
              Manage your website content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AdminCard 
              title="Manage Blog Posts"
              description="Add, edit or delete blog posts"
              linkTo="/admin/blogs"
            />
            <AdminCard 
              title="Manage Skills"
              description="Update your skills and expertise"
              linkTo="/admin/skills"
            />
            <AdminCard 
              title="Manage Projects"
              description="Add or modify your portfolio projects"
              linkTo="/admin/projects"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

const AdminCard = ({ title, description, linkTo }) => {
  return (
    <div className="border rounded-lg p-6 flex flex-col items-center text-center">
      <h3 className="text-xl font-serif font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Button asChild>
        <Link to={linkTo}>Manage</Link>
      </Button>
    </div>
  );
};

export default Admin;
