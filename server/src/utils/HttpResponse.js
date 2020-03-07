class HttpResponse {
  constructor(statusCode, message = '', data = {}) {
    this.statusCode = statusCode
    this.message = message
    this.datetime = new Date()
    this.data = { ...data }
  }

  get response() {
    return {
      message: this.message,
      datetime: this.datetime,
      data: this.data
    }
  }
}

module.exports = HttpResponse
