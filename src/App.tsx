import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ContentSections from './components/ContentSections';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <ContentSections />
      <SocialLinks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;