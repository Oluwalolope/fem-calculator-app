import Header from './components/Header'
import Display from './components/Display'
import KeyPad from './components/KeyPad'
import { useState, useEffect } from 'react'

const themeFromLocalStorage = localStorage.getItem('theme') || 1;

const App = () => {
  const [theme, setTheme] = useState(themeFromLocalStorage);

  const handleChange = (value) => {
    setTheme(value);
    localStorage.setItem('theme', value)
  };

  useEffect(() => {
    document.querySelector('body').setAttribute('data-theme', theme)
  }, [theme]);

  return (
    <div className="container">
      <Header currentTheme={theme} handleChange={handleChange}/>
      <Display />
      <KeyPad />
    </div>
  )
}

export default App