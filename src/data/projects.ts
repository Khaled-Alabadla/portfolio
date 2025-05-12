
export interface Project {
  id: string;
  title: string;
  title_ar?: string;
  description: string;
  description_ar?: string;
  image: string;
  tags: string[];
  tags_ar?: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    title_ar: 'منصة التجارة الإلكترونية',
    description: 'A fully responsive e-commerce platform built with React and Node.js, featuring product management, user authentication, and payment processing.',
    description_ar: 'منصة تجارة إلكترونية متجاوبة بالكامل مبنية باستخدام React و Node.js، وتتميز بإدارة المنتجات، ومصادقة المستخدم، ومعالجة الدفع.',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    tags_ar: ['رياكت', 'نود.جي إس', 'مونجو دي بي', 'سترايب'],
    demoUrl: 'https://example.com/demo',
    repoUrl: 'https://github.com/yourname/e-commerce-platform',
  },
  {
    id: '2',
    title: 'Task Management App',
    title_ar: 'تطبيق إدارة المهام',
    description: 'A productivity app that helps users organize tasks, set deadlines, and track progress. Includes drag-and-drop functionality and team collaboration features.',
    description_ar: 'تطبيق إنتاجية يساعد المستخدمين على تنظيم المهام وتحديد المواعيد النهائية وتتبع التقدم. يتضمن وظائف السحب والإفلات وميزات التعاون الجماعي.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91',
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
    tags_ar: ['تايب سكريبت', 'رياكت', 'فايربيس', 'تيلويند سي إس إس'],
    demoUrl: 'https://example.com/task-app',
    repoUrl: 'https://github.com/yourname/task-management',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    title_ar: 'لوحة معلومات الطقس',
    description: 'A weather application that provides real-time forecasts, historical data, and interactive maps using multiple weather APIs.',
    description_ar: 'تطبيق للطقس يوفر تنبؤات في الوقت الحقيقي وبيانات تاريخية وخرائط تفاعلية باستخدام واجهات برمجة تطبيقات طقس متعددة.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
    tags: ['JavaScript', 'React', 'API Integration', 'Chart.js'],
    tags_ar: ['جافا سكريبت', 'رياكت', 'تكامل API', 'تشارت.جي إس'],
    demoUrl: 'https://example.com/weather',
    repoUrl: 'https://github.com/yourname/weather-dashboard',
  },
  {
    id: '4',
    title: 'Portfolio Website',
    title_ar: 'موقع المحفظة الشخصية',
    description: 'A personal portfolio website showcasing projects and skills with a clean, modern design and animations.',
    description_ar: 'موقع محفظة شخصي يعرض المشاريع والمهارات بتصميم نظيف وحديث ورسوم متحركة.',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    tags_ar: ['رياكت', 'تيلويند سي إس إس', 'فريمر موشن', 'تايب سكريبت'],
    demoUrl: 'https://yourportfolio.com',
    repoUrl: 'https://github.com/yourname/portfolio',
  },
];
