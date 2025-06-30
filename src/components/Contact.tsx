import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle, Building, User } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    contactType: '',
    name: '',
    brand: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // For Netlify Forms, the form submission is handled automatically
      // This timeout simulates the submission process
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setSubmitted(false);
        setForm({
          contactType: '',
          name: '',
          brand: '',
          email: '',
          project: '',
          budget: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isBrand = form.contactType === 'brand';

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate? Whether you're looking for UGC content, brand partnerships, 
            or just want to connect, I'd love to hear from you.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-200">
          <form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* Hidden fields for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            
            {/* Contact Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                I am reaching out as:
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, contactType: 'individual', brand: '', project: '', budget: '' })}
                  className={`flex items-center p-4 border-2 rounded-lg transition-all duration-200 ${
                    form.contactType === 'individual'
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-300 hover:border-red-500 text-gray-700'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    form.contactType === 'individual' ? 'bg-red-100' : 'bg-gray-100'
                  }`}>
                    <User className={`w-5 h-5 ${
                      form.contactType === 'individual' ? 'text-red-600' : 'text-gray-500'
                    }`} />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Individual</div>
                    <div className="text-sm text-gray-500">General inquiries & collaborations</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setForm({ ...form, contactType: 'brand' })}
                  className={`flex items-center p-4 border-2 rounded-lg transition-all duration-200 ${
                    form.contactType === 'brand'
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-300 hover:border-red-500 text-gray-700'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    form.contactType === 'brand' ? 'bg-red-100' : 'bg-gray-100'
                  }`}>
                    <Building className={`w-5 h-5 ${
                      form.contactType === 'brand' ? 'text-red-600' : 'text-gray-500'
                    }`} />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Brand/Company</div>
                    <div className="text-sm text-gray-500">UGC projects & partnerships</div>
                  </div>
                </button>
              </div>
              
              {/* Hidden input for contact type */}
              <input 
                type="hidden" 
                name="contactType" 
                value={form.contactType} 
              />
            </div>

            {form.contactType && (
              <>
                {/* Name/Brand Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {isBrand ? 'Brand/Company Name' : 'Your Name'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name={isBrand ? 'brand' : 'name'}
                    value={isBrand ? form.brand : form.name}
                    onChange={(e) => setForm({ 
                      ...form, 
                      [isBrand ? 'brand' : 'name']: e.target.value 
                    })}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                    required
                  />
                </div>

                {/* Brand-specific fields */}
                {isBrand && (
                  <>
                    <div>
                      <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="project"
                        name="project"
                        value={form.project}
                        onChange={(e) => setForm({ ...form, project: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                        required
                      >
                        <option value="">Select project type</option>
                        <option value="product-review">Product Review</option>
                        <option value="lifestyle-integration">Lifestyle Integration</option>
                        <option value="unboxing">Unboxing Content</option>
                        <option value="tutorial">Tutorial/How-to</option>
                        <option value="brand-story">Brand Storytelling</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                        required
                      >
                        <option value="">Select budget range</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000+">$5,000+</option>
                        <option value="discuss">Let's Discuss</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {isBrand ? 'Project Details' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                    placeholder={isBrand 
                      ? "Tell me about your brand, project goals, timeline, and any specific requirements..."
                      : "Tell me about your project or how we can collaborate..."
                    }
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      {isBrand ? 'Proposal Sent!' : 'Message Sent!'}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {isBrand ? 'Send Proposal' : 'Send Message'}
                    </>
                  )}
                </button>

                {/* Direct Email */}
                <div className="text-center pt-4 border-t border-gray-300">
                  <p className="text-gray-600 mb-2">Or email me directly at:</p>
                  <a 
                    href="mailto:contact@alykatpaul.me" 
                    className="font-semibold text-red-600 hover:text-red-700 transition-colors duration-200"
                  >
                    contact@alykatpaul.me
                  </a>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}