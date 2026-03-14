import express from 'express';
import validateForm from '../../middlewares/validateForm.js';
import contactSchema from '../../schemas/contactSchema.js';
import { contactMe } from '../../utils/nodemailer.js';

const router = express.Router();

router.post('/contact', validateForm(contactSchema), async (req, res) => {
  try {
    await contactMe(req.body);
    res.status(200).json('ok');
  } catch {
    res.status(500).json('Not ok');
  }
});

export default router;
