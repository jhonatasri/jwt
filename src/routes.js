const express = require('express');
const routes = express.Router();

//Controllers
const UserController = require('./controllers/UsersController');

routes.get('/', UserController.index);
routes.post('/auth', UserController.auth);
routes.post('/create', UserController.create);

module.exports = routes;
