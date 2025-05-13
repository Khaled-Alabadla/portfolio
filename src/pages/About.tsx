import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import SkillsSection from "@/components/SkillsSection";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl font-serif font-semibold mb-4">
              {t("aboutMe")}
            </h1>
            <p className="text-xl text-muted-foreground">{t("aboutDesc")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1">
              <img
                src="../bg.jpg"
                alt="Profile"
                className="rounded-lg w-full h-auto object-cover shadow-md"
              />
            </div>

            <div className="md:col-span-2">
              <h2 className="text-2xl font-serif font-semibold mb-4">
                {t("myStory")}
              </h2>
              <p className="text-muted-foreground mb-4">{t("aboutContent")}</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-serif font-semibold text-center mb-8">
              {t("workExperience")}
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-xl font-serif font-semibold">
                      {t(role1Title)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(role1Date)}
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    {t(role1Company)}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>{t(role1Item1)}</li>
                    <li>{t(role1Item2)}</li>
                    <li>{t(role1Item3)}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-xl font-serif font-semibold">
                      {t(role2Title)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(role2Date)}
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    {t(role2Company)}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>{t(role2Item1)}</li>
                    <li>{t(role2Item2)}</li>
                    <li>{t(role2Item3)}</li>
                    <li>{t(role2Item4)}</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-xl font-serif font-semibold">
                      {t(role3Title)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(role3Date)}
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    {t(role3Company)}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>{t(role3Item1)}</li>
                    <li>{t(role3Item2)}</li>
                    <li>{t(role3Item3)}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-serif font-semibold text-center mb-8">
              {t("education")}
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-serif font-semibold">
                    {t(educationDegree)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {" "}
                    {t(educationDate)}
                  </p>
                </div>
                <p className="text-muted-foreground">
                  {t(educationUniversity)}
                </p>
                <p>{t(educationGPA)}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SkillsSection />
    </Layout>
  );
};

export default About;
