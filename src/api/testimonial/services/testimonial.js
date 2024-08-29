'use strict';

/**
 * testimonial service
 */

// const { createCoreService } = require('@strapi/strapi').factories;

// module.exports = createCoreService('api::testimonial.testimonial');



///////////////////////////////////////////////////////////////

const { sanitize } = require('@strapi/utils');

module.exports = {
    async find(ctx) {
        const entities = await strapi.entityService.findPage('api::testimonial.testimonial', {
            populate:"*" // Populate everything in the home-page content type
        });

        const sanitizedEntities = await sanitize.contentAPI.output(entities, strapi.getModel('api::testimonial.testimonial'));

        return sanitizedEntities;
    },
};

