const express = require('express')
const app = express()
const router = express.Router()

router.use((req, res, next)=>{
    if(!req.query.id){
        next('router')
    }else{
        next()
    }
})
router.get('/home', (req, res, next)=>{
    const id = req.query.id
    res.send(`You send an id ${id}`)
})
app.get('/home', router, (req, res, next)=>{
    res
        .status(400)
        .send('You need to specify user id')
})

app.listen(
    1337, ()=>console.log('Web Server listening on port 1337')
)