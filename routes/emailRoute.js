const express = require('express');
const multer = require('multer');
const {storage} = require("../cloudConfig");
const upload = multer({storage});
const emailController = require('../controllers/emailController');

const router = express.Router();



// Routes
router.get('/getEmailLayout', emailController.getEmailLayout);
router.get('/uploadImage', emailController.image);
router.post('/uploadImage', upload.single('image'), emailController.uploadImage);
router.post('/uploadEmailConfig', emailController.saveEmailConfig);
router.get('/renderAndDownloadTemplate', emailController.renderAndDownloadTemplate);

module.exports = router;
