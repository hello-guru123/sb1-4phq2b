import React from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Bee-Bot',
    category: 'Beginner',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400',
    description: 'Perfect for introducing programming concepts to young learners',
  },
  {
    id: 2,
    name: 'LEGO Mindstorms',
    category: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=400',
    description: 'Build and program advanced robots with endless possibilities',
  },
  {
    id: 3,
    name: 'Arduino Pro Kit',
    category: 'Advanced',
    image: 'https://images.unsplash.com/photo-1568633453703-2f46baa014c0?auto=format&fit=crop&q=80&w=400',
    description: 'Professional-grade robotics kit for serious enthusiasts',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-12">Featured Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-[#ff6b00] text-white px-3 py-1 rounded-full text-sm">
                  {product.category}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              
              <button className="text-[#ff6b00] font-semibold flex items-center hover:text-[#e65d00] transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;