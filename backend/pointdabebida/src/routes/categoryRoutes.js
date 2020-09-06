const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/CategoryController');


router.post('/post', categoryController.store);
router.get('/get', categoryController.index);

module.exports = router;