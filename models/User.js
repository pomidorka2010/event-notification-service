const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  notificationPreference: { type: String, enum: ['email', 'sms'], default: 'email' },
});

module.exports = mongoose.model('User', userSchema);