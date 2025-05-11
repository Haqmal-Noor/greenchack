import express from 'express';
import { 
  getChats, 
  getChatById, 
  createChat, 
  updateChat, 
  deleteChat 
} from '../controllers/chats.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// All routes are protected
router.use(authenticate);

router.get('/', getChats);
router.get('/:id', getChatById);
router.post('/', createChat);
router.put('/:id', updateChat);
router.delete('/:id', deleteChat);

export default router;