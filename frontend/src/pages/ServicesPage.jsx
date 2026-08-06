import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp,
  FileText,
  Building,
  Briefcase,
  Calculator,
  FileCheck,
  Handshake
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      icon: FileCheck,
      title: 'GST Registration',
      description: 'Complete GST registration services for businesses of all sizes with expert guidance.',
      features: ['GST Number Registration', 'GST Compliance', 'GST Return Filing'],
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50'
    },
    {
      id: 2,
      icon: Calculator,
      title: 'Income Tax Filing',
      description: 'Professional income tax filing services for individuals and businesses.',
      features: ['ITR Filing', 'Tax Planning', 'Tax Audit Support'],
      color: 'from-green-500 to-green-600',
      bg: 'bg-green-50'
    },
    {
      id: 3,
      icon: Briefcase,
      title: 'Accounting & Book Keeping',
      description: 'Comprehensive accounting and bookkeeping services to keep your finances in order.',
      features: ['Monthly Accounting', 'Financial Statements', 'Bank Reconciliation'],
      color: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50'
    },
    {
      id: 4,
      icon: Shield,
      title: 'Statutory Auditing',
      description: 'Thorough statutory auditing services to ensure compliance and transparency.',
      features: ['Statutory Audit', 'Internal Audit', 'Tax Audit'],
      color: 'from-red-500 to-red-600',
      bg: 'bg-red-50'
    },
    {
      id: 5,
      icon: Building,
      title: 'Company Incorporation',
      description: 'Expert guidance for company registration and business setup.',
      features: ['Private Limited Company', 'LLP Registration', 'OPC Registration'],
      color: 'from-indigo-500 to-indigo-600',
      bg: 'bg-indigo-50'
    },
    {
      id: 6,
      icon: FileText,
      title: 'TDS Compliances',
      description: 'Complete TDS compliance and return filing services.',
      features: ['TDS Return Filing', 'TDS Certificate Issuance', 'TDS Compliance Review'],
      color: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-50'
    },
    {
      id: 7,
      icon: Users,
      title: 'Labour Registrations',
      description: 'Complete labour law registrations and compliance services.',
      features: ['PF Registration', 'ESI Registration', 'Labour Law Compliance'],
      color: 'from-teal-500 to-teal-600',
      bg: 'bg-teal-50'
    },
    {
      id: 8,
      icon: Handshake,
      title: 'MSME Registration',
      description: 'MSME registration services for small and medium enterprises.',
      features: ['Udyam Registration', 'MSME Benefits', 'Government Schemes'],
      color: 'from-cyan-500 to-cyan-600',
      bg: 'bg-cyan-50'
    }
  ];

  const benefits = [
    { icon: Shield, title: 'Expert Team', description: 'Qualified professionals with years of experience' },
    { icon: Clock, title: 'Timely Service', description: 'We deliver on time, every time' },
    { icon: TrendingUp, title: 'Growth Focused', description: 'Solutions designed for your business growth' },
    { icon: Users, title: 'Client First', description: 'Your satisfaction is our priority' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive financial and consulting services tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mb-4`}>
                <service.icon className={`w-7 h-7 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Learn More
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Us</h2>
            <p className="text-xl text-gray-600 mt-2">We deliver excellence in everything we do</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact us today for a free consultation
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-700 rounded-lg font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
          >
            Contact Us Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;