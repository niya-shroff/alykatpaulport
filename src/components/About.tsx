import React from 'react';
import { Music, Camera, PenTool, Heart, Users, Video, Microscope } from 'lucide-react';

export default function About() {
  const passions = [
    {
      icon: Microscope,
      title: 'Biotechnology',
      description: 'Studying the fascinating world of biotechnology and its applications in modern science through hands-on labs.',
      color: 'bg-green-100 text-green-600 border-green-200'
    },
    {
      icon: Camera,
      title: 'UGC Content',
      description: 'Crafting authentic user-generated content for brands, turning products into compelling stories.',
      color: 'bg-pink-100 text-pink-600 border-pink-200'
    },
    {
      icon: Music,
      title: 'Music',
      description: 'Recording soulful covers and original music on SoundCloud and YouTube, sharing my voice with the world.',
      color: 'bg-purple-100 text-purple-600 border-purple-200'
    },
    {
      icon: PenTool,
      title: 'Travel Blog',
      description: 'Documenting adventures and sharing travel insights through captivating stories and photography.',
      color: 'bg-blue-100 text-blue-600 border-blue-200'
    },
    {
      icon: Heart,
      title: 'Crocheting',
      description: 'Creating beautiful handmade pieces and sharing the therapeutic art of crochet.',
      color: 'bg-rose-100 text-rose-600 border-rose-200'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Hi, I'm Aly! I'm a Malaysian student studying Biotechnology at 
              the Berlin University of Applied Science and Technology in Germany.
              While I'm passionate about STEM, I'm also a creative at heart—I love 
              expressing myself through music, photography, content creation, writing 
              and crocheting.
            </p>
          </div>
        </div>

        {/* Creative Passions */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {passions.map((passion, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div className={`w-16 h-16 rounded-2xl ${passion.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <passion.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{passion.title}</h3>
                <p className="text-gray-600 leading-relaxed">{passion.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-red-100 to-red-50 rounded-3xl p-8 md:p-12 border border-red-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mb-4 border border-red-300">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">3K+</div>
              <div className="text-gray-600">Instagram Followers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mb-4 border border-red-300">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mb-4 border border-red-300">
                <Video className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">1K+</div>
              <div className="text-gray-600">Content Pieces</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}