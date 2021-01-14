const express = require('express')
const app = express()

app.use('/', (req, res, next)=>{
    try{
        throw new Error('Oh no something went wrong')
    }catch(error){
        next(error)
    }
})
app.use('/', (error, req, res, next)=>{
    res.send(error.message)
})

app.listen(
    1337, ()=>console.log('Web Server listening on port 1337')
)