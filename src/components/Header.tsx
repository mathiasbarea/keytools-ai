import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-transparent py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">AIWorks</a>
        <nav className="hidden md:flex space-x-6">
          <a href="#products" className="hover:text-purple-300 transition-colors">Products</a>
          <a href="#testimonials" className="hover:text-purple-300 transition-colors">Testimonials</a>
          <a href="#features" className="hover:text-purple-300 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-purple-300 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-purple-700 mt-2">
          <a href="#products" className="block py-2 px-4 hover:bg-purple-600">Products</a>
          <a href="#testimonials" className="block py-2 px-4 hover:bg-purple-600">Testimonials</a>
          <a href="#features" className="block py-2 px-4 hover:bg-purple-600">Features</a>
          <a href="#pricing" className="block py-2 px-4 hover:bg-purple-600">Pricing</a>
          <a href="#contact" className="block py-2 px-4 hover:bg-purple-600">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;