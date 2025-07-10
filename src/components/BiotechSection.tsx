import React, { useState } from 'react';
import { Microscope, Dna, FlaskConical, Atom, BookOpen, ExternalLink, GraduationCap, Beaker, ChevronLeft, ChevronRight, Award } from 'lucide-react';

export default function BiotechSection() {
  const [currentCourse, setCurrentCourse] = useState(0);

  const completedCourses = [
    {
      title: 'Molecular Biology Fundamentals',
      code: 'BIO 301',
      description: 'Comprehensive study of DNA, RNA, and protein synthesis mechanisms at the cellular level',
      semester: 'Fall 2023',
      credits: 4,
      highlights: ['PCR Techniques', 'Gene Expression', 'Protein Folding'],
      color: 'bg-green-100 text-green-600 border-green-200'
    },
    {
      title: 'Microbiology & Immunology',
      code: 'MIC 310',
      description: 'Study of microorganisms, immune system responses, and pathogen-host interactions',
      semester: 'Spring 2023',
      credits: 4,
      highlights: ['Bacterial Cultures', 'Immune Response', 'Pathogen Analysis'],
      color: 'bg-teal-100 text-teal-600 border-teal-200'
    },
    {
      title: 'Biostatistics & Data Analysis',
      code: 'STAT 340',
      description: 'Statistical methods for biological research, data interpretation, and experimental design',
      semester: 'Fall 2023',
      credits: 3,
      highlights: ['Statistical Analysis', 'Research Design', 'Data Visualization'],
      color: 'bg-indigo-100 text-indigo-600 border-indigo-200'
    },
    {
      title: 'Genetics & Genomics',
      code: 'GEN 315',
      description: 'Principles of heredity, genetic engineering, and modern genomic technologies',
      semester: 'Spring 2024',
      credits: 4,
      highlights: ['CRISPR Technology', 'Genome Sequencing', 'Genetic Mapping'],
      color: 'bg-rose-100 text-rose-600 border-rose-200'
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
            Pursuing my passion for science and innovation through biotechnology 
            studies in Berlin. 
            Combining theoretical knowledge with practical laboratory experience to 
            understand the fascinating world of molecular biology and its applications.
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
                            {course.code}
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