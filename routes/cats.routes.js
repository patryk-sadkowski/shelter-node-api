const { Router } = require('express');
const { addCat, getCats, getCat, updateCat, deleteCat } = require('../controllers/cats.controllers');

const router = Router();

router
    .route('/')
    .post(addCat)
    .get(getCats)

router
    .route('/:id')
    .get(getCat)
    .put(updateCat)
    .delete(deleteCat)



module.exports = router;