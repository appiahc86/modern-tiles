<template>
  <div class="home">
    <h1 class="text-white"></h1><br><br><br><br>
    <h1 class="text-white"></h1>
    <h1 class="text-white"></h1>
    <h1 class="text-white"></h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h1 class="text-white">Modern Tiles GH</h1>
          <p class="text-white bb">Home of quality and affordable Italian tiles.</p>
          <router-link :to="{name: 'Gallery'}" class="btn btn-info btn-lg ">Click to see more</router-link>
        </div>
      </div>
    </div>



    <h1 class="text-white"></h1>
    <h1 class="text-white"></h1>
    <h1 class="text-white"></h1><br><br><br><br>
    <h1 class="text-white d-none d-lg-block"><br><br><br><br></h1>
  </div>
  
  <div class="container-fluid mt-3">

    <div class="row">
      <div class="col-6 col-sm-6 col-md-6 col-lg-3 mb-2">
        <div class="card shadow p-1">
          <img class="img-fluid rounded-3" src="../../public/img/home/1.jpeg" alt="">
        </div>
      </div>

      <div class="col-6 col-sm-6 col-md-6 col-lg-3 mb-2">
        <div class="card shadow p-1">
          <img class="img-fluid" src="../../public/img/home/2.jpg" alt="">
        </div>
      </div>

      <div class="col-6 col-sm-6 col-md-6 col-lg-3 mb-2">
        <div class="card shadow p-1">
            <img class="img-fluid rounded-3" src="../../public/img/home/3.jpg" alt="">
        </div>
      </div>

      <div class="col-6 col-sm-6 col-md-6 col-lg-3 mb-2">
        <div class="card shadow p-1">
            <img class="img-fluid" src="../../public/img/home/4.jpeg" alt="">
        </div>
      </div>
    </div>



  </div>


</template>

<script>


export default {
  name: 'Home'
}
</script>

<style scoped>
  .home{
    background-image: linear-gradient( rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.10)),url("../../public/img/bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }


</style>