// load libraries
const express = require('express')
const morgan = require('morgan')
const cookie = require('fortune-cookie')

const cookies = () => {
    const idx = Math.floor(Math.random() *cookie.length )
    return cookie[idx]
}

// Note: NO NEED TO DECLARE PORT

module.exports = (req ,resp) => {
    // create an instance of express
    const app = express()

    // use morgan to log all requests. Use the combined format
    app.use(morgan('combined'));

    // resources
    // GET /api/cookie -> application/json { cookie: 'cookie text'}
    app.get("/api/cookie", (req, resp) => {
        const count = parseInt(req.query['count']) || 1;
        resp.status(200)
        resp.type('application/json')
        const c = []
        for (let i = 0; i< count; i++) {
            c.push({cookie: cookies()})
        }
        resp.json(c)
    })

    // any resource not found redirect back to '/'
    app.use((req,resp) => {
        resp.redirect('/')
    })

    //  no listen, pass req, resp to express
    app(req, resp)
}