import React from 'react';
import { Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">AI that Works for You</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">Boost productivity while saving time and money.</p>
      <button className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50">
        <span className="flex items-center">
          Get Started <Zap className="ml-2 w-5 h-5" />
        </span>
      </button>
    </section>
  );
};

export default Hero;