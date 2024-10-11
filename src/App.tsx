import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap, Shield, Smile, DollarSign, Send } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductExamples from './components/ProductExamples';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingDots from './components/FloatingDots';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-indigo-800 text-white">
      <FloatingDots />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <ProductExamples />
          <Testimonials />
          <Features />
          <Pricing />
          <ContactForm />
        </main>
        <Footer />
      </div>
      <div
        className="fixed bottom-4 right-4 bg-white text-purple-600 rounded-full p-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-100"
        style={{
          opacity: scrollPosition > 300 ? 1 : 0,
          transform: `translateY(${scrollPosition > 300 ? '0' : '20px'})`,
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronDown className="w-6 h-6 transform rotate-180" />
      </div>
    </div>
  );
}

export default App;