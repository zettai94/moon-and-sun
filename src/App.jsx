import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import InfoBar from './components/InfoBar';
import MenuSection from './components/MenuSection';
import DrinkFeatured from './components/DrinkFeatured';


function App() {
  // default at dark theme, toggle to light if desired
  const [isDark, setIsDark] = useState(true);

  // whenever isDark changes, add/remove "light" class on <html>
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <div>
      <NavBar isDark={isDark} toggleTheme={toggleTheme} />
      <HeroSection />
      <InfoBar />
      <MenuSection />
      <DrinkFeatured isDark={isDark} />
    </div>
  );
}

export default App;