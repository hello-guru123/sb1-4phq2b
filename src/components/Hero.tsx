import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-robots-in-a-warehouse-2741/1080p.mp4"
          type="video/mp4"
        />
      </video>
      
      <div className="absolute inset-0 hero-video-overlay"></div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Build, Code, and Command the Future
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Empower young minds with cutting-edge robotics education
          </p>
          <button className="btn-primary flex items-center mx-auto space-x-2">
            <span>Explore Our Kits</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;