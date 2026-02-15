import express from 'express';
import userController from './user.controller.js';
import validateForm from '../../middlewares/validateForm.js';
import contactSchema from '../../schemas/contactShema.js';

const router = express.Router();

// Contact info:
router.post('/contact', validateForm(contactSchema), userController.recieveUserInfo);

export default router;