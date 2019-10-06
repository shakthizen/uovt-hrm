/**
 * RoomType.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    capacity: {
      type: 'number',
      defaultsTo: 0,
      required: false
    },
    singleBed: {
      type: 'number',
      defaultsTo: 0
    },
    doubleBed: {
      type: 'number',
      defaultsTo: 0
    },
    kingBed: {
      type: 'number',
      defaultsTo: 0
    },
    queenBed: {
      type: 'number',
      defaultsTo: 0
    },
    price: {
      type: 'number',
      required: true
    },
    ac: {
      type: 'boolean',
      defaultsTo: false
    },
    wifi: {
      type: 'boolean',
      defaultsTo: false
    },
    // relationships
    rooms: {
      collection: 'room',
      via: 'roomType'
    }
  },

  beforeCreate: function(valuesToSet, proceed) {
    valuesToSet.capacity =
      valuesToSet.singleBed +
      valuesToSet.doubleBed * 2 +
      valuesToSet.queenBed * 2 +
      valuesToSet.kingBed * 2;
    return proceed();
  },

  beforeUpdate: function(valuesToSet, proceed) {
    valuesToSet.capacity =
      valuesToSet.singleBed +
      valuesToSet.doubleBed * 2 +
      valuesToSet.queenBed * 2 +
      valuesToSet.kingBed * 2;
    return proceed();
  }
};
