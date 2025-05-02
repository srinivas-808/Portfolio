import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import useTheme from './hooks/useTheme';

function App() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </Layout>
  );
}

export default App;