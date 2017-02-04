const express = require('express')
const mock = require('./fakedata.js')
const path = require('path')
const app = express()
app.use(function (req,res,next) {
    console.log(req.url)
    next()
})

app.use(express.static(path.join(__dirname,'public')))
// app.get('/index', function (req, res) {
//     // fs.readFile();   
//     fs.createReadStream('./public/index.html').pipe(res)
// })
app.get('/alldata' ,function (req, res) {
  res.end(JSON.stringify(mock.alldata))
})
app.get('/gamedata', function (req, res) {
    res.end(JSON.stringify(mock.gamedata))
})
app.get('/gamedata2', function (req, res) {
    res.end(JSON.stringify(mock.gamedata2))
})
app.get('/award', function (req, res) {
    res.end(JSON.stringify(mock.award))
})
app.get('/userInfo', function (req, res) {
    res.end(JSON.stringify(mock.userInfo))
})
app.get('/userInfoLogin', function (req, res) {
    res.end(JSON.stringify(mock.userInfoLogin))
})
app.get('/sign', function (req, res) {
    res.end(JSON.stringify(mock.sign))
})
app.get('/lastAward', function (req, res) {
    res.end(JSON.stringify(mock.lastAward))
})
app.get('/lottery', function (req, res) {
    let num = Math.random()
    if (num > 0.9)  res.end(JSON.stringify(mock.phone))
    else if (num > 0.5) res.end(JSON.stringify(mock.icon))
    else res.end(JSON.stringify(mock.notAward))
})
app.get('/saveinfo', function (req, res) {
    if (Math.random()>0.8)  res.end(JSON.stringify(mock.saveerr))
    else res.end(JSON.stringify(mock.savesuc))
})
app.get('/skate', function (req, res) {
    res.end(JSON.stringify(mock.skate))
})
const listener = app.listen(3000, function () {
    console.log('server is running in 3000 port !')
})
