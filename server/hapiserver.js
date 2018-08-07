import hapi from 'hapi';
import inertPlugin from 'inert';

import statusPlugin from './routes/status-plugin';
import weatherPlugin from './routes/netatmo-plugin';

const port = process.env.PORT || 3000;
const server = new hapi.Server();

const plugins = [
  inertPlugin,
  statusPlugin,
  weatherPlugin,
];

server.connection({
  port,
});

// registration of plugins
server.register(plugins, (err) => {
  /* $lab:coverage:off$ */
  if (err) {
    console.error('Failed to load a plugin: ', err);
  }
  /* $lab:coverage:on$ */

  console.log('info', 'Common plugins registered successfully', { tags: 'startup' });
});

/**
 *  server as a module
 */
export default server;