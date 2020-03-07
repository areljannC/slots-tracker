const router = require('express').Router()
const routerPath = '/logs'
const { logsService } = require('../services')
const { HttpResponse, ErrorResponse } = require('../utils')

router.post('/', async (req, res, next) => {
  const { spreadsheetId, scopeLogs, playLogs } = req.body
  try {
    await logsService.addScopeLogsToSheet(spreadsheetId, scopeLogs)
    await logsService.addPlayLogsToSheet(spreadsheetId, playLogs)

    const { statusCode, response } = new HttpResponse(
      201,
      'Successfully added scope and play logs to Google Sheets.'
    )

    res.status(statusCode).json(response)
  } catch (error) {
    next(error)
  }
})

module.exports.logsController = {
  router,
  path: routerPath
}
