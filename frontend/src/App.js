// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import Dashboard from './pages/Dashboard';
// import PrivateRoute from './components/PrivateRoute';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import LeadsPage from './pages/Leads/LeadsPage';
// import ClientsPage from './pages/Clients/ClientsPage';
// import ServicesPage from './pages/ServicesPage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

// // Placeholder components for admin pages
// const TasksPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Task Management</h1><p>Coming soon...</p></div>;
// const AppointmentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Appointments</h1><p>Coming soon...</p></div>;
// const GSTPage = () => <div className="p-6"><h1 className="text-2xl font-bold">GST Module</h1><p>Coming soon...</p></div>;
// const TaxPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Income Tax Module</h1><p>Coming soon...</p></div>;
// const AccountingPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Accounting</h1><p>Coming soon...</p></div>;
// const CompanyPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Company Registration</h1><p>Coming soon...</p></div>;
// const DocumentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Document Management</h1><p>Coming soon...</p></div>;
// const PaymentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Payments</h1><p>Coming soon...</p></div>;
// const ReportsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Reports</h1><p>Coming soon...</p></div>;
// const BlogPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Blog Management</h1><p>Coming soon...</p></div>;
// const TestimonialsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Testimonials</h1><p>Coming soon...</p></div>;
// const GalleryPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Gallery</h1><p>Coming soon...</p></div>;
// const NewsletterPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Newsletter</h1><p>Coming soon...</p></div>;
// const CMSPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Website CMS</h1><p>Coming soon...</p></div>;
// const SettingsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p>Coming soon...</p></div>;

// // Component to conditionally show/hide Footer
// const AppContent = () => {
//   const location = useLocation();
  
//   // Define admin routes where footer should be hidden
//   const adminRoutes = [
//     '/dashboard',
//     '/leads',
//     '/leads/new',
//     '/clients',
//     '/clients/new',
//     '/tasks',
//     '/tasks/new',
//     '/appointments',
//     '/gst',
//     '/tax',
//     '/accounting',
//     '/company',
//     '/documents',
//     '/payments',
//     '/reports',
//     '/blog',
//     '/testimonials',
//     '/gallery',
//     '/newsletter',
//     '/cms',
//     '/settings'
//   ];

//   // Check if current path is an admin route
//   const isAdminRoute = adminRoutes.some(route => 
//     location.pathname === route || location.pathname.startsWith(route + '/')
//   );

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-grow">
//         <Routes>
//           {/* ========== PUBLIC ROUTES ========== */}
//           <Route path="/" element={<HomePage />} />
//           <Route path="/services" element={<ServicesPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
          
//           {/* ========== PROTECTED ADMIN ROUTES ========== */}
          
//           {/* Dashboard */}
//           <Route path="/dashboard" element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           } />
          
//           {/* Lead Management */}
//           <Route path="/leads" element={
//             <PrivateRoute>
//               <LeadsPage />
//             </PrivateRoute>
//           } />
//           <Route path="/leads/new" element={
//             <PrivateRoute>
//               <LeadsPage />
//             </PrivateRoute>
//           } />
//           <Route path="/leads/:id" element={
//             <PrivateRoute>
//               <LeadsPage />
//             </PrivateRoute>
//           } />
          
//           {/* Client Management */}
//           <Route path="/clients" element={
//             <PrivateRoute>
//               <ClientsPage />
//             </PrivateRoute>
//           } />
//           <Route path="/clients/new" element={
//             <PrivateRoute>
//               <ClientsPage />
//             </PrivateRoute>
//           } />
//           <Route path="/clients/:id" element={
//             <PrivateRoute>
//               <ClientsPage />
//             </PrivateRoute>
//           } />
          
//           {/* All other admin routes... */}
//           <Route path="/tasks" element={
//             <PrivateRoute>
//               <TasksPage />
//             </PrivateRoute>
//           } />
//           <Route path="/tasks/new" element={
//             <PrivateRoute>
//               <TasksPage />
//             </PrivateRoute>
//           } />
//           <Route path="/appointments" element={
//             <PrivateRoute>
//               <AppointmentsPage />
//             </PrivateRoute>
//           } />
//           <Route path="/gst" element={
//             <PrivateRoute>
//               <GSTPage />
//             </PrivateRoute>
//           } />
//           <Route path="/tax" element={
//             <PrivateRoute>
//               <TaxPage />
//             </PrivateRoute>
//           } />
//           <Route path="/accounting" element={
//             <PrivateRoute>
//               <AccountingPage />
//             </PrivateRoute>
//           } />
//           <Route path="/company" element={
//             <PrivateRoute>
//               <CompanyPage />
//             </PrivateRoute>
//           } />
//           <Route path="/documents" element={
//             <PrivateRoute>
//               <DocumentsPage />
//             </PrivateRoute>
//           } />
//           <Route path="/payments" element={
//             <PrivateRoute>
//               <PaymentsPage />
//             </PrivateRoute>
//           } />
//           <Route path="/reports" element={
//             <PrivateRoute>
//               <ReportsPage />
//             </PrivateRoute>
//           } />
//           <Route path="/blog" element={
//             <PrivateRoute>
//               <BlogPage />
//             </PrivateRoute>
//           } />
//           <Route path="/testimonials" element={
//             <PrivateRoute>
//               <TestimonialsPage />
//             </PrivateRoute>
//           } />
//           <Route path="/gallery" element={
//             <PrivateRoute>
//               <GalleryPage />
//             </PrivateRoute>
//           } />
//           <Route path="/newsletter" element={
//             <PrivateRoute>
//               <NewsletterPage />
//             </PrivateRoute>
//           } />
//           <Route path="/cms" element={
//             <PrivateRoute>
//               <CMSPage />
//             </PrivateRoute>
//           } />
//           <Route path="/settings" element={
//             <PrivateRoute>
//               <SettingsPage />
//             </PrivateRoute>
//           } />
//         </Routes>
//       </main>
//       {/* Conditionally render Footer - hide on admin routes */}
//       {!isAdminRoute && <Footer />}
//     </div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LeadsPage from './pages/Leads/LeadsPage';
import ClientsPage from './pages/Clients/ClientsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// ... placeholder components

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Admin Routes - Protected */}
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/leads" element={
              <PrivateRoute>
                <LeadsPage />
              </PrivateRoute>
            } />
            <Route path="/clients" element={
              <PrivateRoute>
                <ClientsPage />
              </PrivateRoute>
            } />
            {/* ... rest of admin routes */}
          </Routes>
        </main>
        <Footer /> {/* Footer will automatically hide on admin routes */}
      </div>
    </Router>
  );
}

export default App;