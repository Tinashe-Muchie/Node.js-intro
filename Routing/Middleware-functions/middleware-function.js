const express = require('express')
const app = express()

app.use((req, res, next)=>{
    req.allowed = Reflect.has(req.query, 'allowme')
    next()
})
app.get('/', (req, res)=>{
    if(req.allowed){
        res.send('Hello secret world')
    }else {
        res.send('You are not allowed')
    }
})

app.listen(
    1337, ()=>console.log('Web Server listening on port 1337')
)