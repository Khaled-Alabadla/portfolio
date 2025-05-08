
export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'HTML/CSS',
        icon: 'html',
        level: 5,
      },
      {
        name: 'JavaScript',
        icon: 'javascript',
        level: 5,
      },
      {
        name: 'React',
        icon: 'react',
        level: 4,
      },
      {
        name: 'TypeScript',
        icon: 'typescript',
        level: 4,
      },
      {
        name: 'Tailwind CSS',
        icon: 'tailwind',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'PHP',
        icon: 'php',
        level: 5,
      },
      {
        name: 'Node.js',
        icon: 'node',
        level: 4,
      },
      {
        name: 'Python',
        icon: 'python',
        level: 3,
      },
      {
        name: 'SQL',
        icon: 'database',
        level: 4,
      },
    ],
  },
  {
    name: 'Tools & Technologies',
    skills: [
      {
        name: 'Git',
        icon: 'git',
        level: 4,
      },
      {
        name: 'Docker',
        icon: 'docker',
        level: 3,
      },
      {
        name: 'AWS',
        icon: 'cloud',
        level: 3,
      },
      {
        name: 'CI/CD',
        icon: 'workflow',
        level: 3,
      },
    ],
  },
];
