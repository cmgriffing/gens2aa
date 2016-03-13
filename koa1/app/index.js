"use strict";

let Widgets = require('./services/Widgets')();
let Gadgets = require('./services/Gadgets')();
let Things = require('./services/Things')();
let koa = require('koa');
let app = koa();

console.log('Starting Server...');


// process response (promises)
app.use(function *(next){
  let ctx = this;
  yield Widgets.createWidgets(20)
    .then(function(widgets) {
      return Gadgets.createGadgetsFromWidgets(widgets);
    }).then(function(gadgets) {
      return Things.createThingsFromGadgets(gadgets);
    }).then(function(things) {
      ctx.things = things;
    });
  yield next;
});

// process response (generators)
// app.use(function *(next) {
//   let ctx = this;
//   let widgets = yield Widgets.createWidgets(20);
//   let gadgets = yield Gadgets.createGadgetsFromWidgets(widgets);
//   let things = yield Things.createThingsFromGadgets(gadgets);
//   ctx.things = things;
//   yield next;
// });

// output response
app.use(function *(next) {
  let ctx = this;
  ctx.set('Content-Type', 'application/json');
  ctx.body = JSON.stringify({
    things: ctx.things
  });
});

console.log('Listening on 127.0.0.1:3000'); 
app.listen(3000);
