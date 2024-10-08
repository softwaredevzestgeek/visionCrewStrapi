'use strict';

/**
  * about-us service
 */

const { sanitize } = require('@strapi/utils');

module.exports = {
    async find(ctx) {
        const entities = await strapi.entityService.findPage('api::about-us.about-us', {
            populate: '*'
        });

        const sanitizedEntities = await sanitize.contentAPI.output(entities, strapi.getModel('api::case-studie-card.case-studie-card'));

        return sanitizedEntities;
    },
};