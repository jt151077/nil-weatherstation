import netatmo from 'netatmo';

const pluginName = 'netatmo-plugin';

const auth = {
  "client_id": process.env.CLIENT_ID,
  "client_secret": process.env.CLIENT_SECRET,
  "username": process.env.USERNAME,
  "password": process.env.PASSWORD,
};

let api = null;

/**
 * Registers the plugin
 *
 * @param plugin
 * @param options
 * @param next
 */
function register(server, options, next) {

  api = new netatmo(auth);

  // and we need all other routes to serve index.js
  server.route({
    method: 'GET',
    path: '/api/stationdata',
    handler: (request, reply) => {
      api.getStationsData((err, devices) => {
        reply(devices);
      });
    },
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
  });

  console.log('info', 'Registered', {plugin: pluginName});
  next();
}

register.attributes = {
  name: pluginName,
  version: '1.0.0',
};

module.exports = register;