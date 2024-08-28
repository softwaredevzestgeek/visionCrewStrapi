module.exports = ({ env }) =>[
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
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'],
          'img-src': ["'self'", 'data:', 'cdn.jsdelivr.net', 'strapi.io', `res.cloudinary.com`],
        },
      }
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
