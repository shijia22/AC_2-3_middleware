const express = require('express')
const moment = require('moment')
const app = express()
const port = 3000

const middlewarePackage = (req, res, next) => {
  const Time = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
  const reqTime = Date.now()
  const method = req.method
  const URL = req.originalUrl

  res.on('finish', () => {
    const resTime = Date.now()
    console.log(
      `${Time} | ${method} from ${URL} | total time: ${resTime - reqTime}ms`
    )
  })
  next()
}

app.use(middlewarePackage)

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
