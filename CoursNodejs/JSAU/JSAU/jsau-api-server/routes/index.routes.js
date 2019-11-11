

const express = require('express')
const router = new express.Router()

router.use('/jsauapi/v1/news', require('../routes/post.routes'))

module.exports = router