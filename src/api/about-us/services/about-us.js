'use strict';


/**
 * case-studie-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-us.about-us');






// /**
//   * about-us service
//  */

// const { sanitize } = require('@strapi/utils');

// module.exports = {
//     async find(ctx) {
//         const entities = await strapi.entityService.findPage('api::about-us.about-us', {
//             populate: '*'
//         });

//         const sanitizedEntities = await sanitize.contentAPI.output(entities, strapi.getModel('api::case-studie-card.case-studie-card'));

//         return sanitizedEntities;
//     },
// };