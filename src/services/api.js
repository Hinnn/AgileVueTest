import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'http://localhost:3000/'
    // baseURL: 'https://bookingweb-ssd-nodeserver.herokuapp.com/'
    // baseURL: 'mongodb://YueWang:bookings999@ds135179.mlab.com:35179/bookings'
  })
}
