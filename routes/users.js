import express from 'express';
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//UPDATE
router.put('/:id', updateUser); //verifyUser

//DELETE
router.delete('/:id', deleteUser); //verifyUser

//GET
router.get('/:id', getUser); //verifyUser

//GET ALL
router.get('/', verifyAdmin, getUsers);

export default router;
