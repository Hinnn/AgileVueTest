<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <booking-form :booking="booking" bookingBtnTitle="Make a Booking"
                         @booking-is-created-updated="submitBooking"></booking-form>
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
      booking: { },
      messagetitle: ' Make a Booking '
    }
  },
  components: {
    'booking-form': BookingForm
  },
  methods: {
    submitBooking: function (booking) {
      BookingService.postBooking(booking)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          // this.errors.push(error)
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
