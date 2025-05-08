
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the emerging trends shaping the future of web development and how developers can prepare for the changes ahead.',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    date: 'May 5, 2024',
    readTime: '8 min read',
    category: 'Web Development',
    content: `
# The Future of Web Development: Trends to Watch in 2025

As we move further into the decade, web development continues to evolve at a rapid pace. From new frameworks and tools to innovative approaches to user experience, staying ahead of the curve is essential for modern developers.

## AI-Assisted Development

Artificial intelligence is no longer just a buzzword but a practical tool that's transforming how we build websites and applications. AI-powered tools now help with code completion, debugging, and even design suggestions, enabling developers to work more efficiently and focus on creative problem-solving rather than repetitive tasks.

## WebAssembly Goes Mainstream

WebAssembly (Wasm) has been gaining traction, allowing developers to run code at near-native speed in the browser. In 2025, we're seeing more applications leveraging Wasm to deliver desktop-like performance on the web, especially for computation-heavy tasks like video editing, 3D rendering, and complex data visualization.

## Serverless Architecture Evolution

Serverless architecture continues to mature, offering more flexibility and scalability for web applications. The ecosystem around serverless has expanded significantly, making it easier than ever to build, deploy, and manage serverless applications without worrying about infrastructure.

## Conclusion

The web development landscape of 2025 is marked by a blend of technological advancement and a renewed focus on user experience and accessibility. By staying informed about these trends and continuously learning, developers can position themselves at the forefront of this exciting field.

    `
  },
  {
    id: '2',
    title: 'Creating Accessible Web Applications: A Comprehensive Guide',
    excerpt: 'Learn how to build web applications that are accessible to all users, including those with disabilities.',
    coverImage: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04',
    date: 'April 22, 2024',
    readTime: '12 min read',
    category: 'Accessibility',
    content: `
# Creating Accessible Web Applications: A Comprehensive Guide

Web accessibility is not just a nice-to-have feature—it's an essential aspect of modern web development. Creating accessible websites ensures that all users, including those with disabilities, can access and interact with your content.

## Understanding WCAG Guidelines

The Web Content Accessibility Guidelines (WCAG) provide a framework for making web content more accessible. These guidelines are organized around four principles: perceivable, operable, understandable, and robust.

## Keyboard Navigation

Many users with motor disabilities rely on keyboard navigation. Ensure that all interactive elements on your website can be accessed and operated using only a keyboard. This includes focusing states, tab order, and keyboard shortcuts.

## Screen Reader Compatibility

Screen readers are essential tools for users with visual impairments. Proper semantic HTML, ARIA attributes, and text alternatives for non-text content can significantly improve the screen reader experience.

## Conclusion

Building accessible web applications is not just about compliance—it's about creating inclusive experiences that everyone can enjoy. By incorporating these practices into your development workflow, you can make a significant difference in how users with disabilities experience the web.

    `
  },
  {
    id: '3',
    title: 'Optimizing React Applications for Performance',
    excerpt: 'Discover practical strategies to improve the performance of your React applications and deliver a better user experience.',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    date: 'April 10, 2024',
    readTime: '10 min read',
    category: 'React',
    content: `
# Optimizing React Applications for Performance

React has become one of the most popular libraries for building user interfaces, but with great power comes great responsibility. Ensuring your React applications perform well is crucial for providing a good user experience.

## Code Splitting

Code splitting is a technique that allows you to split your bundle into smaller chunks which can be loaded on demand. This can significantly reduce the initial load time of your application, especially for larger projects.

## Memoization

React provides several ways to memoize components and values, preventing unnecessary re-renders. React.memo, useMemo, and useCallback are powerful tools that, when used correctly, can optimize your application's performance.

## Virtual DOM Optimization

Understanding how React's Virtual DOM works can help you write more efficient code. By minimizing state changes and keeping your component tree shallow, you can reduce the reconciliation work React needs to do.

## Conclusion

Performance optimization in React is an ongoing process that requires attention to detail and a good understanding of how React works under the hood. By implementing these strategies, you can create React applications that are both feature-rich and performant.

    `
  },
];
