const { GoogleSpreadsheet } = require('google-spreadsheet')
const sheetsServiceAccount = require('../../sheets-service-account.json')

const getSpreadsheetById = async id => {
  const spreadsheet = new GoogleSpreadsheet(id)
  spreadsheet.useServiceAccountAuth(sheetsServiceAccount)
  await spreadsheet.loadInfo()
  return spreadsheet
}

const getSheetFromSpreadsheetByIndex = async (spreadsheet, index) =>
  await spreadsheet.sheetsByIndex[index]

const setSheetHeaderRow = async (sheet, headers) => {
  await sheet.setHeaderRow(headers)
}

const getSheetRows = async (sheet, limit, offset) => await sheet.getRows()

const addSheetRow = async (sheet, row) => {
  await sheet.addRow(row)
}

const addSheetRows = async (sheet, rows) => {
  await sheet.addRows(rows)
}

module.exports = {
  getSpreadsheetById,
  getSheetFromSpreadsheetByIndex,
  setSheetHeaderRow,
  getSheetRows,
  addSheetRow,
  addSheetRows
}
