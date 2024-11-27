//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


/*
* Choose a public Beta journey
*/
router.post('/public-beta-v4/prototype-set-up', function (req, res) {

  if (req.session.data['set-journey'].includes('public-8'))   {
        
    res.redirect('/public-beta-v4/chs-home')
  }
  else if (req.session.data['set-journey'].includes('public-9'))   {
        
    res.redirect('/public-beta-v4/chs-home')
  }
  else{

    res.redirect('/public-beta-v4/choose-sign-in')

  }

})




/* if (req.session.data['set-journey'].includes('public-1'))   {
        
  res.redirect('/dev-ready-v2/start-page')
}
else if (req.session.data['set-journey'].includes('public-2'))   {
  
  res.redirect('/dev-ready-v2/start-page')
}
else if (req.session.data['set-journey'].includes('public-3'))   {
  
  res.redirect('/dev-ready-v2/start-page')
}
else if (req.session.data['set-journey'].includes('public-4'))   {
  
  res.redirect('/dev-ready-v2/start-page')
}
else if (req.session.data['set-journey'].includes('public-5'))   {
  
  res.redirect('/dev-ready-v2/start-page')
}

else if (req.session.data['set-journey'].includes('public-6'))   {
  
  res.redirect('/dev-ready-v2/start-page')
}
else if (req.session.data['set-journey'].includes('public-7'))   {
  
  res.redirect('/dev-ready-v2/start-page')
}
else if (req.session.data['set-journey'].includes('public-8'))   {
  
  res.redirect('/dev-ready-v2/start-page')
}
else if (req.session.data['set-journey'].includes('public-9'))   {
  
  res.redirect('/dev-ready-v2/start-page')
}
else if (req.session.data['set-journey'].includes('public-10'))   {
  
  res.redirect('/dev-ready-v2/start-page')
}
else if (req.session.data['set-journey'].includes('public-11'))   {
  
  res.redirect('/dev-ready-v2/start-page')
} */





/*
 * Sign in to Companies House - ** NEW V2 **
 */
 router.post('/public-beta-v4/choose-sign-in', function (req, res) {

      /*
      * Existing Companies House account
      */
      if (req.session.data['set-journey'].includes('public-11'))   {
            
       //do nothing 
      }
      /*
       * Do nothing - a GOV.UK One Login journey
       */
      else if (req.session.data['set-journey'].includes('public-1'))   {
            


      }
      /*
       * You already have a GOV.UK One Login 
       */ 
      else if (req.session.data['set-journey'].includes('public-2'))   {
            
        
        res.redirect('/public-beta-v4/sign-in-using-one-login')

      }
      /*
       * Do nothing - a GOV.UK One Login journey
       */
      else if (req.session.data['set-journey'].includes('public-3'))   {
            
       
      }
      else if (req.session.data['set-journey'].includes('public-5'))   {
            
       // do nothing
      }

      /*
       * CHS sign in - password
       */
        else if (req.session.data['set-journey'].includes('public-7'))   {

          res.redirect('/public-beta-v4/chs-sign-in-password')
       
        }
      /*
       * CHS sign in - password
       */
        else if (req.session.data['set-journey'].includes('public-8'))   {

          res.redirect('/public-beta-v4/chs-sign-in-password')
       
        }
        /*
       * CHS sign in - password
       */
        else if (req.session.data['set-journey'].includes('public-9'))   {

          res.redirect('/public-beta-v4/chs-sign-in-password')
       
        }
        
      


})

/*
 * Sign in to Companies House
 */

router.post('/public-beta-v4/chs-sign-in-password', function (req, res) {

    if (req.session.data['set-journey'].includes('public-11'))   {
      
      res.redirect('/public-beta-v4/your-details-public-beta')
    }
    else if (req.session.data['set-journey'].includes('public-7'))   {
      
      res.redirect('/public-beta-v4/chs-home-signed-in')
    }
    else if (req.session.data['set-journey'].includes('public-8'))   {
      
      res.redirect('/public-beta-v4/chs-home-signed-in')
    }
    else if (req.session.data['set-journey'].includes('public-9'))   {
      
      res.redirect('/public-beta-v4/chs-home-signed-in')
    }



    
  //    res.redirect('/dev-ready-v2/start-page')
   


})

/*
 * Create a GOV.UK One Login or sign in
 */

