const { Router } = require('express');
const { addCat, getCats, getCat, updateCat, deleteCat } = require('../controllers/cats.controllers');

const catsRoutes = require('./cats.routes')

const router = Router();

router.use('/cats', catsRoutes)

router
    .route('/')



module.exports = router;