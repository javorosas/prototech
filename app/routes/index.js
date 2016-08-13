module.exports = function (app) {
  var path = require('path');

  require('./todub')(app);

  app.post('/contact', function (req, res) {
    var sender = req.body;
    if (!sender.email || !sender.name || !sender.message || !sender.phone) {
      return res.status(400).json({ message: 'Incomplete form' });
    }
    var Mailgun = require('mailgun').Mailgun;
    var mg = new Mailgun(process.env.PROTOTECH_MAILGUN_KEY);
    mg.sendText(
      `${sender.name} <${sender.email}>`,
      ['contacto@prototech.io'],
      `Contact request from ${sender.name}`,
      `Name: ${sender.name}\n
      Company: ${sender.company}\n
      Email: ${sender.email}\n
      Phone: ${sender.phone}\n
      -------\n\n
      ${sender.message}
      `,
      function (err) {
        if (err) return res.status(500).json(err);
        res.json({ ok: true });
      });
  });

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../webapp/index.html'));
  });
};
