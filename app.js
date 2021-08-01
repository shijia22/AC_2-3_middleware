const express = require('express')
const app = express()
const port = 3000

const middlewarePackage = (req, res, next) => {
  let sTime = new Date()
  next()
  let eTime = new Date()
  let tatal = eTime - sTime
  console.log(
   Date(),
    '|',
    req.method,
    'form',
    req.originalUrl,
    'total time:',
    `${tatal}`, 'ms'
  )
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
