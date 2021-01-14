const logger = (options)=> (req, res, next)=>{
    if(
        typeof options === 'object'
        && options !== null
        && options.enable
    ){
        console.log(
            'StatusCode: ', res.statusCode,
            'URL: ', req.originalUrl
        )
    }
    next()
}

module.exports = logger