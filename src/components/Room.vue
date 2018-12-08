<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <table align="center">
    <tr>
      <td>
        <p class="lead"><b><i>Rooms in the first floor are the first picture. </i></b>
        <p class="lead"><b><i>Rooms in the second floor are the last picture. </i></b>
        <p class="lead"><b><i>Do not hesitate !</i></b>
        <p>Just click <a href ="#/book">here</a> to go to</p>
        <p>the Booking page and reserve your room</p>
      </td>
    </tr>
      <tr>
        <img src="../assets/004.jpg" width = "700" height = "500" alt="description here"/>
        <img src="../assets/005.jpg" width = "700" height = "500" alt="description here"/>
      </tr>

    </table>
  </div>
</template>

<script>
export default {
  name: 'Room',
  data () {
    return {
      messagetitle: ' Room '
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
