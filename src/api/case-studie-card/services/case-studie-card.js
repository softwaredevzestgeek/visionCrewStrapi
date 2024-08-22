'use strict';

// /**
//  * case-studie-card service
//  */

// const { createCoreService } = require('@strapi/strapi').factories;

// module.exports = createCoreService('api::case-studie-card.case-studie-card');


const { sanitize } = require('@strapi/utils');

module.exports = {
    async find(ctx) {
        const entities = await strapi.entityService.findPage('api::case-studie-card.case-studie-card', {
            populate: {
                tabs: {
                    populate: {
                        content: {
                            populate: {

                                tech_stacks: {
                                    populate: ['techName']
                                },
                                photos:{
                                    populate: ["url"]
                                }
                            }

                        },

                    }
                }
            },  // Populate everything in the home-page content type
        });

        const sanitizedEntities = await sanitize.contentAPI.output(entities, strapi.getModel('api::case-studie-card.case-studie-card'));

        return sanitizedEntities;
    },
};

