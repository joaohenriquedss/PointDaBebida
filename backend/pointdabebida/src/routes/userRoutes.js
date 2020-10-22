const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');


router.post('/post', userController.store);
router.get('/get', userController.index);
router.delete('/delete', userController.destroy);

module.exports = router;
