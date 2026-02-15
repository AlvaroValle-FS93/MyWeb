import {z} from 'zod';

const contactSchema = z.object({

  name: z.string()
          .min(3, 'The name must be at least two letters long.')
          .max(100, 'The name must be a maximum of 100 letters')
          .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]+$/, 'The name contains an invalid character.'),
  
  email: z.string()
          .email('Email not valid'),

  phone: z.string()
          .regex(/^\+?[0-9]{7,15}$/, "Invalid phone number")
          .optional()
          .or(z.literal("")),
  message: z.string()
            .trim()
            .min(10, "Message is too short")
            .max(500, "Message is too long")
});

export default contactSchema;