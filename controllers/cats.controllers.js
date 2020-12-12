const Cat = require('../models/cats.model');
const asyncHandler = require('express-async-handler')


exports.addCat = asyncHandler(async (req, res, next) => {
    console.log(req.body)
    const cat = await Cat.create(req.body)
    res.send(cat)
})


