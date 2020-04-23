const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shopController');

router.get('/', shopController.getIndex);
router.get('/product/:id', shopController.getProduct);
router.get('/collection/:id', shopController.getCollection);

module.exports = router;