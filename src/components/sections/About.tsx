import React from 'react';
import {GraduationCap } from 'lucide-react';

type AboutProps = {
  isDarkMode: boolean;
};

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const experiences = [
    /* {
      title: ' ',
      company: 'Tech Company',
      period: '2020 - Present',
      description: 'Led development teams and architected scalable web applications.',
      icon: <Briefcase size={24} />,
    }, */
    {
      title: 'Intermediate Education',
      company: 'Bharath junior college',
      period: '2020 - 2022',
      description: 'Scored 91.6% in MPC.',
      icon: <GraduationCap size={24} />,
    },
    {
      title: 'Computer Science Degree',
      company: 'Gayatri Vidya Parishad College of Engineering',
      period: '2022 - 2026',
      description: 'Focused on software engineering and web technologies.',
      icon: <GraduationCap size={24} />,
    },
  ];

  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>About Me</span>
              <div className="h-1 w-1/2 bg-blue-600 absolute -bottom-2 left-0 rounded-full"></div>
            </h2>
            <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Computer Science student eager to gain hands-on experience in software engineering, web development, and cloud
            computing, contributing to innovative solutions in a dynamic tech environment.
            </p>
            <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">0</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">2</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects Completed</div>
              </div>
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Happy Clients</div>
              </div> */}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Experience & Education
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      isDarkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {exp.title} | <span className="text-blue-600">{exp.company}</span>
                      </h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                        {exp.period}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;