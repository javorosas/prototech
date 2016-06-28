// Dependencies
var express = require('express');
var compression = require('compression');
var helmet = require('helmet');
var path = require('path');

// Confguration
var port = process.env.OPENSHIFT_NODEJS_PORT || 5000;
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

// App
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

// Performance
app.use(compression());

// Security
app.use(helmet());

// Routes
app.get('*', function (req, res) {
  return res.sendFile(path.join(__dirname, 'webapp/in-construction.html'));
});

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
