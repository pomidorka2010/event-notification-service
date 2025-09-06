const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Define routes here
router.post('/notify/:id', async (req, res) => {
  const userId = req.params.id;
  const message = req.body.message;
  await notificationController.notifyUser(userId, message);
  res.send('Notification sent');
});

module.exports = router;