const { Router } = require('express');
const { addCat, getCats } = require('../controllers/cats.controllers');

const router = Router();

router
    .route('/')
    .post(addCat)
    .get(getCats)



module.exports = router;