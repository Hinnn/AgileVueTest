<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="bookings" :options="options">
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editBooking(props.row.customerID)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteBooking(props.row.customerID)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import BookingService from '@/services/BookingService'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Bookings',
  data () {
    return {
      messagetitle: ' Bookings List ',
      bookings: [],
      props: ['booking'],
      errors: [],
      columns: ['_id', 'customerID', 'paymenttype', 'date', 'amount', 'roomNum', 'edit', 'remove'],
      // columns: ['customerID', 'paymenttype', 'date', 'amount', 'roomNum', 'edit', 'remove'],
      options: {
        perPage: 10,
        filterable: ['customerID', 'date'],
        headings: {
          _id: 'ID',
          customerID: 'customerID',
          paymenttype: 'paymenttype',
          date: 'Date',
          amount: 'Amount',
          roomNum: 'roomNum'
        }
      }
    }
  },
  // Fetches Bookings when the component is created.
  created () {
    this.loadBookings()
  },
  methods: {
    loadBookings: function () {
      BookingService.fetchBookings()
        .then(response => {
        // JSON responses are automatically parsed.
          this.bookings = response.data
          console.log(this.bookings)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    // Fetches Bookings when the component is created
    editBooking: function (customerID) {
      this.$router.params = customerID
      this.$router.push('edit')
    },
    deleteBooking: function (customerID) {
      this.$swal({
        title: 'Are you totally sure:',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true
        // showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result.value)
        if (result.value === true) {
          BookingService.deleteBooking(customerID)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadBookings()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Booking ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('EREOR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          console.log(' SWAL Else Result: ' + result.value)
          this.$swal('Cancelled', 'Your Booking Still Exist!', 'info')
        }
      })
    }

  }
}
</script>

<style scoped>
  #app1 {
    width: 80%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
