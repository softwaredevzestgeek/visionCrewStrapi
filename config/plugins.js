module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "rest-cache": {
      config: {
          provider: {
              name: "redis",
              options: {
                  max: 32767,
                  connection: "default",
              },
          },
          strategy: {
              
              enableEtagSupport: true,
              logs: true,
              clearRelatedCache: true,
              maxAge: 3600000,
              contentTypes: [
                  // list of Content-Types UID to cache
                  "api::about-us.about-us",
                  "api::case-studie-card.case-studie-card",
                  "api::testimonial.testimonial",
                  {
                      contentType: "api::about-us.about-us",
                      maxAge: 3600000,
                      hitpass: false,
                      keys: {
                          useQueryParams: false,
                          useHeaders: ["accept-encoding"],
                      },
                      maxAge: 18000,
                      method: "GET",
                  },
                  {
                    contentType: "api::case-studie-card.case-studie-card",
                    maxAge: 3600000,
                    hitpass: false,
                    keys: {
                        useQueryParams: false,
                        useHeaders: ["accept-encoding"],
                    },
                    maxAge: 18000,
                    method: "GET",
                }, 
                {
                  contentType: "api::testimonial.testimonial",
                  maxAge: 3600000,
                  hitpass: false,
                  keys: {
                      useQueryParams: false,
                      useHeaders: ["accept-encoding"],
                  },
                  maxAge: 18000,
                  method: "GET",
              }
              ],
          },
      },
  },
});