/**
 * Guest.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    identity: {
      type: 'string',
      required: true
      // unique: true
    },
    mobile: {
      type: 'string'
    },
    // relationships
    reservations: {
      collection: 'reservation',
      via: 'guest'
    }
  }
};
