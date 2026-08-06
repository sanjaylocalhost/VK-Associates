const Lead = require('../models/Lead');
const Task = require('../models/Task');
const User = require('../models/User');

// @desc    Get all leads
// @route   GET /api/admin/leads
// @access  Private/Admin
const getLeads = async (req, res) => {
    try {
        const leads = await Lead.find()
            .populate('assignedTo', 'name email')
            .sort({ createdAt: -1 });
        
        res.status(200).json({
            success: true,
            count: leads.length,
            data: leads
        });
    } catch (error) {
        console.error('Get leads error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

// @desc    Create a lead
// @route   POST /api/admin/leads
// @access  Private/Admin
const createLead = async (req, res) => {
    try {
        const lead = await Lead.create(req.body);
        
        res.status(201).json({
            success: true,
            data: lead
        });
    } catch (error) {
        console.error('Create lead error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

// @desc    Update a lead
// @route   PUT /api/admin/leads/:id
// @access  Private/Admin
const updateLead = async (req, res) => {
    try {
        const lead = await Lead.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!lead) {
            return res.status(404).json({
                success: false,
                message: 'Lead not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: lead
        });
    } catch (error) {
        console.error('Update lead error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

// @desc    Delete a lead
// @route   DELETE /api/admin/leads/:id
// @access  Private/Admin
const deleteLead = async (req, res) => {
    try {
        const lead = await Lead.findByIdAndDelete(req.params.id);
        
        if (!lead) {
            return res.status(404).json({
                success: false,
                message: 'Lead not found'
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Lead deleted successfully'
        });
    } catch (error) {
        console.error('Delete lead error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

// @desc    Get all tasks
// @route   GET /api/admin/tasks
// @access  Private/Admin
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
            .populate('assignedTo', 'name email')
            .sort({ dueDate: 1, createdAt: -1 });
        
        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        console.error('Get tasks error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

// @desc    Create a task
// @route   POST /api/admin/tasks
// @access  Private/Admin
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        
        res.status(201).json({
            success: true,
            data: task
        });
    } catch (error) {
        console.error('Create task error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

// @desc    Update a task
// @route   PUT /api/admin/tasks/:id
// @access  Private/Admin
const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: task
        });
    } catch (error) {
        console.error('Update task error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

// @desc    Delete a task
// @route   DELETE /api/admin/tasks/:id
// @access  Private/Admin
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        
        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Task deleted successfully'
        });
    } catch (error) {
        console.error('Delete task error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

// @desc    Get dashboard stats
// @route   GET /api/admin/stats
// @access  Private/Admin
const getStats = async (req, res) => {
    try {
        const [totalLeads, totalTasks, pendingTasks, totalClients] = await Promise.all([
            Lead.countDocuments(),
            Task.countDocuments(),
            Task.countDocuments({ status: { $ne: 'Completed' } }),
            User.countDocuments({ role: 'client' })
        ]);
        
        res.status(200).json({
            success: true,
            data: {
                totalLeads,
                totalTasks,
                pendingTasks,
                totalClients,
                completedTasks: totalTasks - pendingTasks
            }
        });
    } catch (error) {
        console.error('Get stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

module.exports = {
    getLeads,
    createLead,
    updateLead,
    deleteLead,
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    getStats
};