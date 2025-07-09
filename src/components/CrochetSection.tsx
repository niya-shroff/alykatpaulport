import React from 'react';
import { Palette, Gift, Star, ExternalLink, ShoppingBag, Camera } from 'lucide-react';
import YarnBallIcon from './YarnBallIcon';

export default function CrochetSection() {
  const crochetSkills = [
    {
      icon: Palette,
      title: 'Color Work',
      description: 'Mastering complex color patterns and gradient techniques',
      color: 'bg-purple-100 text-purple-600 border-purple-200'
    },
    {
      icon: Gift,
      title: 'Custom Pieces',
      description: 'Designing personalized items for special occasions and gifts',
      color: 'bg-rose-100 text-rose-600 border-rose-200'
    },
    {
      icon: YarnBallIcon,
      title: 'Pattern Design',
      description: 'Creating original patterns and sharing techniques with the community',
      color: 'bg-indigo-100 text-indigo-600 border-indigo-200'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="crocheting" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mr-4 border border-rose-200">
              <YarnBallIcon className="w-8 h-8 text-rose-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Crocheting</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the therapeutic art of crochet through my handmade creations. From cozy blankets 
            to adorable amigurumi, I find joy in creating beautiful, functional pieces that bring 
            warmth and happiness to everyday life.
          </p>
        </div>

        {/* Custom Orders CTA */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center border border-gray-200 shadow-lg">
          <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-rose-600" />
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Custom Crochet Orders</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in a custom piece? I love creating personalized items for special occasions, 
            gifts, or just because you want something uniquely yours.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-full hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <YarnBallIcon className="w-5 h-5 mr-2" />
            Commission a Piece
          </a>
        </div>
      </div>
    </section>
  );
}