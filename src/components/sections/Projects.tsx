import React, { useState } from 'react';
import { projects } from '../../data/projects';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ExternalLink, Github } from 'lucide-react';

type ProjectsProps = {
  isDarkMode: boolean;
};

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  // Extract unique tags from all projects
  const allTags = ['All', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  // Filter projects based on selected tag
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>My Projects</span>
            <div className="h-1 w-1/2 bg-blue-600 absolute -bottom-2 left-1/4 rounded-full"></div>
          </h2>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
            Explore my recent work and see how I solve problems through design and development.
            Each project represents a unique challenge and solution.
          </p>
          
          {/* Project filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeFilter === tag
                    ? 'bg-blue-600 text-white'
                    : isDarkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <Card isDarkMode={isDarkMode} className="h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 flex-grow ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className={`text-xs px-2 py-1 rounded-full ${
                          isDarkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className="w-full"
                      >
                        <ExternalLink size={14} className="mr-1" /> Demo
                      </Button>
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button 
                        variant="outline" 
                        size="sm" 
                        isDarkMode={isDarkMode}
                        className="w-full"
                      >
                        <Github size={14} className="mr-1" /> Code
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;