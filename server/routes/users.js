import express from 'express';
import { 
  getUsers, 
  getUserById, 
  updateUserProfile, 
  updateUserStatus 
} from '../controllers/users.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// All routes are protected
router.use(authenticate);

router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/profile', updateUserProfile);
router.put('/status', updateUserStatus);

export default router;