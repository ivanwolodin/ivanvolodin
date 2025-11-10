import React from 'react';
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
  return (
    <div className="app">
      <Header />
      <main className="app__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/talk" element={<Talks />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
