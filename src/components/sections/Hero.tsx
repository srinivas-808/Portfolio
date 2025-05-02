import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

type HeroProps = {
  isDarkMode: boolean;
};

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const phrases = ["developer", "designer", "creator"];
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typeSpeed = 150;
    
    const type = () => {
      const phrase = phrases[currentPhrase];
      
      if (isDeleting) {
        if (textRef.current) {
          textRef.current.textContent = phrase.substring(0, currentChar - 1);
        }
        currentChar--;
        typeSpeed = 100;
      } else {
        if (textRef.current) {
          textRef.current.textContent = phrase.substring(0, currentChar + 1);
        }
        currentChar++;
        typeSpeed = 150;
      }
      
      if (!isDeleting && currentChar === phrase.length) {
        isDeleting = true;
        typeSpeed = 1500;
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        typeSpeed = 500;
      }
      
      setTimeout(type, typeSpeed);
    };
    
    const typingTimeout = setTimeout(type, 1000);
    
    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 z-0" />
      
      {/* Decorative elements */}
      <div className="absolute left-20 top-20 w-64 h-64 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute right-20 bottom-20 w-64 h-64 bg-teal-300 dark:bg-teal-700 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
              Hello, I'm a <span className="text-blue-600">Srinivas</span>
            </span>
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I craft elegant and functional digital experiences, turning complex problems into beautiful solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center gap-2"
            >
              View Projects <ArrowRight size={16} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              isDarkMode={isDarkMode}
              className="w-full sm:w-auto"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className={`inline-block p-2 rounded-full ${
            isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
          }`}
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;