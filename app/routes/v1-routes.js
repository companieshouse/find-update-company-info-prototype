const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


//start page
router.post('/v1/start-page', function (req, res) {
  res.redirect('create-or-sign-in')
})

//One login create or sign in 



//One loginsign in email address

//One loginsign in password


//One loginsign in check phone 

// Do you have an existing Companies House account?

// Companies House sign in 

//Save your Companies House information


//We have saved your Companies House information


// Companies House Service signed in 




router.post('/sign-in', function (req, res) {
    req.session.signin = true;

    req.session.data['signin'] = true;
    res.redirect('/')
})

router.get('/sign-in', function (req, res) {
    res.render('sign-in', {
      signin: true
    })
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




