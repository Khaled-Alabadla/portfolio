
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import pages
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Import admin pages
import Admin from "./pages/Admin";
import AdminBlog from "./pages/AdminBlog";
import AdminSkills from "./pages/AdminSkills";
import AdminProjects from "./pages/AdminProjects";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

// Admin route protection component
const ProtectedRoute = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Check if the current user is authorized
    const username = localStorage.getItem('admin-username');
    const password = localStorage.getItem('admin-password');
    
    // Simple authentication check - in real app this should be more secure
    const isAdmin = username === 'khaled-esam' && password === 'admin-pass';
    setIsAuthorized(isAdmin);
    
    // If not logged in and accessing admin page, prompt for credentials
    if (!isAdmin) {
      const promptUsername = window.prompt('Enter admin username:');
      if (promptUsername === 'khaled-esam') {
        const promptPassword = window.prompt('Enter admin password:');
        if (promptPassword === 'admin-pass') {
          localStorage.setItem('admin-username', promptUsername);
          localStorage.setItem('admin-password', promptPassword);
          setIsAuthorized(true);
        }
      }
    }
  }, []);
  
  // If authorized, show the admin route, otherwise redirect to home
  return isAuthorized ? children : <Navigate to="/" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admin routes with custom path and protection */}
          <Route path="/khaled-esam/dash/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />
          <Route path="/khaled-esam/dash/admin/blogs" element={
            <ProtectedRoute>
              <AdminBlog />
            </ProtectedRoute>
          } />
          <Route path="/khaled-esam/dash/admin/skills" element={
            <ProtectedRoute>
              <AdminSkills />
            </ProtectedRoute>
          } />
          <Route path="/khaled-esam/dash/admin/projects" element={
            <ProtectedRoute>
              <AdminProjects />
            </ProtectedRoute>
          } />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
