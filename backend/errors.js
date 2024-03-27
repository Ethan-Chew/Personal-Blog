class NotFoundException extends Error {
    constructor(nfFunc) {
        super(`${nfFunc} not found`)
        this.name = "NotFoundException"
        this.statusCode = 404
    }
}

export { NotFoundException }