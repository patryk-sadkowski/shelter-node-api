exports.getFileExtension = (fileName) => {
    const fileExtension = fileName.split('.')
    return fileExtension[fileExtension.length - 1]
}