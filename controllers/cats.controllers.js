const Animal = require('../models/animals.model');
const asyncHandler = require('express-async-handler')
const throwError = require('../utils/throwError')

exports.getCats = asyncHandler(async (req, res) => {
    const cats = await Animal.find({ type: "Cat" });
    res.status(200).json({
        success: true,
        size: cats.length,
        data: cats
    })
})

exports.addCat = asyncHandler(async (req, res) => {
    req.body.type = "Cat"
    const cat = await Animal.create(req.body)
    res.send(cat)
})

exports.getCat = asyncHandler(async (req, res) => {
    const catID = req.params.id

    const cat = await Animal.find({
        _id: catID,
        type: "Cat"
    })


    if (!cat)
        return throwError('There is no cat with this ID', res, 404)

    res.status(200).json({
        success: true,
        data: cat
    })
})

exports.updateCat = asyncHandler(async (req, res) => {
    const catID = req.params.id

    const cat = await Animal.find({
        _id: catID,
        type: "Cat"
    })

    if (!cat)
        return throwError('There is no cat with this ID', res, 404)


    await Cat.findByIdAndUpdate(catID, req.body, {
        new: true,
        runValidators: true,
    })

    res.status(200).json({
        success: true,
        data: cat
    })
})

exports.deleteCat = asyncHandler(async (req, res) => {
    const catID = req.params.id

    const cat = await Animal.find({
        _id: catID,
        type: "Cat"
    })

    if (!cat)
        return throwError('There is no cat with this ID', res, 404)


    await cat.delete();

    res.status(200).json({
        success: true,
        data: {}
    })
})