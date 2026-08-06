const { body } = require('express-validator');

// Registration validation rules
exports.validateRegister = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2 }).withMessage('Name must be at least 2 characters')
        .isLength({ max: 50 }).withMessage('Name cannot exceed 50 characters')
        .trim(),
    
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email')
        .normalizeEmail()
        .trim(),
    
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
        .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
        .matches(/[0-9]/).withMessage('Password must contain at least one number'),
    
    body('phone')
        .notEmpty().withMessage('Phone number is required')
        .matches(/^[0-9]{10}$/).withMessage('Phone number must be exactly 10 digits')
        .trim(),
    
    body('businessName')
        .optional()
        .trim(),
    
    body('gstNumber')
        .optional()
        .matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/)
        .withMessage('Please provide a valid GST number format')
        .trim()
        .toUpperCase(),
    
    body('panNumber')
        .optional()
        .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)
        .withMessage('Please provide a valid PAN number format')
        .trim()
        .toUpperCase(),
    
    body('role')
        .optional()
        .isIn(['admin', 'client', 'employee'])
        .withMessage('Invalid role specified')
];

// Login validation rules
exports.validateLogin = [
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email')
        .normalizeEmail()
        .trim(),
    
    body('password')
        .notEmpty().withMessage('Password is required')
];