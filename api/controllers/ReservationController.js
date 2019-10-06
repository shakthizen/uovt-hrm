/**
 * ReservationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getAvailable: async function(req, res) {
    var reqcheckin = req.param('checkin');
    var reqcheckout = req.param('checkout');

    // console.log(checkin);
    // console.log(checkout);
    var currentReservations = await Reservation.find().where({
      and: [
        {
          checkIn: {
            '<=': reqcheckout
          }
        },
        {
          checkOut: {
            '>=': reqcheckin
          }
        }
      ]
    });

    var occupiedRooms = [];
    for (i = 0; i < currentReservations.length; i++) {
      //   console.log(JSON.stringify(currentReservations[i]));
      occupiedRooms.push(currentReservations[i].room);
    }

    // console.log(occupiedRooms);

    var roomsAvailable = await RoomType.find().populate('rooms', {
      id: { '!=': occupiedRooms }
    });

    // if there is booking in my required time zone it must be like this
    return res.json(roomsAvailable);
  },
  getOccupied: async function(req, res) {
    var reqdate = req.param('date');

    // console.log(checkin);
    // console.log(checkout);
    var currentReservations = await Reservation.find().where({
      and: [
        {
          checkIn: {
            '<=': reqdate
          }
        },
        {
          checkOut: {
            '>=': reqdate
          }
        }
      ]
    });

    var occupiedRooms = [];
    for (i = 0; i < currentReservations.length; i++) {
      //   console.log(JSON.stringify(currentReservations[i]));
      occupiedRooms.push(currentReservations[i].room);
    }

    // if there is booking in my required time zone it must be like this
    return res.json(occupiedRooms);
  }
};
