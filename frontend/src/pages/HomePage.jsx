import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Shield,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: '📋',
      title: 'GST Registration',
      description: 'Professional and reliable GST Registration services.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '💰',
      title: 'Income Tax Filing',
      description: 'Professional and reliable Income Tax Filing services.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📊',
      title: 'Accounting & Book Keeping',
      description: 'Professional and reliable Accounting & Book Keeping services.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🔍',
      title: 'Statutory Auditing',
      description: 'Professional and reliable Statutory Auditing services.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: '🏢',
      title: 'Company Incorporation',
      description: 'Professional and reliable Company Incorporation services.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: '📑',
      title: 'TDS Compliances',
      description: 'Professional and reliable TDS Compliances services.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: CheckCircle, label: 'Projects Completed', value: '1000+' },
    { icon: Clock, label: 'Years of Experience', value: '10+' },
    { icon: TrendingUp, label: 'Success Rate', value: '99%' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Trusted Since 2010
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                VK & ASSOCIATES
                <span className="block text-2xl md:text-3xl font-light mt-2 text-primary-200">
                  TAX & CONSULTING SERVICES
                </span>
              </h1>
              
              <p className="text-xl text-primary-100 max-w-lg">
                For Individual & Business — Accurate Advice. Better Financial Future.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-700 rounded-lg font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-300 mr-2" />
                  <span>100% Satisfaction</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-300 mr-2" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-300 mr-2" />
                  <span>Affordable Pricing</span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:grid grid-cols-2 gap-4 animate-slide-up">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary-300" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-primary-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive financial solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-3xl mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get expert tax and consulting services today
          </p>
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-700 rounded-lg font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
          >
            Start Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                We're here to help! Reach out to us for any queries or assistance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      11/36, Kathreguppe Cross Road, Kathreguppe,<br />
                      Banashankari 3rd Stage, Bengaluru, Karnataka 560085
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 9731939555</p>
                    <p className="text-gray-600">+91 9845988307</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">vkassociates96@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;