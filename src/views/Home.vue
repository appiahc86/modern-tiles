<template>
  <div class="home">
    <h1 class="text-white d-none d-lg-block">
      <br><br>
    </h1>
    <h1 class="text-white"></h1><br><br><br>
    <h1 class="text-white"></h1>
    <h1 class="text-white"></h1>
    <h1 class="text-white"></h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">

          <h1 class="text-white text-center">Modern Tiles GH Ltd</h1>
          <p class="text-white text-center">Wholesale And Retail Of Quality Italian <br> Floor And Wall Tiles</p>
          <div class="text-center">
            <router-link  :to="{name: 'Gallery'}" class="btn btn-lg">Click to see more</router-link>
          </div>

        </div>
      </div>
    </div>



    <h1 class="text-white"></h1>
    <h1 class="text-white"></h1>
    <h1 class="text-white"></h1><br><br><br><br>
    <h1 class="text-white d-none d-lg-block">
      <br><br><br>
    </h1>
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
            <img class="img-fluid rounded-3" src="../../public/img/home/3.jpeg" alt="">
        </div>
      </div>

      <div class="col-6 col-sm-6 col-md-6 col-lg-3 mb-2">
        <div class="card shadow p-1">
            <img class="img-fluid" src="../../public/img/home/4.jpeg" alt="">
        </div>
      </div>
    </div>

  </div>




  <div class="container-fluid carousel-container shadow-lg">

    <!-- Carousel -->
    <div class="row justify-content-center">
      <div class="col-12 col-md-12">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../../public/img/home/carousel/2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../../public/img/home/carousel/3.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../../public/img/home/carousel/1.jpg" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
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
    background-image: linear-gradient( rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.10)),url("../../public/img/bg.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media only screen and (min-width: 700px){
    h1 {
      font-size: 4em !important;
    }
    p{
      font-size: 2em !important;
    }
  }

.btn{
  background: rgba(255, 215, 0, 0.99);
  font-weight: bold;
  color: rgba(0, 0, 0, 0.70);
}



  h1 {
    position: relative;
    font-family: sans-serif;
    text-transform: uppercase;
    letter-spacing: 4px;
    overflow: hidden;
    background: linear-gradient(90deg, #ffffff, gold, #ffffff);
    background-repeat: no-repeat;
    background-size: 80%;
    animation: animate 5s linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
  }

  @keyframes animate {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
  }


</style>