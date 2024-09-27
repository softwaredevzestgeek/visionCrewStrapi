// 'use strict';

// /**
//  * detail controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;


// module.exports = createCoreController('api::detail.detail');

// //////////////////////////////

'use strict';

const { sanitize } = require('@strapi/utils');

module.exports = {
    async find(ctx) {
        const entities = await strapi.entityService.findMany('api::detail.detail');
        const sanitizedEntities = await sanitize.contentAPI.output(entities, strapi.getModel('api::detail.detail'));
        return sanitizedEntities;
    },

    async create(ctx) {
        const { data } = ctx.request.body;

        if (data) data.publishedAt = Date.now();
        const entity = await strapi.entityService.create('api::detail.detail', {
            data: data,
            // populate: {
            //     services: true
            // }
        });

        const sanitizedEntity = await sanitize.contentAPI.output(entity, strapi.getModel('api::detail.detail'));
        return sanitizedEntity;
    },
};