module.exports = ({ env }) =>[
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://vision-crew.vercel.app', 'http://localhost:3000', 'https://www.visioncrew.co', 'https://visioncrew.co', '*', 'https://d76e-122-176-137-159.ngrok-free.app'], 
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
