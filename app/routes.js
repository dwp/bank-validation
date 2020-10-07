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

module.exports = router
