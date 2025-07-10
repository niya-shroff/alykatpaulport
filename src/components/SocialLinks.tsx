import React from 'react';
import { Instagram, Music, ExternalLink } from 'lucide-react';

export default function SocialLinks() {
  const socialPlatforms = [
    {
      name: 'Instagram',
      handle: '@alykatpaul',
      followers: '3K+ followers',
      url: 'https://www.instagram.com/alykatpaul/',
      icon: Instagram,
      color: 'bg-gradient-to-br from-pink-500 to-purple-600'
    },
    {
      name: 'TikTok',
      handle: '@alykatpaul',
      followers: 'Growing Community',
      url: 'https://www.tiktok.com/@alykatpaul',
      icon: Music,
      color: 'bg-gradient-to-br from-gray-700 to-gray-800'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Connect With Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow my journey across all platforms and stay updated with my latest content, 
            collaborations, and adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {socialPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className={`${platform.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:scale-105 border border-gray-200`}>
                <div className="flex items-center justify-between mb-6">
                  <platform.icon className="w-8 h-8" />
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                <p className="text-sm opacity-90 mb-1">{platform.handle}</p>
                <p className="text-xs opacity-75">{platform.followers}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}