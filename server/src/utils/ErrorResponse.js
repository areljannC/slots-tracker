class ErrorResponse extends Error {
  constructor(statusCode, message) {
    super()
    this.statusCode = statusCode
    this.message = message,
    this.datetime = new Date()
  }

  get response() {
    return {
      message: this.message,
      datetime: this.datetime,
    }
  }
}

module.exports = ErrorResponse