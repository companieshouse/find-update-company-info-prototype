//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//journey setting
router.get('/v4/user-journey', function (req, res) {

     //If they have an existing chs account
    if (req.session.data['set-journey'] === 'existing-CHS') {
          
      res.redirect('chs-home')
    }
    else if (req.session.data['set-journey'] === 'filing') {
          
      res.redirect('/v4/company-overview-gdst')
    }
    else if (req.session.data['set-journey'] === 'new-user') {
          
      res.redirect('/v4/company-overview-gdst')
    } 
    else {
          
      res.redirect('chs-home')
    }

})

//start page
router.post('/v4/enter-email-address', function (req, res) {

   //If they have an existing chs account
   if (req.session.data['set-journey'] === 'existing-CHS') {
          
    res.redirect('chs-sign-in')
  }
  else if (req.session.data['set-journey'] === 'filing') {
        
    res.redirect('/v4/start-page')
  }
  else if (req.session.data['set-journey'] === 'new-user') {
        
    res.redirect('create-or-sign-in')
  } 
  else if (req.session.data['set-journey'] === 'admin-user') {
        
    res.redirect('chs-sign-in')
  }

})



//start page
router.post('/v4/start-page', function (req, res) {

  res.redirect('create-or-sign-in')
})



//One login sign in
router.post('/v4/one-login-enter-password', function (req, res) {

    res.redirect('enter-code')
  })
  
  
  //sign in
  router.post('/v4/enter-code', function (req, res) {

      res.redirect('name')


  })
  
  
  
  
  
  //One loginsign create - email address
  router.post('/v4/create-enter-email', function (req, res) {
  
    res.redirect('create-check-your-email')
  })
  
  //One loginsign create - check email 
  router.post('/v4/create-check-your-email', function (req, res) {
  
    res.redirect('create-enter-password')
  })
  
  
  //One loginsign create - check email 
  router.post('/v4/create-enter-password', function (req, res) {
  
    res.redirect('create-choose-security-type')
  })
  
  //One loginsign create - check email 
  router.post('/v4/create-choose-security-type', function (req, res) {
  
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
  router.post('/v4/create-set-up-auth-app', function (req, res) {
  
    res.redirect('create-complete')
  })
  
  
  //One loginsign enter mobile number
  router.post('/v4/create-enter-mobile-number', function (req, res) {
  
    res.redirect('create-check-your-phone')
  })
  
  //One loginsign enter mobile number
  router.post('/v4/create-check-your-phone', function (req, res) {
  
    res.redirect('create-complete')
  })
  
  
  
  
  //One loginsign enter mobile number
  router.post('/v4/create-enter-mobile-number', function (req, res) {
  
    res.redirect('create-check-your-phone')
  })
  
  
  
  //One loginsign create - check your email 
  
  

  
  //One loginsign create complete
  router.post('/v4/create-complete', function (req, res) {

      res.redirect('name')
  
  })

    
  //One loginsign create complete
  router.post('/v4/name', function (req, res) {

    res.redirect('email-preferences')

})

  //One loginsign create complete
  router.post('/v4/email-preferences', function (req, res) {


  if (req.session.data['set-journey'] === 'new-user') {
        
    res.redirect('chs-home-signed-in')
  } 
  else {
        
    res.redirect('end-linking')
  }

})


  
  
  /*
    * Saving WebFiling account information
    */
  
  // Do you have an existing webfiling Companies House account?
  router.post('/v4/existing-webfiling-account', function (req, res) {
  
    //If they have an existing webfiling account
    if (req.session.data['existing-webfiling-account'] === 'yes') {
        
      res.redirect('webfiling-sign-in')
  }
  else if (req.session.data['existing-webfiling-account'] === 'no') {
        
    res.redirect('existing-account')
  }
  else {
  
    
  }
  
  })
  
  // WebFiling sign in 
  router.post('/v4/webfiling-sign-in', function (req, res) {
  
    res.redirect('webfiling-mfa')
  
  })

   // MFA for WebFiling sign in 
   router.post('/v4/webfiling-mfa', function (req, res) {
  
    res.redirect('existing-account')
  
  })
  
  //Save your Companies House information
  router.post('/v4/link-webfiling-accounts', function (req, res) {
  
    //Save information from their account
    if (req.session.data['link-webfiling-account'] === 'yes') {
        
      res.redirect('existing-account') 
  }
  //do not save things on their account
  else{
  
      res.redirect('existing-account')
  }
  
  })
  
  
   /*
    * Saving CHS account information
    */
  
  // Do you have an existing Companies House account?
  router.post('/v4/existing-account', function (req, res) {
  
    //If they have an existing chs account
    if (req.session.data['existing-chs-account'] === 'yes') {
          
        res.redirect('chs-sign-in')
    }
    // Otherwise take them to a stop screen
    else if ((req.session.data['existing-chs-account'] === 'no') && (req.session.data['existing-webfiling-account'] === 'no'))  {
          
      res.redirect('chs-home-signed-in')
  }
    
    //** if no CHS and No Webfiling take them directly to service */
    
    
    
    else{
  
        res.redirect('end-linking')
    }
    
  })
  
  // Companies House sign in 
  router.post('/v4/chs-sign-in', function (req, res) {
  
    res.redirect('chs-home-signed-in')
  })
  
  
  //Save your Companies House information
  router.post('/v4/link-accounts', function (req, res) {
  
    //Save information from their account
    if (req.session.data['link-chs-account'] === 'yes') {
        
      res.redirect('end-linking') 
  }
  //do not save things on their account
  else{
  
      res.redirect('end-linking')
  }
  
  })
  
     // Companies House sign in 
  router.post('/v4/end-linking', function (req, res) {


  if (req.session.data['set-journey'] === 'filing') {
        
    res.redirect('/v4/company-overview-gdst-signed-in')
  }
 
  else {
        
    res.redirect('chs-home-signed-in')
  }

  })
  
  
  //accounts are linked ***********
  //res.redirect('existing-webfiling-account')
  
  //We have saved your Companies House information
  
  
  // Companies House Service signed in 
  //*******chs-home-signed-in*****
  
  
  
  
  
  
  
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
  
  router.get('/single', function (req, res) {
    
    var errors = []
      var num = req.query.num.trim()
      var apiKey = process.env.CHS_API_KEY
  
        // Require the request node module, you may need to install this if it's a new prototype
        var request = require('request')
        // Construct the API request
        // This will only pull back the company data found here: https://developer.company-information.service.gov.uk/api/docs/company/company_number/companyProfile-resource.html
        
        var options = {
          'method': 'GET',
          'url': 'https://api.company-information.service.gov.uk/company/' + num + '',
          'headers': {
            'Authorization': apiKey
          },
          'json': true
        }
        request(options, function (error, response) {
          if (error) throw new Error(error)
          // With the response put that as a session variable so it can be used across all pages
          req.session.num = response.body
          // Redirect to the confirm company page
          res.render('single', {
            // To use the company data on that page use the following
            signin: req.session.signin,
            num: req.session.num
          })
        })
  
    // Render the confirm company page
  
  })



module.exports = router