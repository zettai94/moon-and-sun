import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';


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
    </div>
  );
}

export default App;