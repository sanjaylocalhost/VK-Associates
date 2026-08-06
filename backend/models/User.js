const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    phone: {
        type: String,
        required: true
    },
    businessName: {
        type: String,
        default: ''
    },
    gstNumber: {
        type: String,
        default: ''
    },
    panNumber: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        enum: ['admin', 'client', 'employee'],
        default: 'client'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    lastLogin: {
        type: Date,
        default: null
    },
    profileImage: {
        type: String,
        default: ''
    },
    address: {
        street: { type: String, default: '' },
        city: { type: String, default: '' },
        state: { type: String, default: '' },
        pincode: { type: String, default: '' },
        country: { type: String, default: 'India' }
    }
}, {
    timestamps: true
});

// REMOVED: No pre-save hook here - password hashing is done in the controller

// Get public profile
UserSchema.methods.getPublicProfile = function() {
    const userObject = this.toObject();
    delete userObject.password;
    delete userObject.__v;
    return userObject;
};

module.exports = mongoose.model('User', UserSchema);