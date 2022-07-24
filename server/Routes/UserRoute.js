import express from 'express';
import { deletUser, followUser, getAllUsers, getUser, unFollowUser, updateUser } from '../Controllers/UserController.js';
import authMiddleWare from '../Middleware/Authmiddleware.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.put('/:id', authMiddleWare, updateUser);
router.delete('/:id', authMiddleWare, deletUser);
router.put('/:id/follow', authMiddleWare, followUser);
router.put('/:id/unfollow', authMiddleWare, unFollowUser);

export default router;
