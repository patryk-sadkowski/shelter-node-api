const { Router } = require('express');
const { addCat } = require('../controllers/cats.controllers');

const router = Router();

router
    .route('/')
    .post(addCat)



module.exports = router;