import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  UserPlus,
  Briefcase,
  Calendar,
  FileText,
  DollarSign,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  BookOpen,
  MessageSquare,
  Image,
  Mail,
  BarChart3,
  Shield,
  Building,
  FileCheck,
  Clock,
  Bell,
  Home,
  UserCog,
  Database,
  TrendingUp,
  HelpCircle
} from 'lucide-react';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('userInfo'));

  const toggleMenu = (menu) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
    navigate('/login');
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
      type: 'link'
    },
    {
      title: 'Lead Management',
      icon: UserPlus,
      type: 'dropdown',
      items: [
        { title: 'All Leads', path: '/leads' },
        { title: 'New Lead', path: '/leads/new' },
        { title: 'Lead Status', path: '/leads/status' }
      ]
    },
    {
      title: 'Client Management',
      icon: Users,
      type: 'dropdown',
      items: [
        { title: 'All Clients', path: '/clients' },
        { title: 'Add Client', path: '/clients/new' },
        { title: 'Client Documents', path: '/clients/documents' }
      ]
    },
    {
      title: 'Employee Management',
      icon: UserCog,
      type: 'dropdown',
      items: [
        { title: 'All Employees', path: '/employees' },
        { title: 'Add Employee', path: '/employees/new' },
        { title: 'Attendance', path: '/employees/attendance' }
      ]
    },
    {
      title: 'Task Management',
      icon: ClipboardList,
      type: 'dropdown',
      items: [
        { title: 'All Tasks', path: '/tasks' },
        { title: 'Add Task', path: '/tasks/new' },
        { title: 'Task Calendar', path: '/tasks/calendar' }
      ]
    },
    {
      title: 'Appointments',
      icon: Calendar,
      type: 'dropdown',
      items: [
        { title: 'All Appointments', path: '/appointments' },
        { title: 'Add Appointment', path: '/appointments/new' },
        { title: 'Calendar View', path: '/appointments/calendar' }
      ]
    },
    {
      title: 'GST Module',
      icon: FileCheck,
      type: 'dropdown',
      items: [
        { title: 'GST Clients', path: '/gst/clients' },
        { title: 'GST Returns', path: '/gst/returns' },
        { title: 'Track GST', path: '/gst/track' }
      ]
    },
    {
      title: 'Income Tax',
      icon: FileText,
      type: 'dropdown',
      items: [
        { title: 'ITR Filing', path: '/tax/itr' },
        { title: 'Tax Clients', path: '/tax/clients' },
        { title: 'Tax Reports', path: '/tax/reports' }
      ]
    },
    {
      title: 'Accounting',
      icon: BookOpen,
      type: 'dropdown',
      items: [
        { title: 'Ledger', path: '/accounting/ledger' },
        { title: 'Invoices', path: '/accounting/invoices' },
        { title: 'Reports', path: '/accounting/reports' }
      ]
    },
    {
      title: 'Company Registration',
      icon: Building,
      type: 'dropdown',
      items: [
        { title: 'Private Limited', path: '/company/pvt' },
        { title: 'LLP', path: '/company/llp' },
        { title: 'OPC', path: '/company/opc' },
        { title: 'MSME', path: '/company/msme' }
      ]
    },
    {
      title: 'Documents',
      icon: FileText,
      path: '/documents',
      type: 'link'
    },
    {
      title: 'Payments',
      icon: CreditCard,
      path: '/payments',
      type: 'link'
    },
    {
      title: 'Reports',
      icon: BarChart3,
      path: '/reports',
      type: 'link'
    },
    {
      title: 'Blog Management',
      icon: MessageSquare,
      type: 'dropdown',
      items: [
        { title: 'All Posts', path: '/blog' },
        { title: 'Create Post', path: '/blog/new' },
        { title: 'Categories', path: '/blog/categories' }
      ]
    },
    {
      title: 'Testimonials',
      icon: MessageSquare,
      path: '/testimonials',
      type: 'link'
    },
    {
      title: 'Gallery',
      icon: Image,
      path: '/gallery',
      type: 'link'
    },
    {
      title: 'Newsletter',
      icon: Mail,
      path: '/newsletter',
      type: 'link'
    },
    {
      title: 'Website CMS',
      icon: Home,
      type: 'dropdown',
      items: [
        { title: 'Homepage', path: '/cms/home' },
        { title: 'About', path: '/cms/about' },
        { title: 'Services', path: '/cms/services' },
        { title: 'Pricing', path: '/cms/pricing' },
        { title: 'Contact', path: '/cms/contact' },
        { title: 'Footer', path: '/cms/footer' },
        { title: 'SEO Settings', path: '/cms/seo' }
      ]
    },
    {
      title: 'Settings',
      icon: Settings,
      path: '/settings',
      type: 'link'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-xl overflow-y-auto`}>
        {/* Logo */}
        <div className="flex items-center justify-between h-20 px-4 border-b border-gray-200">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xl">VK</span>
            </div>
            {sidebarOpen && (
              <div>
                <span className="text-lg font-extrabold text-gray-900 block">VK & Associates</span>
                <span className="text-xs text-primary-600 font-medium">Admin Panel</span>
              </div>
            )}
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* User Info */}
        {sidebarOpen && user && (
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-bold text-lg">
                  {user.name?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
                <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                  {user.role}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.type === 'link' ? (
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive(item.path) ? 'text-primary-600' : ''}`} />
                  {sidebarOpen && <span className="text-sm font-medium">{item.title}</span>}
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => sidebarOpen && toggleMenu(item.title)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 ${
                      expandedMenus[item.title] ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className={`w-5 h-5 ${expandedMenus[item.title] ? 'text-primary-600' : ''}`} />
                      {sidebarOpen && <span className="text-sm font-medium">{item.title}</span>}
                    </div>
                    {sidebarOpen && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${expandedMenus[item.title] ? 'rotate-180' : ''}`}
                      />
                    )}
                  </button>
                  {sidebarOpen && expandedMenus[item.title] && (
                    <div className="ml-11 mt-1 space-y-1">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className={`block px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                            isActive(subItem.path)
                              ? 'bg-primary-50 text-primary-700'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Logout */}
          <button
            onClick={logoutHandler}
            className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200 mt-4"
          >
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-semibold text-gray-900">
                {location.pathname.split('/')[1]?.charAt(0).toUpperCase() + location.pathname.split('/')[1]?.slice(1) || 'Dashboard'}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <HelpCircle className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;