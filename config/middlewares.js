module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://vision-crew.vercel.app', 'http://localhost:3000'], 
      headers: [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
        'ngrok-skip-browser-warning' // Add the ngrok header here
      ],
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
