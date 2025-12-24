import React, { createContext, useContext, useState, useEffect } from "react";

// Define available languages
export type Language = "en" | "ar";

// Define translations
export const translations = {
  en: {
    // Navigation
    title: "Khaled Esam - Personal Portfolio & Blog",
    home: "Home",
    about: "About",
    projects: "Projects",
    blog: "Blog",
    contact: "Contact",
    admin: "Admin",

    // Hero section
    heroTitle: "Hello, I'm",
    heroName: " Khaled Esam",
    heroDesc:
      "A Laravel and Vue.js developer who turns ideas into real, useful web solutions — from interactive apps and e-commerce sites to custom tools for businesses.",
    viewWork: "View My Work",
    getInTouch: "Get In Touch",

    // About page
    aboutMe: "About Me",
    aboutDesc:
      "A clear look at my journey, experience, and the passion that drives every line of code.",

    role1Title: "PHP Laravel Developer",
    role1Date: "2021 - Now",
    role1Company: "Freelancing",
    role1Item1:
      "Lead the development of multiple web applications using PHP and Laravel",
    role1Item2:
      "Implement and maintain RESTful APIs for various client projects",
    role1Item3: "Working on many freelancing projects for various clients",

    role2Title: "Field Training",
    role2Date: "2024 - 2025",
    role2Company: "Al-Qarara Municipality",
    role2Item1:
      "Successfully completed a practical training at Al-Qarara Municipality",
    role2Item2:
      "Designed and developed a comprehensive aid management system tailored to the municipality's needs",
    role2Item3:
      "The system was officially adopted and implemented, streamlining aid distribution and improving service efficiency",
    role2Item4:
      "Earned recognition from the municipality for delivering a high-quality and impactful solution",

    role3Title: "Database Management Training",
    role3Date: "2024 - 2025",
    role3Company: "Gaza Sky Geeks (GSG)",
    role3Item1:
      "Completed Database Engineering training with hands-on experience",
    role3Item2:
      "Gained solid skills in database design, normalization, and schema structuring",
    role3Item3:
      "Practiced query optimization techniques for enhanced performance",

    educationDegree: "Bachelor of Science in Software Engineering",
    educationDate: "2020 - 2025",
    educationUniversity: "University of Palestine - Palestine",
    educationGPA: "93.59%",

    myStory: "My Story",
    workExperience: "Work Experience",
    aboutContent: `Khaled Esam Alabadla, a software engineer specializing in modern web developmentusing Laravel and Vue.js.

I’m living in Gaza, Palestine, and I graduated with a GPA of 93.66 in Software Engineering from the University of Palestine in 2025.

Over the years, I’ve developed innovative solutions for a variety of projects, From e-commerce stores to advanced web applications, I’ve worked with large governmental institutions like the Al-Qarara Municipality, gaining extensive experience in delivering flexible and high-performance software solutions.

Additionally, I’m proficient in handling various databases and creating APIs for seamless system integration.

My skills include:
-Building modern web applications using Laravel and Vue.js.
-Developing high-performance e-commerce stores with exceptional user experience.
-Handling databases and executing advanced and complex queries.
-Developing and integrating APIs to connect systems and achieve interaction between applications.
-Utilizing modern programming techniques in web development.`,
    education: "Education",
    // Skills section
    mySkills: "My Skills",
    skillsDesc:
      "Over the years, I’ve built solid expertise across modern web technologies. Here’s a snapshot of my core skills.",

    // Blog
    readMore: "Read More",
    searchPosts: "Search posts...",
    clearFilters: "Clear Filters",
    noPostsFound: "No posts found",
    tryChanging: "Try changing your search criteria or category filter.",
    blogHeading: "Blog",
    blogDescription:
      "Explore my thoughts, tutorials, and insights on web development, technology, and the latest trends.",
    fromTheBlog: "From The Blog",
    blogInsights:
      "Insights, tutorials, and thoughts on development, design, and technology.",

    // Projects
    myProjects: "My Projects",
    projectsDescription:
      "A showcase of my work, personal projects, and contributions.",
    featuredProjects: "Featured Projects",
    projectsDesc:
      "Here are some of my recent projects. Each one presented unique challenges and opportunities to grow.",
    viewProject: "View Project",
    viewCode: "View Code",
    viewAllProjects: "View All Projects",

    // Contact
    contactMe: "Contact Me",
    contactDesc:
      "Have a question or want to work together? Let's get in touch!",
    sendMessage: "Send Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    subject: "Subject",
    message: "Message",
    getInTouchHeading: "Get In Touch",
    getInTouchDesc:
      "Have a question or want to work together? Feel free to reach out!",
    contactInformation: "Contact Information",
    email: "Email",
    location: "Location",
    cityAndCountry: "Gaza, Palestine",
    followMe: "Follow Me",
    letsCollaborate: "Let's collaborate!",
    collaborateDesc:
      "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Whether you have a question or just want to say hi, I'll try my best to get back to you as soon as possible.",
    sending: "Sending...",

    // Footer
    quickLinks: "Quick Links",
    connect: "Connect",
    allRightsReserved: "All rights reserved.",
    developerName: "Khaled Esam",
    professionalDeveloper:
      "A professional developer specializing in creating elegant, user-friendly web applications.",

    // Admin
    adminDashboard: "Admin Dashboard",
    manageContent: "Manage your website content",
    manageBlogPosts: "Manage Blog Posts",
    manageSkills: "Manage Skills",
    manageProjects: "Manage Projects",
    addNewPost: "Add New Post",
    backToDashboard: "Back to Dashboard",
    postTitle: "Post Title",
    postTitleAr: "Post Title (Arabic)",
    category: "Category",
    categoryAr: "Category (Arabic)",
    coverImageUrl: "Cover Image URL",
    excerpt: "Excerpt",
    excerptAr: "Excerpt (Arabic)",
    content: "Content (Markdown)",
    contentAr: "Content (Arabic, Markdown)",
    cancel: "Cancel",
    createPost: "Create Post",
    updatePost: "Update Post",
    edit: "Edit",
    delete: "Delete",

    // Project Admin
    projectTitle: "Project Title",
    projectTitleAr: "Project Title (Arabic)",
    projectDesc: "Description",
    projectDescAr: "Description (Arabic)",
    projectImage: "Project Image URL",
    tags: "Tags (comma separated)",
    tagsAr: "Tags in Arabic (comma separated)",
    demoUrl: "Demo URL",
    repoUrl: "Repository URL",

    // Language toggle
    changeLanguage: "Change Language",
    english: "English",
    arabic: "Arabic",

    // Bilingual content
    englishContent: "English Content",
    arabicContent: "Arabic Content",
    generalInfo: "General Information",

    // Admin Auth
    adminLogin: "Admin Login",
    loginToAccess: "Login to access administrative features",
    username: "Username",
    password: "Password",
    login: "Login",
    invalidCredentials: "Invalid username or password",

    // Date and time
    minRead: "min read",

    // Blog post details
    relatedPosts: "Related Posts",
  },
  ar: {
    // Navigation
    title: "خالد عصام - الملف الشخصي",
    home: "الرئيسية",
    about: "من أنا؟",
    projects: "المشاريع",
    blog: "المدونة",
    contact: "اتصل بي",
    admin: "إدارة",

    // Hero section
    heroTitle: "السلام عليكم، أنا",
    heroName: " خالد عصام",
    heroDesc:
      "مهندس برمجيات | مطور الواجهات الخلفية باستخدام PHP Laravel | مطور الواجهات الأمامية باستخدام Vue.js",
    viewWork: "عرض أعمالي",
    getInTouch: "تواصل معي",

    role1Title: "مطور PHP Laravel",
    role1Date: "2021 - الآن",
    role1Company: "العمل الحر",
    role1Item1:
      "تطوير وإدارة العديد من المشاريع باستخدام إطار العمل PHP Laravel",
    role1Item2:
      "برمجة وصيانة RESTful APIs لمطوري الواحهات الأمامية وتطبيقات الموبايل",
    role1Item3:
      "إنجاز العديد من المشاريع لعملاء من مختلف الجنسيات على مواقع العمل الحر",

    role2Title: "تدريب ميداني",
    role2Date: "2024 - 2025",
    role2Company: "بلدية القرارة",
    role2Item1:
      "إتمام التدريب الميداني بنجاح في بلدية القرارة وإنجاز المهمة المطلوبة على أكمل وجه",
    role2Item2:
      "تصميم وتطوير نظام إدارة المساعدات لموظفي البلدية بشكل كامل يتناسب مع احتياجات البلدية",
    role2Item3:
      "تم اعتماد النظام رسميًا وتنفيذه، مما أدى إلى تسريع توزيع المساعدات وتحسين كفاءة الخدمة",
    role2Item4:
      "حصلت بحمد الله على تقدير من البلدية وإشادة من قبل الإدارة والموظفين على المشروع المنجز",

    role3Title: "تدريب إلكتروني في مجال إدارة قواعد البيانات",
    role3Date: "2024 - 2025",
    role3Company: "Gaza Sky Geeks (GSG)",
    role3Item1: "إتمام دورة تدريبية في هندسة قواعد البيانات مع الخبرة العملية",
    role3Item2:
      "اكتساب مهارات قيمة قي مجال إدارة وتصميم قواعد البيانات، تسهم في بناء قواعد بيانات آمنة وقابلة للتوسع",
    role3Item3:
      "التدريب والتركيز بشكل كبير على صياغة الاستعلامات بأفضل الطرق لتحسين الأداء",

    // About page
    aboutMe: "من هو خالد؟",
    aboutDesc: "إليك نبذة مبسطة عني وعن خبرتي في مجال تطوير البرمجيات",
    myStory: "قصتي",
    aboutContent: `خالد عصام العبادلة، مهندس برمجيات متخصص في تطوير تطبيقات الويب الحديثة باستخدام Laravel و Vue.js.

       أعيش في غزة، فلسطين، وحاصل على درجة البكالوريوس في هندسة البرمجيات من جامعة فلسطين بتقدير 93.63،

       على مرّ سنواتي في مجال البرمجيات، قمت بتطوير حلول مبتكرة لمجموعة متنوعة من المشاريع. بدءًا من المتاجر الإلكترونية إلى تطبيفات الويب المتقدمة، عملت مع مؤسسات حكومية كبيرة مثل بلدية القراة، مما أكسبني خبرة واسعة في تقديم حلول برمجية مرنة وعالية الأداء.
       
       بالإضافة إلى ذلك، أتقن التعامل مع قواعد البيانات المختلفة وإنشاء APIs لتكامل الأنظمة بشكل مثالي.
       
       مهاراتي تشمل:
       -بناء تطبيقات ويب حديثة باستخدام Laravel و Vue.js.
       -تطوير متاجر إلكترونية ذات أداء عالٍ وتجربة مستخدم مميزة.
       -التعامل مع قواعد البيانات وتنفيذ استعلامات متقدمة ومعقدة.
       -تطوير ودمج APIs لربط الأنظمة وتحقيق التفاعل بين التطبيقات.
       -استخدام تقنيات البرمجة الحديثة في تطوير المواقع.`,

    workExperience: "الخبرة العملية",
    education: "التعليم",

    educationDegree: "درجة البكالوريوس في هندسة البرمجيات",
    educationDate: "2020 - 2025",
    educationUniversity: "جامعة فلسطين - فلسطين",
    educationGPA: "93.59%",

    // Skills section
    mySkills: "مهاراتي",
    skillsDesc: "إليك بعض المهارات التي اكتسبتها خلال سنوات العمل.",

    // Blog
    readMore: "قراءة المزيد",
    searchPosts: "بحث ...",
    clearFilters: "مسح الفلاتر",
    noPostsFound: "لا توجد مقالات",
    tryChanging: "حاول تغيير معايير البحث أو فلتر الفئة.",
    blogHeading: "المدونة",
    blogDescription: "أفكار ومقالات متنوعة حول تطوير الويب والتكنولوجيا.",
    fromTheBlog: "من المدونة",
    blogInsights: "أفكار ومقالات متنوعة حول تطوير الويب والتكنولوجيا.",

    // Projects
    myProjects: "مشاريعي",
    projectsDescription: "عرض لأعمالي ومشاريعي الشخصية ومساهماتي.",
    featuredProjects: "مشاريع مميزة",
    projectsDesc:
      "هنا بعض من مشاريعي الحديثة، والتي اكتسبت من خلالها خبرات متنوعة.",
    viewProject: "عرض المشروع",
    viewCode: "عرض الكود",
    viewAllProjects: "عرض كل المشاريع",

    // Contact
    contactMe: "اتصل بي",
    contactDesc: "هل لديك سؤال أو ترغب في العمل معًا؟ دعنا نتواصل!",
    sendMessage: "إرسال الرسالة",
    yourName: "الاسم",
    yourEmail: "البريد الإلكتروني",
    subject: "الموضوع",
    message: "الرسالة",
    getInTouchHeading: "تواصل معي",
    getInTouchDesc: "هل لديك سؤال أو ترغب في العمل معًا؟ لا تتردد في التواصل!",
    contactInformation: "معلومات الاتصال",
    email: "البريد الإلكتروني",
    location: "الموقع",
    cityAndCountry: "غزة، فلسطين",
    followMe: "تابعني",
    letsCollaborate: "دعنا نتعاون!",
    collaborateDesc:
      "أنا دائمًا منفتح لمناقشة المشاريع الجديدة والأفكار الإبداعية أو الفرص لأكون جزءًا من رؤيتك. سواء كان لديك سؤال أو تريد فقط أن تقول مرحبًا، سأحاول بذل قصارى جهدي للرد عليك في أقرب وقت ممكن.",
    sending: "جاري الإرسال...",

    // Footer
    quickLinks: "روابط سريعة",
    connect: "تواصل",
    allRightsReserved: "جميع الحقوق محفوظة.",
    developerName: "خالد عصام",
    professionalDeveloper:
      "مطور محترف متخصص في إنشاء تطبيقات ويب أنيقة وسهلة الاستخدام.",

    // Admin
    adminDashboard: "لوحة الإدارة",
    manageContent: "إدارة محتوى موقعك",
    manageBlogPosts: "إدارة المدونة",
    manageSkills: "إدارة المهارات",
    manageProjects: "إدارة المشاريع",
    addNewPost: "إضافة مقال جديد",
    backToDashboard: "العودة للوحة التحكم",
    postTitle: "عنوان المقال",
    postTitleAr: "عنوان المقال (بالعربية)",
    category: "الفئة",
    categoryAr: "الفئة (بالعربية)",
    coverImageUrl: "رابط صورة الغلاف",
    excerpt: "مقتطف",
    excerptAr: "مقتطف (بالعربية)",
    content: "المحتوى (Markdown)",
    contentAr: "المحتوى بالعربية (Markdown)",
    cancel: "إلغاء",
    createPost: "إنشاء مقال",
    updatePost: "تحديث المقال",
    edit: "تعديل",
    delete: "حذف",

    // Project Admin
    projectTitle: "عنوان المشروع",
    projectTitleAr: "عنوان المشروع (بالعربية)",
    projectDesc: "الوصف",
    projectDescAr: "الوصف (بالعربية)",
    projectImage: "رابط صورة المشروع",
    tags: "الوسوم (مفصولة بفواصل)",
    tagsAr: "الوسوم بالعربية (مفصولة بفواصل)",
    demoUrl: "رابط العرض التجريبي",
    repoUrl: "رابط المستودع",

    // Language toggle
    changeLanguage: "تغيير اللغة",
    english: "الإنجليزية",
    arabic: "العربية",

    // Bilingual content
    englishContent: "المحتوى بالإنجليزية",
    arabicContent: "المحتوى بالعربية",
    generalInfo: "معلومات عامة",

    // Admin Auth
    adminLogin: "تسجيل الدخول للمدير",
    loginToAccess: "سجل الدخول للوصول إلى ميزات الإدارة",
    username: "اسم المستخدم",
    password: "كلمة المرور",
    login: "تسجيل الدخول",
    invalidCredentials: "اسم المستخدم أو كلمة المرور غير صحيحة",

    // Date and time
    minRead: "دقيقة للقراءة",

    // Blog post details
    relatedPosts: "منشورات ذات صلة",
  },
};

// Define context type
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof typeof translations.en) => string;
}

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Provider component
export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Get language from localStorage or default to English
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage || "en";
  });

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
    // Set dir attribute on html element for RTL support
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    // Add appropriate language class to body for tailwind RTL plugin
    if (language === "ar") {
      document.body.classList.add("font-arabic");
    } else {
      document.body.classList.remove("font-arabic");
    }
  }, [language]);

  // Translation function
  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook for using language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
