var koa = require('koa');
var app = koa();

console.log('Starting Server...');

// x-response-time
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %sms', this.method, this.url, ms);
});

// response
app.use(function *(){
  this.set('Content-Type', 'application/json');
  this.body = JSON.stringify({
    name: 'Commonality API',
    description: 'An API for fetching and scraping Bandcamp Tag search result pages.',
    version: '0.0.1',
    endpoints: [
      '/tag/:tagName/:pageNumber'
    ]
  });
});

console.log('Listening on 127.0.0.1:3000'); 
app.listen(3000);
