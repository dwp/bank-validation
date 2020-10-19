const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Start folder specific routes

router.use('/sprint-1', require('./views/prototypes/01/_routes'));

// current sprint, remember to add older sprint when adding a new folder!
router.use('/current', require('./views/prototypes/current/_routes'));

// Notification message routing depending on sort code that's entered - vertical inputs

router.post('/find-account', function (req, res) {

  let sortCode = req.session.data['sort-code1']

  if (sortCode === '112233') {
    res.redirect('prototypes/current/02/notifications/account-number-match-error')
  }

  if (sortCode === '223344') {
    res.redirect('prototypes/current/02/notifications/branch-due-to-close-error')
  }

  if (sortCode === '111111') {
    res.redirect('prototypes/current/02/notifications/success')
  }

})

// Notification message routing depending on sort code that's entered - horizontal inputs

router.post('/find-account-01', function (req, res) {

  let sortCode = req.session.data['sortcode']

  if (sortCode === '112233') {
    res.redirect('prototypes/current/01/notifications/account-number-match-error')
  }

  if (sortCode === '223344') {
    res.redirect('prototypes/current/01/notifications/branch-due-to-close-error')
  }

  if (sortCode === '111111') {
    res.redirect('prototypes/current/01/notifications/success')
  }

})

// Notification message routing depending on sort code that's entered - horizontal inputs

router.post('/find-account-01-results', function (req, res) {

  let sortCode = req.session.data['reference']

  if (sortCode === '112233') {
    res.redirect('prototypes/current/01/notifications/account-number-match-error')
  }

  if (sortCode === '223344') {
    res.redirect('prototypes/current/01/notifications/branch-due-to-close-error')
  }

  if (sortCode === '111111') {
    res.redirect('prototypes/current/01/notifications/success')
  }

})


// FRAUD TESTS 01 - Notification message routing depending on sort code that's entered - horizontal inputs

router.post('/find-account-01-results-fraud', function (req, res) {

  let sortCode = req.session.data['sort-code-fraud-1']

  if (sortCode === '112233') {
    res.redirect('prototypes/usability-tests/fraud/01/notifications/account-number-match-error')
  }

  if (sortCode === '223344') {
    res.redirect('prototypes/usability-tests/fraud/01/notifications/branch-due-to-close-error')
  }

  if (sortCode === '111111') {
    res.redirect('prototypes/usability-tests/fraud/01/notifications/success')
  }

  if (sortCode === '998877') {
    res.redirect('prototypes/usability-tests/fraud/01/find-an-account-roll-validation')
  }

})

router.post('/find-account-01-roll-number-fraud', function (req, res) {

  let rollNumber = req.session.data['roll-number1']

  if (rollNumber === 'AK12345678') {
    res.redirect('prototypes/usability-tests/fraud/01/notifications/roll-number-success')
  }

})

// FRAUD TESTS 02 - Notification message routing depending on sort code that's entered - vertical inputs

router.post('/find-account-02-results-fraud', function (req, res) {

  let sortCode = req.session.data['sort-code2']

  if (sortCode === '112233') {
    res.redirect('prototypes/usability-tests/fraud/02/notifications/account-number-match-error')
  }

  if (sortCode === '223344') {
    res.redirect('prototypes/usability-tests/fraud/02/notifications/branch-due-to-close-error')
  }

  if (sortCode === '111111') {
    res.redirect('prototypes/usability-tests/fraud/02/notifications/success')
  }

  if (sortCode === '998877') {
    res.redirect('prototypes/usability-tests/fraud/02/find-an-account-roll-validation')
  }

})

router.post('/find-account-02-roll-number-fraud', function (req, res) {

  let rollNumber = req.session.data['roll-number2']

  if (rollNumber === 'AK12345678') {
    res.redirect('prototypes/usability-tests/fraud/02/notifications/roll-number-success')
  }

})

// BLS TESTS - Notification message routing depending on sort code that's entered - horizontal inputs

router.post('/find-account-01-results-bls', function (req, res) {

  let sortCode = req.session.data['sort-code5']

  if (sortCode === '112233') {
    res.redirect('prototypes/usability-tests/bls/01/notifications/account-number-match-error')
  }

  if (sortCode === '223344') {
    res.redirect('prototypes/usability-tests/bls/01/notifications/branch-due-to-close-error')
  }

  if (sortCode === '111111') {
    res.redirect('prototypes/usability-tests/bls/01/notifications/success')
  }

  if (sortCode === '998877') {
    res.redirect('prototypes/usability-tests/bls/01/find-an-account-roll-validation')
  }

})

// BLS TESTS - Notification message routing depending on sort code that's entered - horizontal inputs

router.post('/find-account-02-results-bls', function (req, res) {

  let sortCode = req.session.data['sort-code4']

  if (sortCode === '112233') {
    res.redirect('prototypes/usability-tests/bls/02/notifications/account-number-match-error')
  }

  if (sortCode === '223344') {
    res.redirect('prototypes/usability-tests/bls/02/notifications/branch-due-to-close-error')
  }

  if (sortCode === '111111') {
    res.redirect('prototypes/usability-tests/bls/02/notifications/success')
  }

})

module.exports = router
