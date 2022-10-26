
const express = require('express')
const router = express.Router()
const {shortUrl,redirectToSource}= require('../controllers/urlController')


router.get('/testme',(req,res)=>{
    res.json('api🎇🎇')
})



router.post('/url/shorten',shortUrl)

router.get('/:urlCode',redirectToSource)

module.exports = router