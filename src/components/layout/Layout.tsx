import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const Layout: React.FC<LayoutProps> = ({ children, isDarkMode, toggleDarkMode }) => {
  return (
    <div className={isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="min-h-screen pt-16 sm:pt-20">{children}</main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Layout;