'use strict';

/**
 * tech-stack service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tech-stack.tech-stack');
