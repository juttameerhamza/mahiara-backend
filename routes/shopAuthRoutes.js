const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shopController');

router.get('/login', shopController.getlogin);
// router.post('/login', shopController.postlogin);
// router.get('/logout', shopController.getLogout);

router.get('/signup', shopController.getSignup);
// router.post('/signup', shopController.postSignup);

module.exports = router;