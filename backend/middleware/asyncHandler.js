const asyncHandler = (fn) => {
    return async(req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            console.log('REAL ERROR:', error);
            next(error)
        }
    }
}

module.exports = asyncHandler;