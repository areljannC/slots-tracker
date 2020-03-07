const express = require('express')
const cors = require('cors')
const { errorHandler } = require('./middlewares')
const { logsController } = require('./controllers')

/* Instantiate Express. */
const api = express()

/* Use middleware. */
api.use(cors({ origin: true }))

/* Use controllers. */
api.use(logsController.path, logsController.router)

api.use((err, req, res, next) => {
  errorHandler(err, res)
})

module.exports = api
