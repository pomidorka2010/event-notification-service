const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, message) => {
  const msg = {
    to,
    from: 'your-email@example.com', // Change to your verified sender
    subject: 'Event Notification',
    text: message,
  };
  await sgMail.send(msg);
};

module.exports = sendEmail;