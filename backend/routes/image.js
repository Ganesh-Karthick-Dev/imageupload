const express = require('express');
const router = express.Router();
const {
    uploadimage,
    retriveimage
} = require('../controller/image.js')


// save image to database
router.post('/upload',uploadimage)

// get image from database
router.get('/retrive',retriveimage)


module.exports = router