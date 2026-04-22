import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import StoryPage from './pages/StoryPage';


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
    <BrowserRouter>
      <NavBar isDark={isDark} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<LandingPage isDark={isDark} />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;