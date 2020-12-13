const Animal = require('../models/animals.model');
const asyncHandler = require('express-async-handler')
const throwError = require('../utils/throwError')
const uniqid = require('uniqid')
const { getFileExtension } = require('../utils/getFileExtension')

exports.uploadFile = asyncHandler(async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0)
        return throwError('No files were uploaded', res, 400)

    const imagesURI = `${__dirname}/../public/img`
    let arrayOfFiles = req.files['']
    const files = [];

    arrayOfFiles.forEach(file => {
        const fileExt = getFileExtension(file.name);
        const imageID = uniqid()
        const imagePath = `${imagesURI}/${imageID}.${fileExt}`
        file.mv(imagePath, function (error) {
            if (error) return throwError("Unhandled error", res, 500)
        })
        files.push(`http://localhost:3000/public/img/${imageID}.${fileExt}`)
    })
    res.send(files)
})


exports.uploadFileForAnimal = asyncHandler(async (req, res) => {
    const animalID = req.params.id
    console.log("TEST".green.bold)

    let animal = await Animal.findById(animalID)

    if (!animal)
        return throwError(`No dog found for id: ${dogID}`, res, 404)

    if (!req.files || Object.keys(req.files).length === 0)
        return throwError('No files were uploaded', res, 400)

    if (!req.files || Object.keys(req.files).length === 0)
        return throwError('No files were uploaded', res, 400)

    const imagesURI = `${__dirname}/../public/img`
    let arrayOfFiles = req.files['']
    const files = [];

    arrayOfFiles.forEach(file => {
        const fileExt = getFileExtension(file.name);
        const imageID = uniqid()
        const imagePath = `${imagesURI}/${imageID}.${fileExt}`
        file.mv(imagePath, function (error) {
            if (error) return throwError("Unhandled error", res, 500)
        })
        files.push(`http://localhost:3000/public/img/${imageID}.${fileExt}`)
    })


    animal.photos = animal.photos ? [...animal.photos, ...files] : files
    console.log(animal.photos)
    animal = await animal.save({
        new: true,
        runValidators: true,
    })

    res.send(animal)
})
