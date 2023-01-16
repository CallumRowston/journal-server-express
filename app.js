import express from 'express'
import { CategoryModel } from './db.js'
import entryRoutes from './routes/entry_routes.js'
import cors from 'cors'

const app = express()

app.use(cors())

// Middleware to parse incoming JSON bodies in request. Has nothing to do with response
app.use(express.json())

app.get('/', (request, response) => response.send({ info: 'Journal API 2023' }))

app.get('/categories', async (req, res) => res.send(await CategoryModel.find()))

app.use('/entries', entryRoutes)

export default app