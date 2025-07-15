import { useState } from 'react';
import { Microscope, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BiotechSection() {
  const [currentCourse, setCurrentCourse] = useState(0);

  const completedCourses = [
    {
      title: 'Cell and Molecular Biology 1',
      germanTitle: 'Zell und Molekülare Biologie 1',
      description: 'Foundational study of cellular structures, organelles, and molecular processes that govern life at the cellular level',
      semester: 'Spring 2024',
      credits: 4,
      highlights: ['Cell Structure', 'Organelle Function', 'Molecular Processes'],
      color: 'bg-green-100 text-green-600 border-green-200'
    },
    {
      title: 'Bioanalytics 1',
      germanTitle: 'Bioanalytik 1',
      description: 'Introduction to analytical techniques and instrumentation used in biological research and biotechnology applications',
      semester: 'Spring 2024',
      credits: 4,
      highlights: ['Analytical Methods', 'Laboratory Techniques', 'Data Analysis'],
      color: 'bg-teal-100 text-teal-600 border-teal-200'
    },
    {
      title: 'Organic Chemistry',
      germanTitle: 'Organische Chemie',
      description: 'Comprehensive study of carbon-based compounds, their structures, properties, and reactions essential for biotechnology',
      semester: 'Spring 2024',
      credits: 4,
      highlights: ['Organic Reactions', 'Molecular Structure', 'Chemical Synthesis'],
      color: 'bg-indigo-100 text-indigo-600 border-indigo-200'
    },
    {
      title: 'Microbiology 1',
      germanTitle: 'Mikrobiologie 1',
      description: 'Fundamental principles of microbiology including bacterial, viral, and fungal organisms and their applications',
      semester: 'Spring 2024',
      credits: 4,
      highlights: ['Microbial Growth', 'Pathogen Identification', 'Sterilization Methods'],
      color: 'bg-rose-100 text-rose-600 border-rose-200'
    },
    {
      title: 'Physics: Electricity and Optics',
      germanTitle: 'Physik Elektrizitätslehre und Optiks',
      description: 'Physical principles of electrical circuits, electromagnetic fields, and optical systems used in biotechnology equipment',
      semester: 'Spring 2024',
      credits: 3,
      highlights: ['Circuit Analysis', 'Electromagnetic Theory', 'Optical Instruments'],
      color: 'bg-purple-100 text-purple-600 border-purple-200'
    },
    {
      title: 'Mathematics',
      germanTitle: 'Mathematik',
      description: 'Essential mathematical concepts including calculus, statistics, and data analysis for biotechnology applications',
      semester: 'Spring 2024',
      credits: 3,
      highlights: ['Calculus', 'Statistics', 'Data Interpretation'],
      color: 'bg-blue-100 text-blue-600 border-blue-200'
    },
    {
      title: 'General Studies',
      germanTitle: 'Technical English, Oral Communication in English',
      description: 'Development of English language skills for scientific communication, technical writing, and professional presentations',
      semester: 'Spring 2024',
      credits: 2,
      highlights: ['Scientific Communication', 'Technical Writing', 'Presentation Skills'],
      color: 'bg-orange-100 text-orange-600 border-orange-200'
    }
  ];

  const nextCourse = () => {
    setCurrentCourse((prev) => (prev + 1) % completedCourses.length);
  };

  const prevCourse = () => {
    setCurrentCourse((prev) => (prev - 1 + completedCourses.length) % completedCourses.length);
  };

  return (
    <section id="biotechnology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4 border border-green-200">
              <Microscope className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Biotechnology Journey</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Pursuing my passion for this constantly evolving field through my studies. 
            Combining theoretical knowledge with practical laboratory experience to 
            understand the fascinating world of biotechnology and its applications.
          </p>
        </div>

        {/* Completed Courses Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevCourse}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-200 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-green-600" />
          </button>
          
          <button
            onClick={nextCourse}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-200 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-green-600" />
          </button>

          {/* Course Card */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCourse * 100}%)` }}
            >
              {completedCourses.map((course, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className={`bg-white rounded-2xl p-8 shadow-lg border ${course.color} hover:shadow-2xl transition-all duration-300`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {course.germanTitle}
                          </span>
                        </div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h4>
                        <p className="text-gray-600 leading-relaxed mb-4">{course.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Course Details</h5>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex justify-between">
                            <span>Semester:</span>
                            <span className="font-medium">{course.semester}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Credits:</span>
                            <span className="font-medium">{course.credits} ECTS</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Key Topics</h5>
                        <div className="flex flex-wrap gap-2">
                          {course.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className={`text-xs px-2 py-1 rounded-full ${course.color} font-medium`}
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex items-center justify-center space-x-2">
                      {completedCourses.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentCourse(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            idx === currentCourse ? 'bg-green-500 w-8' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Course Counter */}
          <div className="text-center mt-6">
            <span className="text-sm text-gray-500">
              Course {currentCourse + 1} of {completedCourses.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}