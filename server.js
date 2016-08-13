// Dependencies
var express = require('express');
var compression = require('compression');
var helmet = require('helmet');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

// Confguration
var port = process.env.OPENSHIFT_NODEJS_PORT || 5000;
var ip = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

// Database
var config = require('./config');
mongoose.connect(config.databaseUrl);

// App
var app = express();
app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

// Parsers
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

// Routes
var routes = require('./app/routes');
routes(app);

// Run
app.listen(port, ip);

console.log('==============================================');
console.log('  _____           _     _______        _     ');
console.log(' |  __ \\         | |   |__   __|      | |    ');
console.log(' | |__) | __ ___ | |_ ___ | | ___  ___| |__  ');
console.log(' |  ___/ \'__/ _ \\| __/ _ \\| |/ _ \\/ __| \'_ \\ ');
console.log(' | |   | | | (_) | || (_) | |  __/ (__| | | |');
console.log(' |_|   |_|  \\___/ \\__\\___/|_|\\___|\\___|_| |_|');
console.log('');
console.log('==============================================');
console.log('');
console.log(`Listening on http://${ip}:${port}`);
console.log('');
