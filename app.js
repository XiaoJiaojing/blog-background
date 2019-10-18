const express = require('express')

const path = require('path')

const url = require('url')

const router = require('./router')

var app = express()

app.use('/public/',express.static(path.join(__dirname,'/public/')))

app.use('/node_modules',express.static(path.join(__dirname,'/node_modules')))

app.engine('html',require('express-art-template'))


app.use(router)

app.listen(3000,function () {
    console.log('后台管理服务开启了...')
})