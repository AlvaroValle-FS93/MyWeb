import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.MAILER_HOST,
  port: 465,
  secure: true,
  auth: {
    user: `${process.env.MAILER_EMAIL}`,
    pass: `${process.env.MAILER_PASS}`
  }
})

export const contactMe = async (customerData) => {

  const {name, email, phone, message} = customerData;

  try {

    const info = await transporter.sendMail({
      from: email,
      to: process.env.MAILER_EMAIL,
      subject: `CONTACT FROM CUSTOMER`,
      text: `${name} - ${phone}: ${message}`
    })

    console.log('Correo de contacto enviado', info.messageId);
    return {info: info}
    
  } catch (error) {
    console.log(error);
    throw error;
  }

}