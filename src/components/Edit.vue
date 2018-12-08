<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
            <booking-form :booking="booking" bookingBtnTitle="Update Booking"
                          @booking-is-created-updated="updateBooking"></booking-form>
          </template>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import BookingService from '@/services/BookingService'
import BookingForm from '@/components/BookingForm'

export default {
  data () {
    return {
      booking: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Update Booking '
    }
  },
  components: {
    'booking-form': BookingForm
  },
  created () {
    this.getBooking()
  },
  methods: {
    getBooking: function () {
      BookingService.fetchBooking(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.booking = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting Booking in Edit: ' + JSON.stringify(this.booking, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateBooking: function (booking) {
      console.log('Before PUT ' + JSON.stringify(booking, null, 5))
      BookingService.putBooking(this.$router.params, booking)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(booking, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
