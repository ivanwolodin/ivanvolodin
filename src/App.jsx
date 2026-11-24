import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Publications from './pages/Publications/Publications';
import Talks from './pages/Talks/Talks';
import AboutMe from './pages/AboutMe/AboutMe';
import Contacts from './pages/Contacts/Contacts';
import './App.css';

function App() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Используем системную тему по умолчанию
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const systemTheme = prefersDark ? "dark" : "light";
      setTheme(systemTheme);
      document.documentElement.setAttribute("data-theme", systemTheme);
    }

    // Слушаем изменения системной темы
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      // Если пользователь не сохранял тему вручную
      if (!savedTheme) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
      }
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("soundEnabled");
    if (saved !== null) setSoundEnabled(saved === "1");
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });
  };

  return (
    <div className="app">
      <Header
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="app__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications soundEnabled={soundEnabled} />} />
          <Route path="/presentations" element={<Talks soundEnabled={soundEnabled} />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
