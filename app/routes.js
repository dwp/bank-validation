const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.use('/fraud', require('./views/fraud/index'));
router.use('/fraud-vertical', require('./views/fraud-vertical/index'));
router.use('/03', require('./views/03/index'));

module.exports = router
