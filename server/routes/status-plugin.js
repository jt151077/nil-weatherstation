import pack from '../../package.json';

const pluginName = 'status-plugin';

/**
 * Registers the plugin
 *
 * @param plugin
 * @param options
 * @param next
 */
function register(server, options, next) {
  server.route({
    method: 'GET',
    path: '/health',
    handler: (request, reply) => reply({
      message: 'healthy',
      version: pack.version,
    }),
  });

  // and we need all other routes to serve index.js
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'dist',
        listing: true
      }
    }
  });

  console.log('info', 'Registered', { plugin: pluginName });
  next();
}

register.attributes = {
  name: pluginName,
  version: '1.0.0',
};

module.exports = register;