'use strict'

let Widgets = require('./services/Widgets')()
let Gadgets = require('./services/Gadgets')()
let Things = require('./services/Things')()
let express = require('express')
let app = express()

console.log('Starting Server...')

// process request (promises)
app.get('/', function (req, res) {
  Widgets.createWidgets(20)
    .then(function (widgets) {
      return Gadgets.createGadgetsFromWidgets(widgets)
    }).then(function (gadgets) {
      return Things.createThingsFromGadgets(gadgets)
    }).then(function (things) {
      res.set('Content-Type', 'application/json')
      res.send(JSON.stringify(things))
    })
})

console.log('Listening on 127.0.0.1:3000')
app.listen(3000)
