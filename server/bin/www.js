/*jslint node:true, devel:true */
"use strict";

var app = require('../server.js');

var server = app.listen(app.get('port'), function () {
   console.log('Express server listening on port' + server.address().port);
});
