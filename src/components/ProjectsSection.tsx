import React from "react";
import { FaExpandAlt } from "react-icons/fa"; // example icon from react-icons
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useData } from "@/contexts/DataContext";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectCard = ({ project }) => {
  const { language } = useLanguage();

  // Use localized content based on the selected language
  const title =
    language === "ar" && project.title_ar ? project.title_ar : project.title;
  const description =
    language === "ar" && project.description_ar
      ? project.description_ar
      : project.description;
  const tags =
    language === "ar" && project.tags_ar ? project.tags_ar : project.tags;

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={`${project.image}?auto=format&fit=crop&w=600&h=350`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Icon button overlay */}
        <button
          onClick={() => window.open(project.image, "_blank")}
          aria-label="Open image in new tab"
          className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          style={{ zIndex: 10 }}
          type="button"
        >
          <FaExpandAlt size={18} />
        </button>
      </div>

      <CardHeader>
        <h3
          className={`text-xl font-serif font-semibold ${
            language === "ar" ? "font-arabic" : ""
          }`}
        >
          {title}
        </h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <div
          className={`text-muted-foreground mb-4 whitespace-pre-line ${
            language === "ar" ? "font-arabic" : ""
          }`}
        >
          {description}
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        {project.demoUrl && (
          <Button size="sm" variant="default" asChild>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className={language === "ar" ? "font-arabic" : ""}
            >
              {language === "ar" ? "الانتقال إلى الموقع" : "View Demo"}
            </a>
          </Button>
        )}
        {project.repoUrl && (
          <Button size="sm" variant="outline" asChild>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className={language === "ar" ? "font-arabic" : ""}
            >
              {language === "ar" ? "عرض الكود" : "View Code"}
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = ({ limit = 0 }) => {
  const { projects } = useData();
  const { t, language } = useLanguage();
  const displayProjects = limit > 0 ? projects.slice(0, limit) : projects;

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2
            className={`text-3xl font-serif font-semibold mb-4 ${
              language === "ar" ? "font-arabic" : ""
            }`}
          >
            {limit > 0 ? t("featuredProjects") : t("myProjects")}
          </h2>
          <p
            className={`text-muted-foreground ${
              language === "ar" ? "font-arabic" : ""
            }`}
          >
            {t("projectsDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {limit > 0 && projects.length > limit && (
          <div className="mt-12 text-center">
            <Button asChild>
              <Link
                to="/projects"
                className={language === "ar" ? "font-arabic" : ""}
              >
                {t("viewAllProjects")}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
