var User = require('../controllers').UserCtrl;

module.exports = [
  { method: 'POST', path: '/user', handler: User.create},
  { method: 'GET', path: '/user', handler: User.getAll},
  { method: 'GET', path: '/user/{userId}', handler: User.getOne},
  { method: 'PUT', path: '/user/{userId}', handler: User.update},
  { method: 'DELETE', path: '/user/{userId}', handler: User.remove},
]
