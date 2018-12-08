<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label class="form-label">Select Payment Type</label>
      <select id="paymenttype" name="paymenttype" class="form-control"
              type="text" v-model="paymenttype">
        <option value="null" selected disabled hidden>Choose Payment Type</option>
        <option value="Direct">Direct</option>
        <option value="PayPal">PayPal</option>
        <option value="Visa">Visa</option>
        <option value="Master">Master</option>

      </select>
    </div>
    <div>
      <label class="form-label">Input customerID</label>
      <input class="form__input" type="decimal" v-model.trim="customerID"/>
    </div>
    <div class="form-group">
      <label class="form-label">Input date</label>
      <input class="form__input" type="decimal" v-model.trim="date"/>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.amount.$error }">
      <label class="form-control-label" name="amount">Amount (Enter a number between 1 and 3)</label>
      <input class="form__input" type="decimal" v-model.trim="amount"/>
    </div>
    <div class="error" v-if="!$v.amount.between">Amount must be between 1 and 3</div>
    <div class="form-group">
      <label class="form-label">Select a Room Num</label>
      <select id="roomNum" name="roomNum" class="form-control"
              type="text" v-model="roomNum">
        <option value="null" selected disabled hidden>Choose Room Num</option>
        <option value="101">101</option>
        <option value="102">102</option>
        <option value="103">103</option>
        <option value="104">104</option>
        <option value="201">201</option>
        <option value="202">202</option>
        <option value="203">203</option>
        <option value="204">204</option>
        <option value="301">301</option>
        <option value="302">302</option>
        <option value="303">303</option>
        <option value="304">304</option>
      </select>
    </div>
    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ bookingBtnTitle }}</button>
    </p>
    <p>
      <a href="#/bookings" class="btn btn-primary btn1" role="button">Manage Bookings</a>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your Booking!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">booking...</p>
  </form>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import { required, between } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  name: 'FormData',
  props: ['bookingBtnTitle', 'booking'],
  data () {
    return {
      messagetitle: 'Book',
      customerID: this.booking.customerID,
      paymenttype: this.booking.paymenttype,
      date: this.booking.date,
      amount: this.booking.amount,
      roomNum: this.booking.roomNum,
      submitStatus: null
    }
  },
  validations: {
    /* message: {
      required,
      minLength: minLength(5)
    }, */
    amount: {
      required,
      between: between(1, 3)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var booking = {
            customerID: this.customerID,
            paymenttype: this.paymenttype,
            date: this.date,
            amount: this.amount,
            roomNum: this.roomNum
          }
          this.booking = booking
          console.log('Submitting in BookingForm : ' +
              JSON.stringify(this.booking, null, 5))
          this.$emit('booking-is-created-updated', this.booking)
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .book-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
