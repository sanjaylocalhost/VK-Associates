const express = require('express');
const router = express.Router();
const {
    getLeads,
    createLead,
    updateLead,
    deleteLead,
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    getStats
} = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/authMiddleware');

// All routes are protected and require admin role
router.use(protect);
router.use(authorize('admin'));

// Lead routes
router.route('/leads')
    .get(getLeads)
    .post(createLead);

router.route('/leads/:id')
    .put(updateLead)
    .delete(deleteLead);

// Task routes
router.route('/tasks')
    .get(getTasks)
    .post(createTask);

router.route('/tasks/:id')
    .put(updateTask)
    .delete(deleteTask);

// Stats route
router.get('/stats', getStats);

router.get('/clients', async (req, res) => {
  try {
    const clients = await User.find({ role: 'client' }).select('-password');
    res.json({ success: true, data: clients });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post('/clients', async (req, res) => {
  try {
    const client = await User.create({ ...req.body, role: 'client' });
    res.status(201).json({ success: true, data: client });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.delete('/clients/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Client deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/employees', protect, async (req, res) => {
    try {
        const employees = await User.find({ 
            role: { $in: ['admin', 'employee'] } 
        }).select('name email role');
        res.json({ success: true, data: employees });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;