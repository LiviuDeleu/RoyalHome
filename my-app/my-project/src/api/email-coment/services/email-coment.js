'use strict';

/**
 * email-coment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-coment.email-coment');
