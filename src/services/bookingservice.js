import Api from '@/services/api'

export default {
  fetchBookings () {
    return Api().get('/bookings')
  },
  postBooking (booking) {
    return Api().post('/bookings', booking,
      { headers: {'Content-type': 'application/json'} })
  },
  upvoteBooking (customerID) {
    return Api().put(`/bookings/${customerID}/amount`)
  },
  deleteBooking (customerID) {
    return Api().delete(`/bookings/${customerID}`)
  },
  fetchBooking (customerID) {
    return Api().get(`/bookings/${customerID}`)
  },
  putBooking (customerID, booking) {
    console.log('REQUESTING ' + booking.customerID + ' ' +
      JSON.stringify(booking, null, 5))
    return Api().put(`/bookings/${customerID}/amount`, booking,
      { headers: {'Content-type': 'application/json'} })
  }
}
