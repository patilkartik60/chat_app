const express = require('express')
const router = express.Router()

const {getChats,saveChats} = require('../controller/chat_con');

// define the home page route
router.get('/getChats', getChats)

router.post('/saveChats', saveChats)

module.exports = router