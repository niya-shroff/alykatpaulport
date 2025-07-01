import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const phrases = [
    'Content Creator',
    'Studying Biotech',
    'Songwriting',
    'Blogging',
    'Crocheting'
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;
    const currentPhrase = phrases[currentPhraseIndex];

    const typeText = () => {
      if (currentIndex <= currentPhrase.length) {
        setTypewriterText(currentPhrase.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeText, 100);
      } else {
        // Pause before starting to delete
        timeoutId = setTimeout(deleteText, 2000);
      }
    };

    const deleteText = () => {
      if (currentIndex > 0) {
        currentIndex--;
        setTypewriterText(currentPhrase.slice(0, currentIndex));
        timeoutId = setTimeout(deleteText, 50);
      } else {
        // Move to next phrase
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    // Start typing
    typeText();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentPhraseIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-rose-50 to-red-100 relative overflow-hidden">
      {/* Floating Sparkles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${15 + (i * 6)}%`,
              transform: `translateY(${scrollY * (0.1 + i * 0.02)}px) rotate(${scrollY * 0.1}deg)`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + i * 0.3}s`
            }}
          >
            <Sparkles 
              className={`w-${3 + (i % 3)} h-${3 + (i % 3)} text-red-400 opacity-${30 + (i % 4) * 10}`} 
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div 
            className="flex items-center justify-center mb-6 transform transition-transform duration-300"
            style={{
              transform: `translateY(${scrollY * -0.1}px) scale(${1 + scrollY * 0.0001})`
            }}
          >
            <div className="relative">
              <Sparkles className="w-8 h-8 text-red-500 mr-2 animate-spin" style={{ animationDuration: '3s' }} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-red-600 font-medium min-h-[24px] flex items-center">
              {typewriterText}
              <span 
                className={`ml-1 text-red-600 transition-opacity duration-100 ${
                  showCursor ? 'opacity-100' : 'opacity-0'
                }`}
              >
                |
              </span>
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 transform transition-transform duration-300"
            style={{
              transform: `translateY(${scrollY * -0.15}px)`
            }}
          >
            Hi, I'm{' '}
            <span 
              className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent animate-gradient"
              style={{
                backgroundSize: '200% 200%',
                transform: `translateX(${Math.sin(scrollY * 0.01) * 2}px)`
              }}
            >
              Aly Paul
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed transform transition-transform duration-300"
            style={{
              transform: `translateY(${scrollY * -0.08}px)`
            }}
          >
            Singer, YouTuber, UGC Creator & Travel Blogger bringing authentic stories to life through music, video, and written word.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 transform transition-transform duration-300"
            style={{
              transform: `translateY(${scrollY * -0.05}px)`
            }}
          >
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Explore My Work</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-red-600 font-semibold rounded-full hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/50"
            >
              Get In Touch
            </a>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="animate-bounce transform transition-transform duration-300 cursor-pointer hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-full p-2"
            style={{
              transform: `translateY(${scrollY * -0.03}px) rotate(${Math.sin(scrollY * 0.01) * 5}deg)`
            }}
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-6 h-6 text-red-500 mx-auto drop-shadow-lg" />
          </button>
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-200/40 to-red-300/40 rounded-full blur-3xl animate-pulse" 
           style={{ transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.08}px)` }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-300/40 to-red-200/40 rounded-full blur-3xl animate-pulse" 
           style={{ transform: `translate(${scrollY * -0.03}px, ${scrollY * 0.06}px)`, animationDelay: '1s' }}></div>
    </section>
  );
}