import React from 'react';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';

export const HomeContent2 = () => {
  return (
    <div className="w-full max-w-4xl pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-0">
      {/* Hero Section */}
      <div className="text-left mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
          Create stunning digital experiences
          <span className="text-purple-600"> with our platform</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 md:mb-8 max-w-2xl">
          Build beautiful, responsive, and intuitive user interfaces that captivate your audience and drive engagement.
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg flex items-center gap-2 transition-all text-sm md:text-base">
            Get Started <ArrowRight size={18} />
          </button>
          <button className="bg-white hover:bg-gray-100 text-purple-600 font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg border border-purple-600 transition-all text-sm md:text-base">
            View Demo
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-16">
        <div className="bg-white bg-opacity-70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-sm flex-1 min-w-[120px]">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">98%</p>
          <p className="text-sm sm:text-base text-gray-700">Customer satisfaction</p>
        </div>
        <div className="bg-white bg-opacity-70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-sm flex-1 min-w-[120px]">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">10k+</p>
          <p className="text-sm sm:text-base text-gray-700">Active users</p>
        </div>
        <div className="bg-white bg-opacity-70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-sm flex-1 min-w-[120px]">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">24/7</p>
          <p className="text-sm sm:text-base text-gray-700">Expert support</p>
        </div>
      </div>

      {/* Features */}
      <div className="mb-10 md:mb-16">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white bg-opacity-80 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-sm">
            <div className="bg-purple-100 p-2 md:p-3 rounded-lg inline-block mb-3 md:mb-4">
              <Zap size={20} className="text-purple-600" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">Lightning Fast</h3>
            <p className="text-sm md:text-base text-gray-700">
              Optimized performance that loads in milliseconds, keeping your users engaged.
            </p>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-sm">
            <div className="bg-purple-100 p-2 md:p-3 rounded-lg inline-block mb-3 md:mb-4">
              <Shield size={20} className="text-purple-600" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">Secure by Design</h3>
            <p className="text-sm md:text-base text-gray-700">
              Enterprise-grade security built in from the ground up to protect your data.
            </p>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-sm">
            <div className="bg-purple-100 p-2 md:p-3 rounded-lg inline-block mb-3 md:mb-4">
              <Star size={20} className="text-purple-600" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">Beautiful UI</h3>
            <p className="text-sm md:text-base text-gray-700">
              Professionally designed components that look great on any device.
            </p>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-sm">
            <div className="bg-purple-100 p-2 md:p-3 rounded-lg inline-block mb-3 md:mb-4">
              <ArrowRight size={20} className="text-purple-600" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">Intuitive UX</h3>
            <p className="text-sm md:text-base text-gray-700">
              User-centered design that makes navigation and interaction effortless.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-purple-600 bg-opacity-90 backdrop-blur-md p-6 md:p-8 rounded-xl text-white">
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ready to transform your digital presence?</h2>
        <p className="mb-5 md:mb-6 text-sm md:text-base">Join thousands of satisfied customers who have elevated their online experience.</p>
        <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all text-sm md:text-base">
          Start Your Free Trial
        </button>
      </div>
    </div>
  );
};

const BlurGradientBackground = () => {
  return (
    <main className="frame w-full min-h-screen bg-white overflow-x-hidden">
      <section className="container relative w-full min-h-screen bg-white mx-auto px-4 sm:px-6 lg:px-8">
        {/* Purple blurry gradient background */}
        <div
          style={{ filter: "blur(100px)" }}
          className="absolute rounded-full bg-blur w-[100vw] sm:w-[120vw] lg:w-[1500px] h-[100vw] sm:h-[120vw] lg:h-[1500px] -top-[10vw] sm:-top-[15vw] lg:-top-[276px] -left-[10vw] sm:-left-[15vw] lg:-left-[276px] bg-purple-500">
          {/* Empty - just for the background */}
        </div>

        {/* Text on top of purple background */}
        <h1 className="absolute z-10 -top-[10vw] sm:-top-[15vw] lg:-top-[276px] -left-[10vw] sm:-left-[15vw] lg:-left-[276px] w-[100vw] sm:w-[120vw] lg:w-[1500px] h-[100vw] sm:h-[120vw] lg:h-[1500px] flex items-center justify-center text-center">
          {/* this is purple background color */}
        </h1>

        {/* Blue blurry background */}
        <div className="absolute rounded-full bg-blur w-[20vw] sm:w-[25vw] lg:w-[200px] h-[10vw] sm:h-[12vw] lg:h-[100px] top-[5vw] sm:top-[8vw] lg:top-20 left-[5vw] sm:left-[8vw] lg:left-20 blur-2xl sm:blur-3xl bg-blue-500">
          {/* Empty - just for the background */}
        </div>

        {/* Text on top of blue background */}
        <h1 className="absolute z-10 top-[5vw] sm:top-[8vw] lg:top-20 left-[5vw] sm:left-[8vw] lg:left-20 w-[20vw] sm:w-[25vw] lg:w-[200px] h-[10vw] sm:h-[12vw] lg:h-[100px] flex items-center justify-center text-center">
          {/* this is blue background color */}
        </h1>

        {/* Other content */}
        <div className="content relative z-50 flex justify-center sm:justify-start sm:ml-4 md:ml-8 lg:ml-16">
          <HomeContent2></HomeContent2>
        </div>
      </section>
    </main>
  );
};

export default BlurGradientBackground;