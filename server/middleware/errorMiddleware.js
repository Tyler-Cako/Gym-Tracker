// errorHandler "intercepts" the express error handler, and tells it to output JSON instead of the standard HTML
// Also gives the error a default status code if one doesnt already exist
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)
    
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}

module.exports = {
    errorHandler,
}