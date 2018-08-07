import server from './hapiserver';

/**
 *  server start
 */
server.start((err) => {
  if (err) {
    console.log('error', 'Failed to start server: ', { tags: 'startup', error: err });
  }

  server.connections
    .forEach((connection) => {
      console.log('info', `Server started at: ${connection.info.uri}, connection labels: ${connection.settings.labels}`, { tags: 'startup' });
    });
});