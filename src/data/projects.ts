
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce platform built with React and Node.js, featuring product management, user authentication, and payment processing.',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://example.com/demo',
    repoUrl: 'https://github.com/yourname/e-commerce-platform',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A productivity app that helps users organize tasks, set deadlines, and track progress. Includes drag-and-drop functionality and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91',
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
    demoUrl: 'https://example.com/task-app',
    repoUrl: 'https://github.com/yourname/task-management',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A weather application that provides real-time forecasts, historical data, and interactive maps using multiple weather APIs.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
    tags: ['JavaScript', 'React', 'API Integration', 'Chart.js'],
    demoUrl: 'https://example.com/weather',
    repoUrl: 'https://github.com/yourname/weather-dashboard',
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects and skills with a clean, modern design and animations.',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    demoUrl: 'https://yourportfolio.com',
    repoUrl: 'https://github.com/yourname/portfolio',
  },
];
