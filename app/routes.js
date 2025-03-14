//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.use('/', require('./routes/v1-routes.js'))

router.use('/', require('./routes/v2-routes.js'))


router.use('/', require('./routes/v3-routes.js'))

router.use('/', require('./routes/v4-routes.js'))


router.use('/', require('./routes/v5-routes.js'))

router.use('/', require('./routes/v6-routes.js'))


router.use('/', require('./routes/v7-routes.js'))

router.use('/', require('./routes/dev-ready-routes.js'))

router.use('/', require('./routes/dev-ready-v2-routes.js'))


router.use('/', require('./routes/public-beta-v2-routes.js'))

router.use('/', require('./routes/public-beta-v3-routes.js'))

 router.use('/', require('./routes/public-beta-dev-ready-routes.js'))


 router.use('/', require('./routes/public-beta-dev-ready-backlog-routes.js'))


 router.use('/', require('./routes/public-beta-release-2-routes.js'))

router.use('/', require('./routes/v7-your-companies-routes.js'))


router.use('/', require('./routes/v8-your-companies-routes.js'))