router.post('/public-beta-v4/create-or-sign-in', function (req, res) {

  if (req.session.data['set-journey'].includes('public-1'))   {
          
    res.redirect('/public-beta-v4/start-page')
  }
  else if (req.session.data['set-journey'].includes('public-2'))   {
    
    res.redirect('/public-beta-v4/start-page')
  }
  else if (req.session.data['set-journey'].includes('public-3'))   {
    
    res.redirect('/public-beta-v4/start-page')
  }
  else if (req.session.data['set-journey'].includes('public-4'))   {
    
    res.redirect('/public-beta-v4/start-page')
  }
  else if (req.session.data['set-journey'].includes('public-5'))   {
    
    res.redirect('/public-beta-v4/start-page')
  }

  else if (req.session.data['set-journey'].includes('public-6'))   {
    
    res.redirect('/public-beta-v4/start-page')
  }
  else if (req.session.data['set-journey'].includes('public-7'))   {
    
    res.redirect('/public-beta-v4/start-page')
  }
  else if (req.session.data['set-journey'].includes('public-8'))   {
    
    res.redirect('/public-beta-v4/start-page')
  }
  else if (req.session.data['set-journey'].includes('public-9'))   {
    
    res.redirect('/public-beta-v4/start-page')
  }
  else if (req.session.data['set-journey'].includes('public-10'))   {
    
    res.redirect('/public-beta-v4/start-page')
  }
  else if (req.session.data['set-journey'].includes('public-11'))   {
    
    res.redirect('/public-beta-v4/start-page')
  } 


})















//start page
router.post('/public-beta-v4/start-page', function (req, res) {

  res.redirect('create-or-sign-in')
})



