import React from 'react';
import { Heart, Scissors, Palette, Gift, Star, ExternalLink, ShoppingBag, Camera } from 'lucide-react';

export default function CrochetSection() {
  const crochetSkills = [
    {
      icon: Heart,
      title: 'Amigurumi',
      description: 'Creating adorable stuffed animals and characters with intricate details',
      color: 'bg-pink-100 text-pink-600 border-pink-200'
    },
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
      icon: Scissors,
      title: 'Pattern Design',
      description: 'Creating original patterns and sharing techniques with the community',
      color: 'bg-indigo-100 text-indigo-600 border-indigo-200'
    }
  ];

  const crochetProjects = [
    {
      title: 'Cozy Blankets',
      description: 'Handmade blankets with intricate stitch patterns',
      image: 'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=600',
      difficulty: 'Intermediate',
      time: '2-3 weeks'
    },
    {
      title: 'Amigurumi Animals',
      description: 'Cute stuffed animals and characters',
      image: 'https://images.pexels.com/photos/7005538/pexels-photo-7005538.jpeg?auto=compress&cs=tinysrgb&w=600',
      difficulty: 'Advanced',
      time: '1-2 weeks'
    },
    {
      title: 'Fashion Accessories',
      description: 'Stylish bags, hats, and scarves',
      image: 'https://images.pexels.com/photos/6069113/pexels-photo-6069113.jpeg?auto=compress&cs=tinysrgb&w=600',
      difficulty: 'Beginner',
      time: '3-5 days'
    },
    {
      title: 'Home Decor',
      description: 'Beautiful decorative pieces for the home',
      image: 'https://images.pexels.com/photos/6069111/pexels-photo-6069111.jpeg?auto=compress&cs=tinysrgb&w=600',
      difficulty: 'Intermediate',
      time: '1-2 weeks'
    },
    {
      title: 'Baby Items',
      description: 'Soft and safe items for little ones',
      image: 'https://images.pexels.com/photos/7005539/pexels-photo-7005539.jpeg?auto=compress&cs=tinysrgb&w=600',
      difficulty: 'Beginner',
      time: '1 week'
    },
    {
      title: 'Seasonal Decorations',
      description: 'Holiday and seasonal themed pieces',
      image: 'https://images.pexels.com/photos/6069110/pexels-photo-6069110.jpeg?auto=compress&cs=tinysrgb&w=600',
      difficulty: 'Intermediate',
      time: '2-4 days'
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
              <Heart className="w-8 h-8 text-rose-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Crochet Creations</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the therapeutic art of crochet through my handmade creations. From cozy blankets 
            to adorable amigurumi, I find joy in creating beautiful, functional pieces that bring 
            warmth and happiness to everyday life.
          </p>
        </div>

        {/* Skills & Techniques */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center mr-3 border border-rose-200">
                <Scissors className="w-4 h-4 text-rose-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Skills & Techniques</h3>
            </div>
            <p className="text-lg text-gray-600">Mastering various crochet techniques and styles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {crochetSkills.map((skill, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${skill.color}`}
              >
                <div className={`w-12 h-12 rounded-xl ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">{skill.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3 border border-pink-200">
                <Camera className="w-4 h-4 text-pink-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Project Gallery</h3>
            </div>
            <p className="text-lg text-gray-600">A showcase of my favorite crochet creations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crochetProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`text-white text-xs px-3 py-1 rounded-full font-medium ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Heart className="w-5 h-5 text-white opacity-80" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-sm">
                      <Star className="w-4 h-4 mr-1" />
                      {project.time}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Time: {project.time}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)} text-white`}>
                      {project.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Therapeutic Benefits */}
        <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl border border-rose-400 mb-16">
          <Heart className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">The Art of Mindful Making</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Crochet is more than just a hobby—it's a form of meditation that brings peace, 
            focus, and joy. Each stitch is a moment of mindfulness, creating something 
            beautiful while finding inner calm.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <Heart className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <h4 className="font-semibold mb-1">Stress Relief</h4>
              <p className="text-sm opacity-90">Meditative and calming</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <Gift className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <h4 className="font-semibold mb-1">Meaningful Gifts</h4>
              <p className="text-sm opacity-90">Handmade with love</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <Palette className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <h4 className="font-semibold mb-1">Creative Expression</h4>
              <p className="text-sm opacity-90">Endless possibilities</p>
            </div>
          </div>
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
            <Heart className="w-5 h-5 mr-2" />
            Commission a Piece
          </a>
        </div>
      </div>
    </section>
  );
}