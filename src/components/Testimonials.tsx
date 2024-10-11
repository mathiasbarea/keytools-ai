import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    { name: 'Sarah Johnson', role: 'Marketing Director', quote: 'AIWorks has revolutionized our content creation process. We\'re now producing high-quality materials in half the time.' },
    { name: 'Michael Chen', role: 'Data Scientist', quote: 'The AI-powered analytics tools have given us insights we never thought possible. It\'s like having a team of experts working 24/7.' },
    { name: 'Emily Rodriguez', role: 'Customer Service Manager', quote: 'Our customer satisfaction scores have skyrocketed since implementing the AI chatbot. It\'s been a game-changer for our support team.' },
  ];

  return (
    <section id="testimonials" className="py-20 bg-indigo-900 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg">
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-400 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-purple-300">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;