//One login sign in
router.post('/public-beta-v4/one-login-enter-password', function (req, res) {

    res.redirect('enter-code')
  })
  
  
  //sign in
  router.post('/public-beta-v4/enter-code', function (req, res) {

    if (req.session.data['set-journey'].includes('public-11')) 
    {

      res.redirect('/public-beta-v4/link-to-existing-chs-account') 
      
    }
    else if (req.session.data['set-journey'].includes('public-1'))   {
          
      res.redirect('/public-beta-v4/company-lookup')
    }
    else if (req.session.data['set-journey'].includes('public-2'))   {
      
      res.redirect('/public-beta-v4/company-lookup') 

    }
    else if (req.session.data['set-journey'].includes('public-3-4'))      
    {
            
      res.redirect('/public-beta-v4/one-login-email-address-updated') 
       
    }
    else if (req.session.data['set-journey'].includes('public-5'))      
    {
              
      res.redirect('/public-beta-v4/one-login-email-matches-different-chs-account') 
         
    }
    else if (req.session.data['set-journey'].includes('public-8'))      
    {
              
      res.redirect('/public-beta-v4/end-linking') 
         
    }
    else if (req.session.data['set-journey'].includes('public-9'))      
    {
                
        res.redirect('/public-beta-v4/email-address-do-not-match') 
           
    }

    

  })
  
  
  
  
  
  //One loginsign create - email address
  router.post('/public-beta-v4/create-enter-email', function (req, res) {

    if (req.session.data['set-journey'] === 'public-beta-already-linked') {
        
      res.redirect('/public-beta-v4/you-have-a-login')
    }
    else{

  
      res.redirect('create-check-your-email')
    }


  })
  
  //One loginsign create - check email 
  router.post('/public-beta-v4/create-check-your-email', function (req, res) {
  
    res.redirect('create-enter-password')
  })
  
  
  //One loginsign create - check email 
  router.post('/public-beta-v4/create-enter-password', function (req, res) {
  
    res.redirect('create-choose-security-type')
  })
  
  //One loginsign create - check email 
  router.post('/public-beta-v4/create-choose-security-type', function (req, res) {
  
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
  router.post('/public-beta-v4/create-set-up-auth-app', function (req, res) {
  
    res.redirect('create-complete')
  })
  
  
  //One loginsign enter mobile number
  router.post('/public-beta-v4/create-enter-mobile-number', function (req, res) {
  
    res.redirect('create-check-your-phone')
  })
  
  /*
   * Create journey - Check your phone
   */
  router.post('/public-beta-v4/create-check-your-phone', function (req, res) {

  
    res.redirect('create-complete')
  })






  
  
  
  
  //One loginsign enter mobile number
  router.post('/public-beta-v4/create-enter-mobile-number', function (req, res) {
  
    res.redirect('create-check-your-phone')
  })
  
  
  
  //One loginsign create - check your email 
  
  
/*
* You've created your GOV.UK One Login
*/
  
  router.post('/public-beta-v4/create-complete', function (req, res) {
    if (req.session.data['set-journey'] === 'public-1') {
        
      res.redirect('/public-beta-v4/company-lookup')
    }
    else if (req.session.data['set-journey'] === 'public-2') {
        
      res.redirect('/public-beta-v4/company-lookup')
    }
    else if (req.session.data['set-journey'] === 'public-3-4') {
        
      res.redirect('/public-beta-v4/one-login-email-address-updated')
    }
    else if (req.session.data['set-journey'] === 'public-8') {
        
      res.redirect('/public-beta-v4/end-linking')
    }
    else if (req.session.data['set-journey'] === 'public-9') {
        
      res.redirect('/public-beta-v4/email-address-do-not-match')
    }
    else if (req.session.data['set-journey'] === 'public-11') {
        
      res.redirect('/public-beta-v4/link-to-existing-chs-account')
    
    }
    
    
    
  })


/*
* You've created your GOV.UK One Login
*/
  
router.post('/public-beta-v4/one-login-email-address-updated', function (req, res) {
 
  res.redirect('/public-beta-v4/company-lookup')

   /*  if (req.session.data['changeOfEmail'] === 'yes') {
          
      res.redirect('chs-email-address-updated')
    }
    else if (req.session.data['changeOfEmail'] === 'no') {
          
      res.redirect('change-email-address-in-one-login')

    } */


})
    
  // Connecting accounts after the user enters their CHS password
  router.post('/public-beta-v4/link-to-existing-chs-account', function (req, res) {

    res.redirect('end-linking-public-11')

})



    
  //One loginsign create complete
  router.post('/public-beta-v4/name', function (req, res) {

    res.redirect('email-preferences')

})

  //One loginsign create complete
  router.post('/public-beta-v4/email-preferences', function (req, res) {

        
    res.redirect('end-linking')

  
})

  //One loginsign create complete
  router.post('/public-beta-v4/email-address-do-not-match', function (req, res) {

     //If they have an existing webfiling account
     if (req.session.data['email-do-not-match'] === 'yes') {
        
      res.redirect('change-email-address')
      }
      else if (req.session.data['email-do-not-match'] === 'no') {
            
        res.redirect('create-or-sign-in-9')
      }

  
})
  
  
  /*
    * Saving WebFiling account information
    */
  
  // Do you have an existing webfiling Companies House account?
  router.post('/public-beta-v4/existing-webfiling-account', function (req, res) {
  
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
  router.post('/public-beta-v4/webfiling-sign-in', function (req, res) {
  
    res.redirect('webfiling-mfa')
  
  })

   // MFA for WebFiling sign in 
   router.post('/public-beta-v4/webfiling-mfa', function (req, res) {
  
    res.redirect('existing-account')
  
  })
  
  //Save your Companies House information
  router.post('/public-beta-v4/link-webfiling-accounts', function (req, res) {
  
    //Save information from their account
    if (req.session.data['link-webfiling-account'] === 'yes') {
        
      res.redirect('existing-account') 
  }
  //do not save things on their account
  else{
  
      res.redirect('existing-account')
  }
  
  })
  
  

  
     // Companies House sign in 
  router.post('/public-beta-v4/end-linking', function (req, res) {


    if (req.session.data['set-journey'] === 'public-8') {
        
      res.redirect('/public-beta-v4/chs-one-login-settings')
    }
    else{

      res.redirect('/public-beta-v4/company-lookup')
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
    router.post('/public-beta-v4/add-a-company', function (req, res) {
  
      res.redirect('confirm-company-details')
    })
    

    /*
     * Confirm company details
    */
    router.post('/public-beta-v4/confirm-company-details', function (req, res) {
  
      res.redirect('authentication-code')
    })

      /*
       * authentication code 
       */ 
      router.post('/public-beta-v4/authentication-code', function (req, res) {
    
        res.redirect('confirmation-company-added')
      })


      // Manage account

      /*
       * Manage account page
       */ 
         router.post('/public-beta-v4/chs-one-login-settings', function (req, res) {

          

        })




       /*
       * Updating name on account
       */ 
       router.post('/public-beta-v4/name-account', function (req, res) {

        req.session.data['updateNameChangesMade'] = true;
        res.redirect('chs-one-login-settings')
      })


      /*
       * Updating CH email preferences
       */ 
      router.post('/public-beta-v4/email-preferences-ch', function (req, res) {

        req.session.data['updateNameChangesMade'] = false;
        req.session.data['updateEmailPreferencesChangesMade'] = true;

      
        res.redirect('chs-one-login-settings')
      })


      /*
       * Updating UR email preferences 
       */ 
      router.post('/public-beta-v4/email-preferences-ur', function (req, res) {

        req.session.data['updateNameChangesMade'] = false;
        req.session.data['updateEmailPreferencesChangesMade'] = true;
    
        res.redirect('chs-one-login-settings')
      })



      /*
       * CHS - change email address
       */ 
      router.post('/public-beta-v4/change-email-address', function (req, res) {

        res.redirect('email-address-changed')
      })



      /*
       * CHS - change email address
       */ 
           router.post('/public-beta-v4/one-login-sign-in', function (req, res) {

            res.redirect('one-login-enter-password')
          })
    
    
      /*
       * CHS - change email address - 9
       */ 
           router.post('/public-beta-v4/one-login-sign-in-9', function (req, res) {

            res.redirect('one-login-enter-password-9')
          })
    
           /*
       * CHS - change password - 9
       */ 
           router.post('/public-beta-v4/one-login-enter-password-9', function (req, res) {

            res.redirect('enter-code-9')
          })

             /*
       * CHS - change password - 9
       */ 
             router.post('/public-beta-v4/enter-code-9', function (req, res) {

              res.redirect('your-services-one-login')
            })
  
   /*
       * One login change email address 
       */ 
   router.post('/public-beta-v4/security-one-login-email', function (req, res) {

    res.redirect('security-one-login-check-email')
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