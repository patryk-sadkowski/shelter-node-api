exports.throwError = (message, res, status) => {
    res.status(status)
    throw new Error(message)
}