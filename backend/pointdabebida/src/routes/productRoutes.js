const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductControllet');
var multer  = require('multer')
var upload = multer({dest: 'uploads/'})

router.post('/post', upload.single('image_path'), productController.store);
router.get('/get', productController.index);
router.get('/delete', productController.destroy);

module.exports = router;