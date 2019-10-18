const express = require('express')

const router = express.Router()

router.get('/',function (req,res) {
    res.render('index.html')
})

router.get('/add',function (req,res) {
    res.render('add.html')
})





module.exports = router

