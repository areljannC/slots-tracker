const express = require('express')
const cors = require('cors')
const {
  getSpreadsheetById,
  getSheetFromSpreadsheetByIndex,
  setSheetHeaderRow,
  getSheetRows,
  addSheetRow,
  addSheetRows
} = require('./utils/sheets')

/* Instantiate Express. */
const api = express()

/* Use middleware. */
api.use(cors({ origin: true }))

api.post('/logs', async (req, res) => {
  /* Get log arrays from request body. */
  const { scopeLogs, playLogs } = req.body

  /* Get spreadsheet by ID. */
  const spreadsheet = await getSpreadsheetById(
    '1t8HiwLfTDkNfucdzuOq_tDdMClBk5UL7Q74QGarOvHE'
  )
  
  /* Get sheets for scope and play logs. */
  const scopeLogsSheet = await getSheetFromSpreadsheetByIndex(spreadsheet, 0)
  const playLogsSheet = await getSheetFromSpreadsheetByIndex(spreadsheet, 1)

  /* Set row headers of both sheets. */
  await setSheetHeaderRow(scopeLogsSheet, [
    'Casino',
    'Slot Machine',
    'Bet Amount',
    'Log Type',
    'Free Spins',
    'Random Feature Trigger',
    'Payout Amount',
    'DateTime',
  ])
  await setSheetHeaderRow(playLogsSheet, [
    'Casino',
    'Slot Machine',
    'Bet Amount',
    'Log Type',
    'Free Spins',
    'Random Feature Trigger',
    'Payout Amount',
    'DateTime'
  ])

  console.log(JSON.stringify(scopeLogs, null, 2))
  console.log(JSON.stringify(playLogs, null, 2))

  await addSheetRows(scopeLogsSheet, scopeLogs)
  await addSheetRows(playLogsSheet, playLogs)

  res.status(200).json({ message: 'Success!' })
})

module.exports = api
