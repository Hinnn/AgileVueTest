<template>
  <div class="hero">
    <h1 class="vue-title">Homer for Customer !!</h1>
    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i>Time for a reservation !!</i></b>
          <p>Just click <a href ="#/room">here</a> to go to</p>
          <p>the Room page and find your room</p>
        </td>
        <td>
          <img src="../assets/home1.gif" width = "300" height = "300" alt="description here" />
        </td>
      </tr>
    </table>

    <p></p>
    <p class="lead">This is the homepage of <b>hotelBooking</b> Web app</p>
  </div>
</template>
<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
