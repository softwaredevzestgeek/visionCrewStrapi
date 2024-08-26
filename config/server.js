// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
// });
//////////////////////////////////////////////////////////////////////////////


module.exports = ({ env }) => {
  // Log the port for debugging
  console.log(`Starting Strapi on port ${env('PORT')}`);

  return {
    host: env('HOST', '0.0.0.0'), // Ensure Strapi listens on all network interfaces
    port: env('PORT') || 1337, // Use environment variable PORT if set
    app: {
      keys: env.array('APP_KEYS'),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  };
};