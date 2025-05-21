import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_36tl2kc";
const TEMPLATE_ID = "template_yadk68n";
const PUBLIC_KEY = "vPTxkKvBAm1Fg3utP";

const ContactSection = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast({
        title: t("messageSentTitle"),
        description: t("messageSentDescription"),
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: t("errorTitle"),
        description: t("errorSendingMessage"),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2
            className={`text-3xl font-serif font-semibold mb-4 ${
              language === "ar" ? "font-arabic" : ""
            }`}
          >
            {t("getInTouchHeading")}
          </h2>
          <p
            className={`text-muted-foreground ${
              language === "ar" ? "font-arabic" : ""
            }`}
          >
            {t("getInTouchDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <h3
                className={`text-xl font-serif font-semibold ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {t("contactInformation")}
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4
                  className={`font-medium ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {t("email")}
                </h4>
                <p className="text-muted-foreground">kh.es.abadla@gmail.com</p>
              </div>
              <div>
                <h4
                  className={`font-medium ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {t("location")}
                </h4>
                <p className="text-muted-foreground">{t("cityAndCountry")}</p>
              </div>
              <div>
                <h4
                  className={`font-medium ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {t("followMe")}
                </h4>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://github.com/Khaled-Alabadla"
                    aria-label="GitHub"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kh-es-abadla"
                    aria-label="LinkedIn"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3
                className={`text-xl font-serif font-semibold ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {t("sendMessage")}
              </h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder={t("yourName")}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t("yourEmail")}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder={t("subject")}
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t("message")}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? t("sending") : t("sendMessage")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
