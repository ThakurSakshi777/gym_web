
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import WorkoutSessions from './components/WorkoutSessions.jsx';
import Gallery from './components/Gallery.jsx';
import Pricing from './components/Pricing.jsx';import Contact from './components/Contact.jsx';
import BMICalculator from './components/BMICalculator.jsx';



function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer/>
      <ToastContainer theme='drak' position='top-right' autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss />
    </Router>
  )
}

export default App
