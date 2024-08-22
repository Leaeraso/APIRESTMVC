import express from 'express'
import diariesRouter from './routes/diaries'

const app = express()

app.use(express.json()) // middleware que transforma el req.body a json

const PORT = 3000

app.get('/ping', (_, res) => {
  console.log('someone pinged here' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diariesRouter)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
