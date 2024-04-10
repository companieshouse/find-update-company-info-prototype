//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//journey setting
router.post('/dev-ready/prototype-set-up', function (req, res) {

  //if they are filing take the user to Upload a document

  if (req.session.data['set-journey'].includes('filer')) {
       
    res.redirect('/dev-ready/upload-a-document')
  }
  else if (req.session.data['set-journey'].includes('private-beta-not-linked'))   {
       
    res.redirect('/dev-ready/chs-sign-in')
  }
  else if (req.session.data['set-journey'].includes('linked-account'))   {
       
    res.redirect('/dev-ready/create-or-sign-in')
  }
  else if (req.session.data['set-journey'].includes('different-email'))   {
       
    res.redirect('/dev-ready/chs-sign-in')
  }
  else if (req.session.data['set-journey'].includes('wrong-url'))   {
       
    res.redirect('/dev-ready/chs-sign-in')
  }
  else if (req.session.data['set-journey'].includes('public-beta-not-linked'))   {
       
    res.redirect('/dev-ready/choose-sign-in')
  }

 
})

//upload a document service start page goes directly to sign in page
router.post('/dev-ready/upload-a-document', function (req, res) {

  res.redirect('chs-sign-in')
})



router.post('/dev-ready/choose-sign-in', function (req, res) {

  /*
   * GOV.UK One Login
   */
  if (req.session.data['sign-in-using'] === 'OL') {

    res.redirect('/dev-ready/create-or-sign-in')

  }
  else if(req.session.data['sign-in-using'] === 'CHS') {

    res.redirect('/dev-ready/chs-sign-in-email')

  }


})


      /*
      * account not already linked -- removed for now
      

      if (req.session.data['set-journey'].includes('public-beta-not-linked')){

        res.redirect('/dev-ready/start-page')

      }
      else{

        res.redirect('dev-ready/create-or-sign-in')

      }*/
  

  /*
   * Companies House account
   */

  


//new email address page for CHS 
router.post('/dev-ready/chs-sign-in-email', function (req, res) {

  //If they have a GOV.UK One Login account
if (req.session.data['set-journey'].includes('public-beta-linked')) {
       
   res.redirect('/dev-ready/sign-in-using-one-login')
 }
 else{

  res.redirect('/dev-ready/chs-sign-in-password')

 }



})


//start page
router.post('/dev-ready/enter-email-address', function (req, res) {

   //If they have an existing chs account
   if (req.session.data['set-journey'] === 'existing-CHS') {
          
    res.redirect('chs-sign-in')
  }
  else if (req.session.data['set-journey'] === 'filing') {
        
    res.redirect('/dev-ready/start-page')
  }
  else if (req.session.data['set-journey'] === 'new-user') {
        
    res.redirect('create-or-sign-in')
  } 
  else if (req.session.data['set-journey'] === 'admin-user') {
        
    res.redirect('chs-sign-in')
  }

})



//start page
router.post('/dev-ready/start-page', function (req, res) {

  res.redirect('create-or-sign-in')
})



