<template>

  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <router-link :to="{name: 'Home'}" class="navbar-brand">Modern Tiles GH Ltd</router-link>
      <button class="navbar-toggler" type="button" ref="toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="fas fa-ellipsis-h"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link :to="{name: 'Home'}" class="nav-link text-center" @click="navClick" aria-current="page">Home</router-link>
          <router-link :to="{name: 'Gallery'}" class="nav-link text-center"  @click="navClick">Gallery</router-link>
          <router-link :to="{name: 'Contact'}" class="nav-link text-center"  @click="navClick">Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
  <div class="marginBottom"></div>


  <router-view/>


  <!-- Footer-->
  <footer class="footer py-4 mt-5">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-4 text-lg-start text-center">
          Copyright &copy;
          <span style="font-weight: bold;">Modern Tiles GH</span>
         2021
        </div>
        <div class="col-lg-4 my-3 my-lg-0 text-center">

          <a class="btn btn-dark btn-social mx-2" href="tel:+233240829816"><i class="fas fa-phone"></i></a>
          <a class="btn btn-success btn-social mx-2" href="https://api.whatsapp.com/send?phone=233240829816"><i class="fab fa-whatsapp"></i></a>
          <a class="btn btn-primary btn-social mx-2" href="https://web.facebook.com/Modern-Tiles-Gh-Ltd-107072184972560"><i class="fab fa-facebook-f"></i></a>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'App',
    methods:{
      navClick(){
        this.$refs.toggler.click();
      }
    }
  }


</script>

<style>


#nav a {
  font-weight: bold;
  color: #2c3e50;
}


.navbar-nav a.router-link-exact-active {
  color: red !important;
}

  .btn-social{
    height: 2.5rem;
    width: 2.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 100%;
  }
  .marginBottom{
    margin-bottom: 3.5rem;
  }
</style>
