const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.status(200).send('Hello there!')
})

app.listen(
    4000, ()=>{'Web Server running on port 4000'}
)