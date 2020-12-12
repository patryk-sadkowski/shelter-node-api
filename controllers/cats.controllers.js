const Cat = require('../models/cats.model');
const asyncHandler = require('express-async-handler')


exports.getCats = asyncHandler(async (req, res, next) => {
    const cats = await Cat.find();
    res.status(200).json({
        success: true,
        size: cats.length,
        data: cats
    })
})



exports.addCat = asyncHandler(async (req, res, next) => {
    const cat = await Cat.create(req.body)
    res.send(cat)
})


