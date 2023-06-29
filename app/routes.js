const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.use('/', require('./routes/v1-routes.js'))

router.use('/', require('./routes/v2-routes.js'))


module.exports = router




