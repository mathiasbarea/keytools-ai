import React from 'react';
import { Zap, Shield, Smile } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { icon: Zap, title: 'Lightning Fast', description: 'Get results in milliseconds, not hours.' },
    { icon: Shield, title: 'Secure & Private', description: 'Your data is encrypted and never shared.' },
    { icon: Smile, title: 'User-Friendly', description: 'Intuitive interface for users of all skill levels.' },
  ];

  return (
    <section id="features" className="py-20 bg-purple-800 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose AIWorks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="w-16 h-16 mx-auto mb-4 text-purple-300" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-purple-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;