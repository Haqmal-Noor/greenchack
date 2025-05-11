import express from 'express';
import { 
  getMessages, 
  sendMessage, 
  markMessageAsRead, 
  deleteMessage 
} from '../controllers/messages.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// All routes are protected
router.use(authenticate);

router.get('/:chatId', getMessages);
router.post('/:chatId', sendMessage);
router.put('/:messageId/read', markMessageAsRead);
router.delete('/:messageId', deleteMessage);

export default router;