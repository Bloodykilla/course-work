class ApiError extends Error {
    constructor(status,message) {
        super();
        this.status = status
        this.message = message
    }

    static badRequest(messga) {
        return new ApiError(404,message)
    }
    static iternal(messga) {
        return new ApiError(500,message)
    }
    static forbidden(messga) {
        return new ApiError(403,message)
    }
}