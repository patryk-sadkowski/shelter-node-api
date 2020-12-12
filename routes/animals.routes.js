const { Router } = require('express');

const catsRoutes = require('./cats.routes')

const router = Router();

router.use('/cats', catsRoutes)

router
    .route('/')



module.exports = router;