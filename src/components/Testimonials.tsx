import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Parent',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    content: 'My daughter has shown incredible growth in problem-solving since starting with GoRoboTech. The hands-on approach really works!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Educator',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
    content: "As a STEM teacher, I have found GoRoboTech's curriculum to be exceptionally well-structured and engaging for students.",
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Student',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    content: "The robotics kits are amazing! I've learned so much about coding and engineering in a fun way.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-12">What Our Community Says</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;