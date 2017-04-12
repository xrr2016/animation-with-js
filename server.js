// require('babel-register')
// require("babel-polyfill")
const Koa = require('koa')
const path = require('path')
const port = process.env.PORT || 3000

// import Koa from 'koa'
// import path from 'path'
const app = new Koa()

app.use(require('koa-static')(path.resolve(__dirname, 'public')))
app.use(ctx => ctx.body = 'Hello Koa2')

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})