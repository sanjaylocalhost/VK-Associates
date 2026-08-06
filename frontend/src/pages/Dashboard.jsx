import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import BaseURL from '../Instance/BaseUrl';
import { 
  Users, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  AlertCircle,
  RefreshCw,
  Calendar,
  FileText,
  DollarSign,
   UserPlus,  // Add this
  ClipboardList 
} from 'lucide-react';

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const navigate = useNavigate();
  const hasFetched = useRef(false);
  
  const userInfo = localStorage.getItem('userInfo');
  const user = userInfo ? JSON.parse(userInfo) : null;

  const fetchData = async () => {
    try {
      setError('');
      setRefreshing(true);
      
      const [leadsResponse, tasksResponse, statsResponse] = await Promise.all([
        BaseURL.get('/admin/leads'),
        BaseURL.get('/admin/tasks'),
        BaseURL.get('/admin/stats')
      ]);
      
      setLeads(leadsResponse.data.data || []);
      setTasks(tasksResponse.data.data || []);
      setStats(statsResponse.data.data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
      
      if (error.response?.status === 401) {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('token');
        navigate('/login');
        return;
      }
      
      setError(error.response?.data?.message || 'Failed to load dashboard data');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (!hasFetched.current) {
      hasFetched.current = true;
      fetchData();
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleRefresh = () => {
    fetchData();
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading dashboard...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center max-w-md">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
            <p className="mt-4 text-red-600 font-semibold">{error}</p>
            <button 
              onClick={handleRefresh}
              className="mt-6 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </AdminLayout>
    );
  }

  const statsData = stats || {
    totalLeads: leads.length,
    totalTasks: tasks.length,
    pendingTasks: tasks.filter(t => t.status !== 'Completed').length,
    totalClients: 0,
    completedTasks: tasks.filter(t => t.status === 'Completed').length,
    monthlyRevenue: 0,
    appointments: 0,
    gstPending: 0,
    taxPending: 0
  };

  const statCards = [
    { 
      icon: Users, 
      label: 'Total Leads', 
      value: statsData.totalLeads,
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    { 
      icon: TrendingUp, 
      label: 'Total Clients', 
      value: statsData.totalClients,
      color: 'from-green-500 to-green-600',
      bg: 'bg-green-50',
      textColor: 'text-green-600'
    },
    { 
      icon: Clock, 
      label: 'Pending Tasks', 
      value: statsData.pendingTasks,
      color: 'from-yellow-500 to-yellow-600',
      bg: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    { 
      icon: CheckCircle, 
      label: 'Completed Tasks', 
      value: statsData.completedTasks,
      color: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    { 
      icon: DollarSign, 
      label: 'Monthly Revenue', 
      value: `₹${statsData.monthlyRevenue || 0}`,
      color: 'from-emerald-500 to-emerald-600',
      bg: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    },
    { 
      icon: Calendar, 
      label: 'Appointments', 
      value: statsData.appointments || 0,
      color: 'from-pink-500 to-pink-600',
      bg: 'bg-pink-50',
      textColor: 'text-pink-600'
    },
    { 
      icon: FileText, 
      label: 'GST Returns Pending', 
      value: statsData.gstPending || 0,
      color: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    { 
      icon: FileText, 
      label: 'Income Tax Pending', 
      value: statsData.taxPending || 0,
      color: 'from-red-500 to-red-600',
      bg: 'bg-red-50',
      textColor: 'text-red-600'
    },
  ];

  return (
    <AdminLayout>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-extrabold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Recent Leads</h3>
            <button 
              onClick={() => navigate('/leads')}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              View All
            </button>
          </div>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {leads.length > 0 ? (
              leads.slice(0, 5).map((lead) => (
                <div key={lead._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 truncate">{lead.name}</p>
                    <p className="text-sm text-gray-600 truncate">{lead.service || 'No service specified'}</p>
                    {lead.phone && (
                      <p className="text-xs text-gray-500">{lead.phone}</p>
                    )}
                  </div>
                  <span className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                    lead.status === 'New' ? 'bg-blue-100 text-blue-700' :
                    lead.status === 'Converted' ? 'bg-green-100 text-green-700' :
                    lead.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {lead.status}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-8">No leads found</p>
            )}
          </div>
        </div>

        {/* Recent Tasks */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Recent Tasks</h3>
            <button 
              onClick={() => navigate('/tasks')}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              View All
            </button>
          </div>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {tasks.length > 0 ? (
              tasks.slice(0, 5).map((task) => (
                <div key={task._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 truncate">{task.title}</p>
                    <p className="text-sm text-gray-600">
                      Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No date'}
                    </p>
                    {task.assignedTo && (
                      <p className="text-xs text-gray-500">Assigned to: {task.assignedTo.name}</p>
                    )}
                  </div>
                  <span className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                    task.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    task.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                    task.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {task.status}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-8">No tasks found</p>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <button 
          onClick={() => navigate('/leads/new')}
          className="bg-primary-600 text-white p-4 rounded-xl hover:bg-primary-700 transition-colors"
        >
          <UserPlus className="w-6 h-6 mx-auto mb-2" />
          <span className="text-sm font-medium">Add Lead</span>
        </button>
        <button 
          onClick={() => navigate('/clients/new')}
          className="bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition-colors"
        >
          <Users className="w-6 h-6 mx-auto mb-2" />
          <span className="text-sm font-medium">Add Client</span>
        </button>
        <button 
          onClick={() => navigate('/tasks/new')}
          className="bg-purple-600 text-white p-4 rounded-xl hover:bg-purple-700 transition-colors"
        >
          <ClipboardList className="w-6 h-6 mx-auto mb-2" />
          <span className="text-sm font-medium">Create Task</span>
        </button>
        <button 
          onClick={() => navigate('/appointments/new')}
          className="bg-orange-600 text-white p-4 rounded-xl hover:bg-orange-700 transition-colors"
        >
          <Calendar className="w-6 h-6 mx-auto mb-2" />
          <span className="text-sm font-medium">Schedule Meeting</span>
        </button>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;