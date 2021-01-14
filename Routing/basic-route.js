const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.status(200).send('Hello there!')
})

app.listen(
    1337, ()=>console.log('Web Server running on port 1337')
)