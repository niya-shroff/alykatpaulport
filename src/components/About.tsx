import { Music, Camera, PenTool, Microscope } from 'lucide-react';
import YarnBallIcon from './YarnBallIcon';

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
      title: 'Content Creation',
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
      icon: YarnBallIcon,
      title: 'Crocheting',
      description: 'Creating beautiful handmade pieces and sharing the therapeutic art of crochet.',
      color: 'bg-rose-100 text-rose-600 border-rose-200'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Creative Passions */}
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
    </section>
  );
}