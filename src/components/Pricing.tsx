import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$29',
      features: ['1 AI-powered tool', '1,000 API calls/month', 'Email support'],
    },
    {
      name: 'Pro',
      price: '$99',
      features: ['3 AI-powered tools', '10,000 API calls/month', 'Priority support', 'Custom integrations'],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['All AI-powered tools', 'Unlimited API calls', '24/7 dedicated support', 'On-premise deployment'],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-indigo-900 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-filter backdrop-blur-lg">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg font-normal">/month</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 mr-2 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-purple-700 transition-colors">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;