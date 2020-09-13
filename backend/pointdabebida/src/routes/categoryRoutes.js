const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/CategoryController');


router.post('/post', categoryController.store);
router.get('/get', categoryController.index);
router.delete('/delete', categoryController.destroy);

module.exports = router;
