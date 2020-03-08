const { sheets, ErrorResponse, formatMillisecondToDate } = require('../utils')

const addScopeLogsToSheet = async (spreadsheetId, scopeLogs) => {
  // get Google Spreadsheet 
  const spreadsheet = await sheets.getSpreadsheetById(spreadsheetId)
    .catch(err => {
      throw new ErrorResponse(404, 'Unable to get Google Sheets instance.')
    })

  // get sheet from spreadsheet
  const scopeLogsSheet = await sheets.getSheetFromSpreadsheetByIndex(spreadsheet, 0)
    .catch(err => {
      throw new ErrorResponse(400, 'Unable to get sheet from spreadsheet.')
    })

  // load sheet header row; set header row if none found
  await scopeLogsSheet.loadHeaderRow().catch(async err => {
    await sheets.setSheetHeaderRow(scopeLogsSheet, [
      'casino',
      'slotMachine',
      'betAmount',
      'logType',
      'freeSpinsAmount',
      'randomFeatureTrigger',
      'payoutAmount',
      'timestamp',
    ])
  })

  // add scope logs to sheet
  await sheets.addSheetRows(scopeLogsSheet, scopeLogs).catch(err => {
    throw new ErrorResponse(500, 'Unable to add logs to Google Sheets.')
  })
}

const addPlayLogsToSheet = async (spreadsheetId, playLogs) => {
  // get Google Spreadsheet 
  const spreadsheet = await sheets.getSpreadsheetById(spreadsheetId)
    .catch(err => {
      throw new ErrorResponse(404, 'Unable to get Google Sheets instance.')
    })

  // get sheet from spreadsheet
  const playLogsSheet = await sheets.getSheetFromSpreadsheetByIndex(spreadsheet, 1)
    .catch(err => {
      throw new ErrorResponse(400, 'Unable to get sheet from spreadsheet.')
    })

  // load sheet header row; set header row if none found
  await playLogsSheet.loadHeaderRow().catch(async err => {
    await sheets.setSheetHeaderRow(playLogsSheet, [
      'casino',
      'slotMachine',
      'betAmount',
      'logType',
      'freeSpinsAmount',
      'randomFeatureTrigger',
      'payoutAmount',
      'timestamp',
    ])
  })

  // add scope logs to sheet
  await sheets.addSheetRows(playLogsSheet, playLogs).catch(err => {
    throw new ErrorResponse(500, 'Unable to add logs to Google Sheets.')
  })
}

module.exports.logsService = {
  addScopeLogsToSheet,
  addPlayLogsToSheet
}
