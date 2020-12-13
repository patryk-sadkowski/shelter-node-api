const { Router } = require('express');
const { getDogs, addDog, getDog, updateDog, deleteDog } = require('../controllers/dogs.controllers');

const router = Router({ mergeParams: true });


router
    .route('/')
    .get(getDogs)
    .post(addDog)

router
    .route('/:id')
    .get(getDog)
    .put(updateDog)
    .delete(deleteDog)



module.exports = router;