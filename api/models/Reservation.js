/**
 * Reservation.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    checkIn: {
      type: 'number',
      required: true
    },
    checkOut: {
      type: 'number',
      required: true
    },
    canceled: {
      type: 'boolean',
      defaultsTo: false
    },
    // relationships
    guest: {
      model: 'guest'
    },
    room: {
      model: 'room'
    }
  }
};
