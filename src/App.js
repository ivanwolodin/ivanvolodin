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

  useEffect(() => {
    const saved = localStorage.getItem("soundEnabled");
    if (saved !== null) {
      setSoundEnabled(saved === "1");
    }
  }, []);

  return (
    <div className="app">
      <Header soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />
      <main className="app__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
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
