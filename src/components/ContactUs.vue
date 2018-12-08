<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-comment" style="padding: 3px"></i>{{messagetitle}}</h3>
    <p class="lead">If you have any questions just contact us! </p>
    <p class="lead"><b>772012459@qq.com</b> is our email!</p>
  </div>
</template>
<script>
export default {
  name: 'ContactUs',
  data () {
    return {
      messagetitle: ' Contact Us '
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
