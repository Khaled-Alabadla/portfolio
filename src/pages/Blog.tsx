import React, { useState } from "react";
import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useData } from "@/contexts/DataContext";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogPostCard = ({ post }) => {
  const { language } = useLanguage();

  // Use Arabic content if available and Arabic is selected
  const title = language === "ar" && post.title_ar ? post.title_ar : post.title;
  const excerpt =
    language === "ar" && post.excerpt_ar ? post.excerpt_ar : post.excerpt;
  const category =
    language === "ar" && post.category_ar ? post.category_ar : post.category;

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
          <h3
            className={`text-xl font-serif font-semibold hover:text-primary transition-colors ${
              language === "ar" ? "font-arabic" : ""
            }`}
          >
            {title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent
        className={`flex-grow ${language === "ar" ? "font-arabic" : ""}`}
      >
        <p className="text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {/* <span className="text-sm text-muted-foreground">{post.readTime}</span> */}
        <Button variant="ghost" size="sm" asChild>
          <Link
            to={`/blog/${post.id}`}
            className={language === "ar" ? "font-arabic" : ""}
          >
            {language === "ar" ? "قراءة المزيد" : "Read More"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Blog = () => {
  const { blogs } = useData();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { t, language } = useLanguage();

  // Get unique categories from the blogs array, considering the current language
  const getCategories = () => {
    if (language === "ar") {
      return [
        ...new Set(blogs.map((post) => post.category_ar || post.category)),
      ];
    }
    return [...new Set(blogs.map((post) => post.category))];
  };

  const categories = getCategories();

  const filteredPosts = blogs.filter((post) => {
    const categoryField =
      language === "ar" ? post.category_ar || post.category : post.category;
    const titleField =
      language === "ar" ? post.title_ar || post.title : post.title;
    const excerptField =
      language === "ar" ? post.excerpt_ar || post.excerpt : post.excerpt;

    const categoryMatch =
      selectedCategory === "All" || categoryField === selectedCategory;
    const searchMatch =
      titleField.toLowerCase().includes(searchQuery.toLowerCase()) ||
      excerptField.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h1
              className={`text-4xl font-serif font-semibold mb-4 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("blogHeading")}
            </h1>
            <p
              className={`text-xl text-muted-foreground ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("blogDescription")}
            </p>
          </div>

          <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("All")}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <input
                type="text"
                placeholder={t("searchPosts")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              )}
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3
                className={`text-xl font-medium mb-2 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {t("noPostsFound")}
              </h3>
              <p
                className={`text-muted-foreground mb-6 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {t("tryChanging")}
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                {t("clearFilters")}
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
