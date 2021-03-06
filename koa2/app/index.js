"use strict";

let Widgets = require('./services/Widgets')()
let Gadgets = require('./services/Gadgets')()
let Things = require('./services/Things')()
let Koa = require('koa')
let app = new Koa()

console.log('Starting Server...')

// process request (async/await)
app.use(async function (ctx, next) {
  let widgets = await Widgets.createWidgets(20)
  let gadgets = await Gadgets.createGadgetsFromWidgets(widgets)
  let things = await Things.createThingsFromGadgets(gadgets)
  ctx.set('Content-Type', 'application/json')
  ctx.body = JSON.stringify({
    things: things
  })
})

console.log('Listening on 127.0.0.1:3000')
app.listen(3000)
