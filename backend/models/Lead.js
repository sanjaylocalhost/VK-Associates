const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    service: {
        type: String,
        trim: true
    },
    source: {
        type: String,
        enum: ['Website', 'Referral', 'Social Media', 'Phone', 'Email', 'Other'],
        default: 'Website'
    },
    status: {
        type: String,
        enum: ['New', 'Contacted', 'Follow Up', 'Converted', 'Rejected'],
        default: 'New'
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false // Make it optional
    },
    remarks: {
        type: String,
        trim: true
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Lead', LeadSchema);