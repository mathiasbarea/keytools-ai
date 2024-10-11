import React from 'react';
import { FileText, Image, MessageCircle } from 'lucide-react';

const ProductExamples: React.FC = () => {
  const products = [
    { icon: FileText, title: 'AI Document Analysis', description: 'Extract key insights from documents in seconds.' },
    { icon: Image, title: 'Intelligent Image Recognition', description: 'Identify objects and scenes in images with high accuracy.' },
    { icon: MessageCircle, title: 'Smart Chatbot', description: 'Engage customers with AI-powered conversations.' },
  ];

  return (
    <section id="products" className="py-20 bg-purple-800 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our AI-Powered Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg">
              <product.icon className="w-12 h-12 mb-4 text-purple-300" />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-purple-100">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductExamples;