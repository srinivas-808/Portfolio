import React, { useState } from 'react';
import { skills } from '../../data/skills';

type SkillsProps = {
  isDarkMode: boolean;
};

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const categories = ['all', 'frontend', 'backend', 'design', 'other'];
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>My Skills</span>
            <div className="h-1 w-1/2 bg-blue-600 absolute -bottom-2 left-1/4 rounded-full"></div>
          </h2>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
            I've developed expertise in various technologies and constantly strive to expand my knowledge.
            Here's an overview of my technical skills and proficiency levels.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 capitalize ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : isDarkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredSkills.map(skill => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</span>
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{skill.level}%</span>
              </div>
              <div className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div 
                  className="h-full rounded-full bg-blue-600 transition-all duration-1000 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;