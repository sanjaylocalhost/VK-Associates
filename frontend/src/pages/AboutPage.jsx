import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  Target, 
  Eye, 
  Shield,
  Star
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Awards Won', value: '15+' },
    { icon: Clock, label: 'Years Experience', value: '10+' },
    { icon: TrendingUp, label: 'Success Rate', value: '99%' },
  ];

  const teamMembers = [
    {
      name: 'CA Sanjay Kumar',
      role: 'Founder & Managing Partner',
      experience: '15+ Years',
      image: '👨‍💼'
    },
    {
      name: 'CA Priya Sharma',
      role: 'Senior Partner',
      experience: '12+ Years',
      image: '👩‍💼'
    },
    {
      name: 'CA Ramesh Gupta',
      role: 'Tax Partner',
      experience: '10+ Years',
      image: '👨‍💼'
    },
    {
      name: 'CA Ananya Reddy',
      role: 'Audit Partner',
      experience: '8+ Years',
      image: '👩‍💼'
    }
  ];

  const values = [
    { icon: Shield, title: 'Integrity', description: 'We uphold the highest standards of honesty and transparency' },
    { icon: Star, title: 'Excellence', description: 'We strive for excellence in everything we do' },
    { icon: Target, title: 'Client-Centric', description: 'We put our clients\' needs and satisfaction first' },
    { icon: TrendingUp, title: 'Innovation', description: 'We embrace innovation to deliver better solutions' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Your trusted partner for tax and consulting services since 2010
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide accurate, reliable, and professional tax and consulting services 
              that help individuals and businesses achieve their financial goals and secure 
              their future.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
              <Eye className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted and preferred tax and consulting partner, known for 
              excellence, integrity, and unwavering commitment to client success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-7 h-7 text-primary-600" />
                </div>
                <div className="text-3xl font-extrabold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 mt-2">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Team</h2>
            <p className="text-xl text-gray-600 mt-2">Meet our experienced professionals</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {member.image}
                </div>
                <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                <p className="text-sm text-primary-600 font-medium">{member.role}</p>
                <p className="text-sm text-gray-500 mt-1">{member.experience} Experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's build a better financial future together
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-700 rounded-lg font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;