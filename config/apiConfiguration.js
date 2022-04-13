const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

module.exports = () => {
    const app = express()

    //Body Parser - JSON
    app.use(express.json())
    //Enabling Cors
    app.use(cors())
    //Morgan log middleware setup to Winston's log Stream
    app.use(morgan("combined"))
    //Routing to Controller Index
    app.use(require('../controllers'))

    return app
}