import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Menu from './components/Menu';
import TestimonialsPage from './components/TestimonialsPage';
import Reservations from './components/Reservations';
import AboutPage from './components/AboutPage';
import Login from './components/Login';

function App() {
  return (
    <Router basename="/little-lemon-webapp">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
