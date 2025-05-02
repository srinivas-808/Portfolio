export type Skill = {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'design' | 'other';
};

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'React', level: 70, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 70, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  
  // Design
  { name: 'UI/UX Design', level: 85, category: 'design' },
  { name: 'Figma', level: 80, category: 'design' },
  { name: 'Adobe XD', level: 75, category: 'design' },
  { name: 'Responsive Design', level: 90, category: 'design' },
  
  // Other
  { name: 'Git/GitHub', level: 85, category: 'other' },
  { name: 'AWS', level: 65, category: 'other' },
  { name: 'Google Cloud', level: 75, category: 'other' },
  { name: 'Agile/Scrum', level: 80, category: 'other' },
];