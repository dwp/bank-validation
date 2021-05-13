const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

// Notification message routing depending on sort code that's entered

router.post('/find-account', function (req, res) {

  let sortCode = req.session.data['sort-code']

  if (sortCode === '112233') {
    res.redirect('./notifications/account-number-match-error')
  }

  else if (sortCode === '223344') {
    res.redirect('./notifications/branch-due-to-close-error')
  }

  else if (sortCode === '111111') {
    res.redirect('./notifications/success')
  }

  else if (sortCode === '222222') {
    res.redirect('./notifications/success-no-dd')
  }

  else if (sortCode === '333333') {
    res.redirect('./notifications/success-no-fp')
  }

  else if (sortCode === '444444') {
    res.redirect('./notifications/roll-number-format')
  }

  else if (sortCode === '555555') {
    res.redirect('./notifications/sort-code-error')
  }

  else if (sortCode === '887766') {
    res.redirect('./notifications/success-multiple-addresses')
  }

  else if (sortCode === '400530') {
    res.redirect('./notifications/success-multiple-addresses-table')
  }

  else if (sortCode === '334455') {
    res.redirect('./input-validation/incorrect-roll-number')
  }

  else if (sortCode === '4455667') {
    res.redirect('./input-validation/sort-code-length')
  }

  else if (sortCode === '556677') {
    res.redirect('./input-validation/account-number-length')
  }

  else if (sortCode === '998877') {
    res.redirect('./input-validation/find-an-account-roll-validation')
  }

})

router.post('./input-validation/find-account', function (req, res) {

  let sortCode = req.session.data['sort-code']

  if (sortCode === '334455') {
    res.redirect('incorrect-roll-number')
  }

  else if (sortCode === '4455667') {
    res.redirect('sort-code-length')
  }

  else if (sortCode === '556677') {
    res.redirect('account-number-length')
  }

  else if (sortCode === '998877') {
    res.redirect('find-an-account-roll-validation')
  }

})

router.post('/find-account', function (req, res) {
  let sortCode = req.session.data['sort-code']
  if (sortCode === '998877') {
    res.redirect('find-an-account-roll-validation')
  }
})

router.post('/find-account-02-roll-number-fraud', function (req, res) {

  let rollNumber = req.session.data['roll-number2']

  if (rollNumber === 'AK12345678') {
    res.redirect('notifications/roll-number-success')
  }

})


module.exports = router
