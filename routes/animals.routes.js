const { Router } = require('express');
const { getAnimals, getAnimal } = require('../controllers/animals.controllers');

const catsRoutes = require('./cats.routes')
const dogsRoutes = require('./dogs.routes')

const router = Router();

router.use('/cats', catsRoutes)
router.use('/dogs', dogsRoutes)

router
    .route('/')
    .get(getAnimals)

router
    .route('/:id')
    .get(getAnimal)



module.exports = router;