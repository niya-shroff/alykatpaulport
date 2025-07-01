import React from 'react';
import { Microscope, Dna, FlaskConical, Atom, BookOpen, ExternalLink, GraduationCap, Beaker } from 'lucide-react';

export default function BiotechSection() {
  const biotechAreas = [
    {
      icon: Dna,
      title: 'Molecular Biology',
      description: 'Exploring DNA, RNA, and protein interactions at the cellular level',
      color: 'bg-green-100 text-green-600 border-green-200'
    },
    {
      icon: FlaskConical,
      title: 'Laboratory Research',
      description: 'Hands-on experience with modern biotechnology laboratory techniques',
      color: 'bg-blue-100 text-blue-600 border-blue-200'
    },
    {
      icon: Atom,
      title: 'Biochemistry',
      description: 'Understanding chemical processes within living organisms',
      color: 'bg-purple-100 text-purple-600 border-purple-200'
    },
    {
      icon: Beaker,
      title: 'Applied Biotechnology',
      description: 'Practical applications in medicine, agriculture, and industry',
      color: 'bg-teal-100 text-teal-600 border-teal-200'
    }
  ];

  const academicHighlights = [
    {
      title: 'Berlin University of Applied Sciences',
      description: 'Bachelor of Science in Biotechnology',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Current Student'
    },
    {
      title: 'Laboratory Techniques',
      description: 'PCR, Gel Electrophoresis, Cell Culture',
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Practical Skills'
    },
    {
      title: 'Research Projects',
      description: 'Molecular analysis and biotechnology applications',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Ongoing'
    }
  ];

  return (
    <section id="biotechnology" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4 border border-green-200">
              <Microscope className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Biotechnology Journey</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Pursuing my passion for science and innovation through biotechnology studies in Berlin. 
            Combining theoretical knowledge with practical laboratory experience to understand 
            the fascinating world of molecular biology and its applications.
          </p>
        </div>

        {/* Study Areas */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 border border-green-200">
                <BookOpen className="w-4 h-4 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Areas of Study</h3>
            </div>
            <p className="text-lg text-gray-600">Exploring the diverse fields within biotechnology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {biotechAreas.map((area, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${area.color}`}
              >
                <div className={`w-12 h-12 rounded-xl ${area.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">{area.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Highlights */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 border border-blue-200">
                <GraduationCap className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Academic Journey</h3>
            </div>
            <p className="text-lg text-gray-600">My educational path and practical experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academicHighlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {highlight.status}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Microscope className="w-6 h-6 opacity-80" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{highlight.title}</h4>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Goals CTA */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl border border-green-400">
          <Microscope className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Science Meets Creativity</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Bridging the gap between scientific innovation and creative communication. 
            My goal is to make biotechnology accessible and exciting through engaging content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Microscope className="w-5 h-5 mr-2" />
              Collaborate on Science Content
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}