//One login sign in
router.post('/dev-ready/one-login-enter-password', function (req, res) {

    res.redirect('enter-code')
  })
  
  
  //sign in
  router.post('/dev-ready/enter-code', function (req, res) {


    if (req.session.data['set-journey'] === 'private-beta-not-linked') {
        
      res.redirect('/dev-ready/end-linking-private-beta')
    }
    else if (req.session.data['set-journey'] === 'different-email') {
        
      res.redirect('/dev-ready/sign-in-details-do-not-match')
    }
    else if (req.session.data['set-journey'] === 'wrong-url') {
        
      res.redirect('/dev-ready/stop-screen-use-url-sign-in')
    } 
    else{

      res.redirect('name')

    }


  })
  
  
  
  
  
  //One loginsign create - email address
  router.post('/dev-ready/create-enter-email', function (req, res) {
  
    res.redirect('create-check-your-email')
  })
  
  //One loginsign create - check email 
  router.post('/dev-ready/create-check-your-email', function (req, res) {
  
    res.redirect('create-enter-password')
  })
  
  
  //One loginsign create - check email 
  router.post('/dev-ready/create-enter-password', function (req, res) {
  
    res.redirect('create-choose-security-type')
  })
  
  //One loginsign create - check email 
  router.post('/dev-ready/create-choose-security-type', function (req, res) {
  
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
  router.post('/dev-ready/create-set-up-auth-app', function (req, res) {
  
    res.redirect('create-complete')
  })
  
  
  //One loginsign enter mobile number
  router.post('/dev-ready/create-enter-mobile-number', function (req, res) {
  
    res.redirect('create-check-your-phone')
  })
  
  //One loginsign enter mobile number
  router.post('/dev-ready/create-check-your-phone', function (req, res) {
  
    res.redirect('create-complete')
  })
  
  
  
  
  //One loginsign enter mobile number
  router.post('/dev-ready/create-enter-mobile-number', function (req, res) {
  
    res.redirect('create-check-your-phone')
  })
  
  
  
  //One loginsign create - check your email 
  
  

  
  //One loginsign create complete
  router.post('/dev-ready/create-complete', function (req, res) {
    if (req.session.data['set-journey'] === 'private-beta-not-linked') {
        
      res.redirect('/dev-ready/end-linking-private-beta')
    }
    else if (req.session.data['set-journey'] === 'different-email') {
        
      res.redirect('/dev-ready/sign-in-details-do-not-match')
    }
    else if (req.session.data['set-journey'] === 'wrong-url') {
        
      res.redirect('/dev-ready/stop-screen-use-url-sign-in')
    }
    else{

      res.redirect('name')
    }

  })

    
  //One loginsign create complete
  router.post('/dev-ready/name', function (req, res) {

    res.redirect('email-preferences')

})

  //One loginsign create complete
  router.post('/dev-ready/email-preferences', function (req, res) {

        
    res.redirect('end-linking')

  
})


  
  
  /*
    * Saving WebFiling account information
    */
  
  // Do you have an existing webfiling Companies House account?
  router.post('/dev-ready/existing-webfiling-account', function (req, res) {
  
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
  router.post('/dev-ready/webfiling-sign-in', function (req, res) {
  
    res.redirect('webfiling-mfa')
  
  })

   // MFA for WebFiling sign in 
   router.post('/dev-ready/webfiling-mfa', function (req, res) {
  
    res.redirect('existing-account')
  
  })
  
  //Save your Companies House information
  router.post('/dev-ready/link-webfiling-accounts', function (req, res) {
  
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
  router.post('/dev-ready/existing-account', function (req, res) {
  
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
  router.post('/dev-ready/chs-sign-in', function (req, res) {


    //upload a document - UR 
    if (req.session.data['set-journey'].includes('filer')) {
       
      res.redirect('/dev-ready/start-page')
    }
    else if (req.session.data['set-journey'].includes('different-email')) {

      res.redirect('/dev-ready/start-page')

    }
    else if (req.session.data['set-journey'] === 'wrong-url') {
        
      res.redirect('/dev-ready/start-page')
    }
     // Private beta first time logging in 
    else if (req.session.data['set-journey'].includes('private-beta-not-linked'))   {
         
      res.redirect('/dev-ready/private-beta')
    }

  })
  
  
  //Save your Companies House information
  router.post('/dev-ready/link-accounts', function (req, res) {
  
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
  router.post('/dev-ready/end-linking', function (req, res) {


    if (req.session.data['set-journey'].includes('filer')) {
       
      res.redirect('/dev-ready/company-lookup')
    }
    else{

      res.redirect('chs-home-signed-in')

    }
        

  

  })
  
  
  //accounts are linked ***********
  //res.redirect('existing-webfiling-account')
  
  //We have saved your Companies House information
  
  
  // Companies House Service signed in 
  //*******chs-home-signed-in*****
  
  
  
  /*
  * Your companies
  */

    /*
    * Add a company
    */
    router.post('/dev-ready/add-a-company', function (req, res) {
  
      res.redirect('confirm-company-details')
    })
    

    /*
     * Confirm company details
    */
    router.post('/dev-ready/confirm-company-details', function (req, res) {
  
      res.redirect('authentication-code')
    })

      /*
       * authentication code 
       */ 
      router.post('/dev-ready/authentication-code', function (req, res) {
    
        res.redirect('confirmation-company-added')
      })


      // Manage account

      /*
       * Manage account page
       */ 
         router.post('/dev-ready/chs-one-login-settings', function (req, res) {

          

        })




       /*
       * Updating name on account
       */ 
       router.post('/dev-ready/name-account', function (req, res) {

        req.session.data['updateNameChangesMade'] = true;
        res.redirect('chs-one-login-settings')
      })


      /*
       * Updating CH email preferences
       */ 
      router.post('/dev-ready/email-preferences-ch', function (req, res) {

        req.session.data['updateNameChangesMade'] = false;
        req.session.data['updateEmailPreferencesChangesMade'] = true;

      
        res.redirect('chs-one-login-settings')
      })


      /*
       * Updating UR email preferences 
       */ 
      router.post('/dev-ready/email-preferences-ur', function (req, res) {

        req.session.data['updateNameChangesMade'] = false;
        req.session.data['updateEmailPreferencesChangesMade'] = true;
    
        res.redirect('chs-one-login-settings')
      })


      
  
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