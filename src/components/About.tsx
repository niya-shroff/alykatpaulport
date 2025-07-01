import React from 'react';
import { Music, Camera, PenTool, Microscope, Heart } from 'lucide-react';

export default function About() {
  const passions = [
    {
      icon: Microscope,
      title: 'Biotechnology',
      description: 'Studying the fascinating world of biotechnology and its applications in modern science.',
      color: 'bg-green-100 text-green-600 border-green-200'
    },
    {
      icon: Camera,
      title: 'UGC Creation',
      description: 'Crafting authentic user-generated content for brands, turning products into compelling stories.',
      color: 'bg-pink-100 text-pink-600 border-pink-200'
    },
    {
      icon: Music,
      title: 'Music',
      description: 'Creating soulful covers and original music on SoundCloud, sharing my voice with the world.',
      color: 'bg-purple-100 text-purple-600 border-purple-200'
    },
    {
      icon: PenTool,
      title: 'Travel Blogging',
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
              and crocheting. For me, it's all about telling real stories and connecting 
              with people in a meaningful way!
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
      </div>
    </section>
  );
}