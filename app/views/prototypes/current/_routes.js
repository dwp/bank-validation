const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line


//Redirecting to different notification messages based on sort codes

router.post('/current/find-account', function (req, res) {

  let sortCode = req.session.data['sort-code1']

  if (sortCode === '112233') {
    res.redirect('/02/notifications/account-number-match-error')
  }

})

module.exports = router
