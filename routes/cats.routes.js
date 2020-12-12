const { Router } = require('express');
const { addCat, getCats, getCat, updateCat, deleteCat } = require('../controllers/cats.controllers');

const router = Router({ mergeParams: true });


router
    .route('/')
    .get(getCats)
    .post(addCat)

router
    .route('/:id')
    .get(getCat)
    .put(updateCat)
    .delete(deleteCat)



module.exports = router;