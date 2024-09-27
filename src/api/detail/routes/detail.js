// 'use strict';

// /**
//  * detail router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::detail.detail');



/////////////////


'use strict';

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/details',
            handler: 'detail.find',
            config: {
                auth: false,
            },
        },
        {
            method: 'POST',
            path: '/details',
            handler: 'detail.create',
            config: {
                auth: false,
            },
        },
    ],
};