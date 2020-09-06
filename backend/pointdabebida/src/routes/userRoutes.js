const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');


router.post('/post', userController.store);
router.get('/get', userController.index);

module.exports = router;