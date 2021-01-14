const express = require('express')
const logger = require('./middleware-loger')
const app = express()

app.use(logger({
    enable:true
}))

app.listen(
    1337, ()=>console.log('Web server listening on port 1337')
)