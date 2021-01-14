const express = require('express')
const app = express()

app.get('/one', (req, res, nextHandler)=>{
    res.type('text/plain')
    res.write('Hello')
    nextHandler()
})
app.get('/one', (req, res, nextHandler)=>{
    res.end('World')
})
app.get('/two',
    (req, res, nextHandler)=>{
        res.type('text/plain')
        res.write('Hello')
        nextHandler()
    },
    (req, res, nextHandler)=>{
        res.end('Moon')
    })

app.listen(
    1337, ()=>console.log('Web Server listening on port 1337')
)