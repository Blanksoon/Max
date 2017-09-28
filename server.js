const express = require('express')
const next = require('next')

const cookieParser = require('cookie-parser')
const port = parseInt(process.env.PORT, 10) || 8080
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(cookieParser())

  server.get('/vods', (req, res) => {
    return app.render(req, res, '/vods', req.query)
  })

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  // server.get('/b', (req, res) => {
  //   return app.render(req, res, '/a', req.query)
  // })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
