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
    title: "Smart Energy-Efficient Road Studs Using IoT",
    description: "A device that Enhances Road Safety along with power conservation using IOT.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0k4Q3M-d4F8vRP7lDwCYMPOA_QWA8_gUPRwE6djFwMfFficYQnao5namuuNo5nvSa9A&usqp=CAU",
    tags: ["IOT", "Python", "C++", "Sensors"],
    demoUrl: "",
    githubUrl: ""
  } ,
  {
    id: 2,
    title: "WriteIt app",
    description: "render any documents in own custom fonts in a step.",
    imageUrl: "https://i.ytimg.com/vi/Io5HuqtAcWs/maxresdefault.jpg",
    tags: ["python", "Flask", "OpenCV", "JSON"],
    demoUrl: "https://writeit-25w6.onrender.com/",
    githubUrl: "https://github.com/srinivas-808/WriteIt"
  },
  {
    id: 3,
    title: "AI-Coding-Agent",
    description: "Auto debug the ai generated code until perfection of code as required by user.",
    imageUrl: "https://lh3.googleusercontent.com/rd-gg-dl/AJfQ9KS4xoomCZAM7z3-f9PWz-IHKmMX0p2mZZHJPd7Gfphq54N_cJiG4d1scVpsD0I9dBJE8JbCVhAQjSGSnWSfEXwQXZFUadrjRzXY1ZqPvF5a3MrRPOOSiglj3Vb6_4j1ng4AiXoMtsDpkIENeql5sN18AeD_QIwgRJDPlYFWAT9VBYI1kK8m4grEIjvsak5S5eenFzr-CmaTl6ZVuIzDH5n_2zCXKcLyYEqTORnqKacgptbpxchjNPC0iXpvgdlGDLcwEn7ZTDnOlxYgVYpMdt-C2sLuOSvd6FeFm_-3_0HC2naJfxnRNw40VZ7EpbdhXxYM9Jfg0MK3I4JZE7xN55Sy5Wc594MKdzK2phRdu_PjE_8X6Ku0-oezHOe5SLxUzPSOhAdlHJVFAgeN974TZhBC5f1ctXgwNRW8KIasQ1dNjZGd6Idhl8SyghBktypSNfhAtpZiA4JKavpIgEMsKPY0djzweZ8ZMS3K5oUnCjgFeZEnWHQTUfvzp63T52MBHgZaQkzAp7Ad74twKPUfU_Ef_s_qpBxMBX9drCDUZCNGD8YHcxxXAh1m74-8Y9rWmwUX2Ls-STMP0jf7RFTxoc7ynQSL4oWHV5G4UOoEh3n2RrOYcZSPZKJI6-QkcuuALbl3mIdl5sE_BV1DZXECNZlV3MseETQJPnSpaKO-P19DnOIVEtUi2935W5JUL6MGqfwXpj87wTOCgtkaQ_ZsuIvryrl9mJQygDenjGGg_9ld25DSDra6ra5To-1P3_HIQ9Eu-AWMv00wGvsb5teI37Y4jshUi5UdAbSdljXu8IAH5z8fW5tXRmMCVwG0UbX1MTe6lmTy4PhcTxzm_ITqWPNKmPKQr-skWvvpnQBx3cbNb9afAvAKzSuYRVgqZe36HDWW4KDgS1ZBTgDDM8CT1rTQKQjO-J7RbG2X9pBie3lGuaXR0rnJg0UPysnT3jMSWRWLx-STkqLbT90qPXBX8qtoJp0ZBB3vuOLDwyl2_GYy4DjsRSsBp6eCtaBEgBARJe1stFzNjiLDWuhpq0DpDxhkpQdNv2p5IaX502IzYf-q9pZS1ieKDpO8xHPSDoDAtQP5tKeF9Fto906dLvQThXhgY7SVWMV9WvkuIdof6-6wAPw5ZiFLYe0OTInQRy_HpU2Se9r1qXGOMOskgPX30jpREhsK-Ud1=s1024-rj",
    tags: ["Python", "Gemini AI", "API Integration", "Flask", "Langchain", "Docker"],
    demoUrl: "",
    githubUrl: ""
  }/*,
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
