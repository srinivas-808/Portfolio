export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Energy-EƯicient Road Studs Using IoT",
    description: "A device that Enhances Road Safety along with power conservation using IOT.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0k4Q3M-d4F8vRP7lDwCYMPOA_QWA8_gUPRwE6djFwMfFficYQnao5namuuNo5nvSa9A&usqp=CAU",
    tags: ["IOT", "Python", "C++", "Sensors"],
    demoUrl: "https://demo.com/ecommerce",
    githubUrl: "https://github.com/username/ecommerce"
  } ,
  {
    id: 2,
    title: "WriteIt app",
    description: "render any documents in own custom fonts in a step.",
    imageUrl: "https://i.ytimg.com/vi/Io5HuqtAcWs/maxresdefault.jpg",
    tags: ["python", "Flask", "OpenCV", "JSON"],
    demoUrl: "https://demo.com/taskapp",
    githubUrl: "https://github.com/username/taskapp"
  }/*,
  {
    id: 3,
    title: "Weather Dashboard",
    description: "An elegant weather dashboard displaying current conditions and forecasts using data from multiple weather APIs with beautiful visualizations.",
    imageUrl: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["JavaScript", "Chart.js", "API Integration", "CSS"],
    demoUrl: "https://demo.com/weather",
    githubUrl: "https://github.com/username/weather"
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for monitoring social media metrics across multiple platforms with real-time updates and data visualization.",
    imageUrl: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Redux", "D3.js", "Social APIs"],
    demoUrl: "https://demo.com/social",
    githubUrl: "https://github.com/username/social"
  },
  {
    id: 5,
    title: "Personal Finance Tracker",
    description: "A secure and user-friendly application for tracking personal finances, including expense categorization, budget planning, and financial insights.",
    imageUrl: "https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["TypeScript", "React", "Node.js", "MongoDB"],
    demoUrl: "https://demo.com/finance",
    githubUrl: "https://github.com/username/finance"
  },
  {
    id: 6,
    title: "Recipe Finder",
    description: "A delightful recipe application allowing users to discover meals based on available ingredients, dietary restrictions, and cuisine preferences.",
    imageUrl: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "API Integration", "CSS Grid", "Responsive"],
    demoUrl: "https://demo.com/recipe",
    githubUrl: "https://github.com/username/recipe"
  } */
];