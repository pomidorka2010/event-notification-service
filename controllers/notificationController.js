const User = require('../models/User');
const sendEmail = require('../services/emailService');
const sendSMS = require('../services/smsService');

const notifyUser = async (userId, message) => {
  const user = await User.findById(userId);
  if (user.notificationPreference === 'email') {
    await sendEmail(user.email, message);
  } else if (user.notificationPreference === 'sms') {
    await sendSMS(user.phone, message);
  }
};

module.exports = { notifyUser };