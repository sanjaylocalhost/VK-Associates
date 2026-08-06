import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  // Admin routes where footer should not appear
  const adminRoutes = [
    '/dashboard',
    '/leads',
    '/clients',
    '/tasks',
    '/appointments',
    '/gst',
    '/tax',
    '/accounting',
    '/company',
    '/documents',
    '/payments',
    '/reports',
    '/blog',
    '/testimonials',
    '/gallery',
    '/newsletter',
    '/cms',
    '/settings'
  ];

  // Check if current path is an admin route
  const isAdminRoute = adminRoutes.some(route => 
    location.pathname === route || location.pathname.startsWith(route + '/')
  );

  // Don't render footer on admin routes
  if (isAdminRoute) {
    return null;
  }

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  const services = [
    'GST Registration',
    'Income Tax Filing',
    'Accounting & Book Keeping',
    'Statutory Auditing',
    'Company Incorporation',
    'TDS Compliances',
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">VK</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">VK & Associates</h3>
                <p className="text-xs text-primary-400">TAX & CONSULTING SERVICES</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Providing professional tax and consulting services for individuals and businesses since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-xl">📘</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-xl">🐦</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-xl">📸</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-xl">💼</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-xl">▶️</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-primary-400 text-lg">📍</span>
                <p className="text-sm text-gray-400">
                  11/36, Kathreguppe Cross Road,<br />
                  Kathreguppe, Banashankari 3rd Stage,<br />
                  Bengaluru, Karnataka 560085
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-400 text-lg">📞</span>
                <div>
                  <p className="text-sm text-gray-400">+91 9731939555</p>
                  <p className="text-sm text-gray-400">+91 9845988307</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-400 text-lg">✉️</span>
                <p className="text-sm text-gray-400">vkassociates96@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} VK & Associates. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed with ❤️ for better financial future</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;