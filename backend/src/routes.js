const express = require('express');

const routes = express.Router();
const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions',SessionController.create);//sessão

routes.get('/ongs',OngController.index);//listar ongs
routes.post('/ongs',OngController.create);//rota de criação de ongs


routes.get('/incidents',incidentController.index);//listar casos
routes.post('/incidents',incidentController.create);//criar um novo caso
routes.delete('/incidents/:id',incidentController.delete);//apagar um caso

routes.get('/profile', ProfileController.index);//lista casos especificos de uma ong


module.exports = routes;