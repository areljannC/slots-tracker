const errorHandler = (err, res) => {
  const { statusCode, response } = err
  res.status(statusCode).json(response)
}

module.exports = errorHandler