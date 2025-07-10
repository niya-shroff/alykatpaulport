import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ContentSections from './components/ContentSections';
import BiotechSection from './components/BiotechSection';
import CrochetSection from './components/CrochetSection';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <BiotechSection />
      <ContentSections />
      <CrochetSection />
      <SocialLinks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;