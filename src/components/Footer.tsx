import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  return (
    <footer className="bg-secondary py-10 mt-20">
      <div className="container">
        <div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-start text-center md:text-center gap-12">
              <div className="md:w-1/3 mb-8 sm:w-full">
                <h3
                  className={`text-lg font-serif font-bold mb-4 ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {t("developerName")}
                </h3>{" "}
                <p
                  className={`text-muted-foreground ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {t("professionalDeveloper")}
                </p>
              </div>

              <div className="md:w-1/3 mb-8 sm:w-full">
                <h4
                  className={`text-base font-bold mb-4 ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {t("quickLinks")}
                </h4>{" "}
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/"
                      className={`text-muted-foreground hover:text-primary ${
                        language === "ar" ? "font-arabic" : ""
                      }`}
                    >
                      {t("home")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={`text-muted-foreground hover:text-primary ${
                        language === "ar" ? "font-arabic" : ""
                      }`}
                    >
                      {t("about")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={`text-muted-foreground hover:text-primary ${
                        language === "ar" ? "font-arabic" : ""
                      }`}
                    >
                      {t("projects")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={`text-muted-foreground hover:text-primary ${
                        language === "ar" ? "font-arabic" : ""
                      }`}
                    >
                      {t("blog")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={`text-muted-foreground hover:text-primary ${
                        language === "ar" ? "font-arabic" : ""
                      }`}
                    >
                      {t("contact")}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="md:w-1/3 sm:w-full">
                <h4
                  className={`text-base font-bold mb-4 ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {t("connect")}
                </h4>{" "}
                <div className="flex justify-center md:justify-center space-x-4">
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 
                6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 
                2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 
                1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 
                3.78c0 5.42 3.3 6.61 6.44 
                7A3.37 3.37 0 0 0 9 18.13V22"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/khaled-alabadla"
                    aria-label="LinkedIn"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 
              0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 
              6-6z"
                      ></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border/40 mt-8 text-center text-sm text-muted-foreground">
          <p className={language === "ar" ? "font-arabic" : ""}>
            © {currentYear} {t("developerName")}. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
