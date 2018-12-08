import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Bookings from '@/components/Bookings'
import Book from '@/components/Book'
import Room from '@/components/Room'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
// import Edit from '@/components/Edit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bookings',
      name: 'Bookings',
      component: Bookings
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    /* {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }, */
    {
      path: '/room',
      name: 'Room',
      component: Room
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
