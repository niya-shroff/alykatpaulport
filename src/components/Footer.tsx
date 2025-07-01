import React from 'react';
import { Instagram, Music, Youtube, Mail, User, Camera, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4">
              Aly Paul
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Multi-passionate creative bringing authentic stories to life through music, 
              video, and written word. Let's create something amazing together.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-500">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <a href="#about" className="flex items-center text-gray-600 hover:text-red-500 transition-colors duration-200">
                <User className="w-4 h-4 mr-2" />
                About
              </a>
              <a href="#music" className="flex items-center text-gray-600 hover:text-red-500 transition-colors duration-200">
                <Music className="w-4 h-4 mr-2" />
                Music
              </a>
              <a href="#ugc" className="flex items-center text-gray-600 hover:text-red-500 transition-colors duration-200">
                <Camera className="w-4 h-4 mr-2" />
                UGC
              </a>
              <a href="#blog" className="flex items-center text-gray-600 hover:text-red-500 transition-colors duration-200">
                <BookOpen className="w-4 h-4 mr-2" />
                Blog
              </a>
              <a href="#contact" className="flex items-center text-gray-600 hover:text-red-500 transition-colors duration-200">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-500">Connect</h4>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.instagram.com/alykatpaul/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:scale-105 transition-transform duration-200"
              >
                <Instagram className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/channel/UCp9HbrBajVDya-C-Mjk9w1w?app=desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-12 bg-red-600 text-white rounded-lg hover:scale-105 transition-transform duration-200"
              >
                <Youtube className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">YouTube</span>
              </a>
              <a
                href="https://www.tiktok.com/@alykatpaul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-12 bg-gray-700 text-white rounded-lg hover:scale-105 transition-transform duration-200"
              >
                <Music className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">TikTok</span>
              </a>
              <a
                href="mailto:contact@alykatpaul.me"
                className="flex items-center justify-center w-full h-12 bg-sky-400 hover:bg-sky-400 text-white rounded-lg hover:scale-105 transition-all duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Aly Paul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}