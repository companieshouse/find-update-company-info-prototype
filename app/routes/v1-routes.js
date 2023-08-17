//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


//One loginsign create - email address
router.post('/v1/create-enter-email', function (req, res) {

    res.redirect('create-check-your-email')
  })
  
  //One loginsign create - check email 
  router.post('/v1/create-check-your-email', function (req, res) {
  
    res.redirect('create-enter-password')
  })
  
  
  //One loginsign create - check email 
  router.post('/v1/create-enter-password', function (req, res) {
  
    res.redirect('create-choose-security-type')
  })
  
  //One loginsign create - check email 
  router.post('/v1/create-choose-security-type', function (req, res) {
  
     //If they have an existing chs account
     if (req.session.data['choose-security-type'] === 'text-message-on-sign-in') {
          
      res.redirect('create-enter-mobile-number')
    }
    // Otherwise take them to a stop screen
    else{
  
        res.redirect('create-set-up-auth-app')
    }
  })
  
  //One loginsign set up auth app
  router.post('/v1/create-set-up-auth-app', function (req, res) {
  
    res.redirect('create-complete')
  })
  
  
  //One loginsign enter mobile number
  router.post('/v1/create-enter-mobile-number', function (req, res) {
  
    res.redirect('create-check-your-phone')
  })
  
  //One loginsign enter mobile number
  router.post('/v1/create-check-your-phone', function (req, res) {
  
    res.redirect('create-complete')
  })
  
  
  //One loginsign create complete
  router.post('/v1/create-complete', function (req, res) {
  
    res.redirect('existing-account')
  })
  
  
  //One loginsign enter mobile number
  router.post('/v1/create-enter-mobile-number', function (req, res) {
  
    res.redirect('create-check-your-phone')
  })
  
  
  
  //One loginsign create - check your email 
  
  
  //One loginsign in check phone 
  router.post('/v1/enter-code', function (req, res) {
  
    res.redirect('existing-account')
  })
  
  
  // Do you have an existing Companies House account?
  router.post('/v1/existing-account', function (req, res) {
  
      //If they have an existing chs account
      if (req.session.data['existing-chs-account'] === 'yes') {
          
        res.redirect('chs-sign-in')
    }
    // Otherwise take them to a stop screen
    else{
  
        res.redirect('chs-home-signed-in')
    }
    
  })
  
  // Companies House sign in 
  router.post('/v1/chs-sign-in', function (req, res) {
  
    res.redirect('link-accounts')
  })
  
  
  
  
  //Save your Companies House information
  router.post('/v1/link-accounts', function (req, res) {
  
    //Save information from their account
    if (req.session.data['link-chs-account'] === 'yes') {
        
      res.redirect('accounts-linked')
  }
  //do not save things on their account
  else{
  
      res.redirect('chs-home-signed-in')
  }
  
  })
  
  
  //We have saved your Companies House information
  
  
  // Companies House Service signed in 
  
  
  
  
  
  
  
  
  router.get('/officers', function (req, res) {
    // Render the confirm company page
    res.render('officers', {
      // To use the company data on that page use the following
      signin: req.session.signin,
      num: req.session.num
    })
  })
  
  router.get('/filing-history', function (req, res) {
    // Render the confirm company page
    res.render('filing-history', {
      // To use the company data on that page use the following
      signin: req.session.signin,
      num: req.session.num
    })
  })
  


  module.exports = router