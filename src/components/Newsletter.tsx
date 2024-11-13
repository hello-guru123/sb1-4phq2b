import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="section-padding bg-[#ff6b00]">
      <div className="container-custom">
        <div className="text-center text-white max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with GoRoboTech
          </h2>
          <p className="mb-8">
            Subscribe to our newsletter for the latest updates, tutorials, and
            special offers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-[#ff6b00] px-6 py-3 rounded-lg font-semibold 
                       hover:bg-gray-100 transition-colors duration-200 flex items-center 
                       justify-center space-x-2"
            >
              <span>Subscribe</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;