const Animal = require('../models/animals.model');
const asyncHandler = require('express-async-handler')
const throwError = require('../utils/throwError')

exports.getAnimals = asyncHandler(async (req, res) => {
    const animals = await Animal.find();
    res.status(200).json({
        success: true,
        size: animals.length,
        data: animals
    })
})

exports.getAnimal = asyncHandler(async (req, res) => {
    const animalID = req.params.id

    const animal = await Animal.findById(animalID)

    if (!animal)
        return throwError(`No animal found for id: ${animalID}`, res, 404)

    res.status(200).json({
        success: true,
        data: animal
    })
})
