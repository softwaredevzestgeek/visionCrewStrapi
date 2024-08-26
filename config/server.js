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
<<<<<<< Updated upstream
//////////////////////////////////////////////////////////////////////////////
=======

///////////////////////////////////////////////////////////////////////////
>>>>>>> Stashed changes


module.exports = ({ env }) => {
  // Log the port for debugging
  console.log(`Starting Strapi on port ${env.int('PORT', 1337)}`);

  return {
    host: env('HOST', '0.0.0.0'), // Ensure Strapi listens on all network interfaces
<<<<<<< Updated upstream
    port: env.int('PORT', 1337), // Use environment variable PORT if set
=======
    port: env.int('PORT', process.env.PORT || 1337), // Use environment variable PORT if set
>>>>>>> Stashed changes
    app: {
      keys: env.array('APP_KEYS'),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  };
};