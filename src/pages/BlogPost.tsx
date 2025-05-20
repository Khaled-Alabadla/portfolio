import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import { useData } from "@/contexts/DataContext";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs } = useData();
  const { language, t } = useLanguage();

  const [isLoading, setIsLoading] = React.useState(true);

  const post = blogs.find((p) => String(p.id) === id);

  React.useEffect(() => {
    if (blogs.length === 0) {
      // Still loading blogs
      setIsLoading(true);
      return;
    }

    if (!post) {
      // Blogs loaded but post not found
      navigate("/blog");
      return;
    }

    setIsLoading(false);
    window.scrollTo(0, 0);
  }, [blogs, post, navigate]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <p className="text-muted-foreground text-lg">Loading...</p>
        </div>
      </Layout>
    );
  }

  if (!post) return null;

  const title = language === "ar" && post.title_ar ? post.title_ar : post.title;
  const content =
    language === "ar" && post.content_ar ? post.content_ar : post.content;
  const category =
    language === "ar" && post.category_ar ? post.category_ar : post.category;

  const relatedPosts = blogs
    .filter((p) => {
      const pCategory =
        language === "ar" && p.category_ar ? p.category_ar : p.category;
      return pCategory === category && p.id !== post.id;
    })
    .slice(0, 2);

  return (
    <Layout>
      <article className="py-20">
        <div className="container max-w-4xl fade-in">
          <Button variant="ghost" asChild className="mb-8 hover-link">
            <Link
              to="/blog"
              className={`flex items-center ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-4 w-4 ${language === "ar" ? "ml-2" : "mr-2"}`}
              >
                <path
                  d={language === "ar" ? "m12 19 7-7-7-7" : "m12 19-7-7 7-7"}
                ></path>
                <path d="M19 12H5"></path>
              </svg>
              {t("blog")}
            </Link>
          </Button>

          <div className="flex items-center gap-4 mb-8">
            <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
              {category}
            </Badge>
            <span className="text-muted-foreground text-sm">{post.date}</span>
          </div>

          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-8 leading-tight ${
              language === "ar" ? "font-arabic" : ""
            }`}
          >
            {title}
          </h1>

          <div className="aspect-[2/1] overflow-hidden rounded-xl mb-10 shadow-lg">
            <img
              src={`${post.coverImage}?auto=format&fit=crop&w=1200&h=600`}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className={`prose prose-lg dark:prose-invert max-w-none ${
              language === "ar" ? "font-arabic rtl" : ""
            }`}
          >
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-20 border-t pt-12">
              <h3
                className={`text-2xl font-serif font-semibold mb-8 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {t("relatedPosts")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => {
                  const relatedTitle =
                    language === "ar" && relatedPost.title_ar
                      ? relatedPost.title_ar
                      : relatedPost.title;
                  const relatedExcerpt =
                    language === "ar" && relatedPost.excerpt_ar
                      ? relatedPost.excerpt_ar
                      : relatedPost.excerpt;

                  return (
                    <Card
                      key={relatedPost.id}
                      className="overflow-hidden blog-card"
                    >
                      <div className="aspect-[3/2] overflow-hidden">
                        <img
                          src={`${relatedPost.coverImage}?auto=format&fit=crop&w=400&h=250`}
                          alt={relatedTitle}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="pt-6">
                        <Link
                          to={`/blog/${relatedPost.id}`}
                          className={`text-lg font-serif font-medium hover:text-primary transition-colors ${
                            language === "ar" ? "font-arabic" : ""
                          }`}
                        >
                          {relatedTitle}
                        </Link>
                        <p
                          className={`text-sm text-muted-foreground mt-3 ${
                            language === "ar" ? "font-arabic" : ""
                          }`}
                        >
                          {relatedExcerpt.substring(0, 100)}...
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
