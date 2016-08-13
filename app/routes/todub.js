module.exports = function (app) {
  var Task = require('../models/task');
  app.get('/todub/task', function (req, res) {
    Task.find({})
      .then((tasks) => res.json({ ok: true, tasks }))
      .catch(err => res.status(500).json(err));
  });

  app.get('/todub/task/:taskId', function (req, res) {
    Task.findById(req.params.taskId)
      .then((task) => res.json({ ok: true, task }))
      .catch(err => res.status(500).json(err));
  });

  app.post('/todub/task', function (req, res) {
    Task.create(new Task(req.body))
      .then((task) => res.json({ ok: true, task }))
      .catch(err => res.status(500).json(err));
  });

  app.put('/todub/task/:taskId', function (req, res) {
    Task.findByIdAndUpdate(req.params.taskId, { $set: { isCompleted: req.body.isCompleted } })
      .then(() => res.json({ ok: true }))
      .catch(err => res.status(500).json(err));
  });

  app.delete('/todub/task/:taskId', function (req, res) {
    Task.findByIdAndRemove(req.params.taskId)
      .then(() => res.json({ ok: true }))
      .catch(err => res.status(500).json(err));
  });
};
