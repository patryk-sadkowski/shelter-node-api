const { Router } = require('express');
const { addCat, getCats, getCat, updateCat } = require('../controllers/cats.controllers');

const router = Router();

router
    .route('/')
    .post(addCat)
    .get(getCats)

router
    .route('/:id')
    .get(getCat)
    .put(updateCat)



module.exports = router;