
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import AdminAuth from "./components/AdminAuth";

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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <DataProvider>
      <LanguageProvider>
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
              
              {/* Admin routes with authentication */}
              <Route path="/khaled-esam/dash/admin" element={
                <AdminAuth>
                  <Admin />
                </AdminAuth>
              } />
              <Route path="/admin" element={<Navigate to="/khaled-esam/dash/admin" replace />} />
              <Route path="/khaled-esam/dash/admin/blogs" element={
                <AdminAuth>
                  <AdminBlog />
                </AdminAuth>
              } />
              <Route path="/admin/blogs" element={<Navigate to="/khaled-esam/dash/admin/blogs" replace />} />
              <Route path="/khaled-esam/dash/admin/skills" element={
                <AdminAuth>
                  <AdminSkills />
                </AdminAuth>
              } />
              <Route path="/admin/skills" element={<Navigate to="/khaled-esam/dash/admin/skills" replace />} />
              <Route path="/khaled-esam/dash/admin/projects" element={
                <AdminAuth>
                  <AdminProjects />
                </AdminAuth>
              } />
              <Route path="/admin/projects" element={<Navigate to="/khaled-esam/dash/admin/projects" replace />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </DataProvider>
  </QueryClientProvider>
);

export default App;
