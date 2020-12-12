const Cat = require('../models/cats.model');
const asyncHandler = require('express-async-handler')


exports.getCats = asyncHandler(async (req, res) => {
    const cats = await Cat.find();
    res.status(200).json({
        success: true,
        size: cats.length,
        data: cats
    })
})

exports.addCat = asyncHandler(async (req, res) => {
    const cat = await Cat.create(req.body)
    res.send(cat)
})

exports.getCat = asyncHandler(async (req, res) => {
    const catID = req.params.id

    const cat = await Cat.findById(catID)

    if (!cat) {
        res.status(404)
        throw new Error('There is no cat with this ID')
    }
    res.status(200).json({
        success: true,
        data: cat
    })
})

exports.updateCat = asyncHandler(async (req, res) => {
    const catID = req.params.id

    const cat = await Cat.findById(catID)
    if (!cat) {
        res.status(404)
        throw new Error('There is no cat with this ID')
    }

    await Cat.findByIdAndUpdate(catID, req.body, {
        new: true,
        runValidators: true,
    })

    res.send(cat)
})