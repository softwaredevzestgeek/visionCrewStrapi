// 'use strict';

// /**
//  * home-page service
//  */

// const { createCoreService } = require('@strapi/strapi').factories;

// module.exports = createCoreService('api::home-page.home-page');



const { sanitize } = require('@strapi/utils');

module.exports = {
    async find(ctx) {
        const entities = await strapi.entityService.findPage('api::home-page.home-page', {
            populate: {
                Brands: {
                    
                    populate:"*",

                }
            },  // Populate everything in the home-page content type
        });

        const sanitizedEntities = await sanitize.contentAPI.output(entities, strapi.getModel('api::home-page.home-page'));

        return sanitizedEntities;
    },
};