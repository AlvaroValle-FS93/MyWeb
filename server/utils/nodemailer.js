import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.MAILER_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_PASS
  }
});

export const contactMe = async ({ name, email, phone, message }) => {
  const info = await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.MAILER_EMAIL,
    subject: `New contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\n${message}`
  });

  console.log('Email sent:', info.messageId);
  return info;
};
