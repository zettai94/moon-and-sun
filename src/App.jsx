import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import StoryPage from './pages/StoryPage';
import MenuPage from './pages/MenuPage';


function App() {
  // default at dark theme, toggle to light if desired
  const [isDark, setIsDark] = useState(true);

  //active form from navbar: reserve and contact
  const [activeTab, setActiveTab] = useState('contact');

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
      <NavBar 
        isDark={isDark} 
        toggleTheme={toggleTheme}
        setActiveTab={setActiveTab} 
      />
      <Routes>
        <Route path="/" element={
            <LandingPage 
              isDark={isDark}
              activeTab={activeTab}
              setActiveTab={setActiveTab} 
            />
          }
        />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;