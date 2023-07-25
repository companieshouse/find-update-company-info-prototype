//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Add your routes here - above the module.exports line

router.use('/', require('./routes/v1-routes.js'))

router.use('/', require('./routes/v2-routes.js'))
