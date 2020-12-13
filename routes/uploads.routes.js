const { Router } = require('express');
const { uploadFile, uploadFileForAnimal } = require('../controllers/uploads.controllers');

const router = Router();


router
    .route('/')
    .post(uploadFile)

router
    .route('/:id')
    .post(uploadFileForAnimal)



module.exports = router;