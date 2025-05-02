import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

type FooterProps = {
  isDarkMode: boolean;
};

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/srinivas-808' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/srinivas-kola-b22774291' },
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:srinivaskola808.com' },
  ];

  return (
    <footer className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`p-2 rounded-full transition-all duration-300 hover:text-blue-600 hover:scale-110 ${
                  isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-200'
                }`}
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="text-center">
            <a href="#home" className="text-xl font-bold tracking-tighter mb-4 inline-block">
              <span className="text-blue-600">Port</span>
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>folio</span>
            </a>
            <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;