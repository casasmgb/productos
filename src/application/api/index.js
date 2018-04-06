'use strict';

const debug = require('debug')('base:api');

module.exports = async function setupApi (app, services, api) {
  debug('Iniciando API-REST');

  // Autenticación de usuario
  app.post('/auth', api.public.auth);
  app.get('/api/system/menu', api.system.obtenerMenu);
  app.get('/api/system/persona-segip/:ci', api.system.buscarPersona);

  return app;
};
