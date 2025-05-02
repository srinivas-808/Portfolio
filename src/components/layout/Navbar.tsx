import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

type NavbarProps = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${isDarkMode ? 'bg-gray-900/90 shadow-lg' : 'bg-white/90 shadow-md'} backdrop-blur-md`
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold tracking-tighter">
              <span className="text-blue-600">Port</span>
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>folio</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun size={20} className="text-gray-200" />
                ) : (
                  <Moon size={20} className="text-gray-800" />
                )}
              </button>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-gray-200" />
              ) : (
                <Moon size={20} className="text-gray-800" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg absolute w-full`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;