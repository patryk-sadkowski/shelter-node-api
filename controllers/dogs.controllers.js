const Animal = require('../models/animals.model');
const asyncHandler = require('express-async-handler')
const throwError = require('../utils/throwError')

exports.getDogs = asyncHandler(async (req, res) => {
    const dogs = await Animal.find({ type: "Dog" });
    res.status(200).json({
        success: true,
        size: dogs.length,
        data: dogs
    })
})

exports.addDog = asyncHandler(async (req, res) => {
    req.body.type = "Dog"
    const dog = await Animal.create(req.body)
    res.send(dog)
})

exports.getDog = asyncHandler(async (req, res) => {
    const dogID = req.params.id

    const dog = await Animal.find({
        _id: dogID,
        type: "Dog"
    })


    if (!dog)
        return throwError(`No dog found for id: ${dogID}`, res, 404)

    res.status(200).json({
        success: true,
        data: dog
    })
})

exports.updateDog = asyncHandler(async (req, res) => {
    const dogID = req.params.id

    const dog = await Animal.find({
        _id: dogID,
        type: "Dog"
    })


    if (!dog)
        return throwError(`No dog found for id: ${dogID}`, res, 404)


    await Animal.findByIdAndUpdate(dogID, req.body, {
        new: true,
        runValidators: true,
    })

    res.status(200).json({
        success: true,
        data: dog
    })
})

exports.deleteDog = asyncHandler(async (req, res) => {
    const dogID = req.params.id

    const dog = await Animal.find({
        _id: dogID,
        type: "Dog"
    })

    if (!dog)
        return throwError(`No dog found for id: ${dogID}`, res, 404)


    await dog.delete();

    res.status(200).json({
        success: true,
        data: {}
    })
})