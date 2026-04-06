import { useState, useEffect } from 'react'


function App() {
  // default at dark theme, toggle to light if desired
  const [isDark, setIsDark] = useState(true)

  // whenever isDark changes, add/remove "light" class on <html>
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <div>
      <p style={{ color: 'var(--orange)', padding: '2rem' }}>
        App is working — theme is: {isDark ? 'Dark 🌙' : 'Light ☀️'}
      </p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default App