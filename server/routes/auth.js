import express from 'express';
import { register, login, getUserProfile } from '../controllers/auth.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/profile', authenticate, getUserProfile);

export default router;