import * as functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'

/* Initialize Express.js */
const api = express()

/* Use middlewares */
api.use(cors({ origin: true }))
api.use(express.json())

api.post('/logs', async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2))
  res.status(200).json({ message: 'Success!' })
})

exports.api = functions.https.onRequest(api)