const express = require('express')
const app = express()

app.route('/home')
    .get((req,res,nextHandler)=>{
        res.type('text/html')
        res.write('<!DOCTYPE html>')
        nextHandler()        
    })
    .get((req,res,nextHandler)=>{
        res.end(`
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>WebApp powered by ExpressJS</title>
            </head>
            <body role="application">
                <form method="post" action="/home">
                    <input type="text" />
                    <button type="submit">Send</button>
                </form>
            </body>
        </html> `)
        nextHandler()
    })
    .post((req,res)=>{
        res.send('Got it')
    })

app.listen(
    1337, ()=>console.log('Web Server listening on port 1337')
)