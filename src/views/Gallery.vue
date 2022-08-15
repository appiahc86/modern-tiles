<template>
    <br>
    <h3 class="text-center text-danger">We have your ideal style</h3>
    <p class="text-center">Please click on an image to enlarge it</p>


<div class="container">
    <div class="row">
        <div class="col-6 col-sm-4 col-md-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="" @click="openModal">
                    <img class="img-fluid rounded-3" src="../../public/img/page1/1.jpg" alt="">
                </a>

            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="#a" @click="openModal">
                    <img class="img-fluid rounded-3" src="../../public/img/page1/2.jpg" alt="">
                </a>

            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="#a" @click="openModal">
                    <img class="img-fluid rounded-3" src="../../public/img/page1/3.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="#a" @click="openModal">
                    <img class="img-fluid rounded-3" src="../../public/img/page1/4.jpg" alt="">
                </a>
            </div>
        </div>

        <!-- second four columns  -->
        <div class="col-6 col-sm-4 col-md-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="#a" @click="openModal">
                    <img class="img-fluid rounded-3" src="../../public/img/page1/5.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="#a" @click="openModal">
                    <img class="img-fluid rounded-3" src="../../public/img/page1/6.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="#a" @click="openModal">
                    <img class="img-fluid rounded-3" src="../../public/img/page1/7.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="#a" @click="openModal">
                    <img class="img-fluid rounded-3" src="../../public/img/page1/8.jpg" alt="">
                </a>
            </div>
        </div>


    <!--  third 4 columns      -->
        <div class="col-6 col-sm-4 col-md-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="#a" @click="openModal">
                    <img class="img-fluid rounded-3" src="../../public/img/page1/9.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="#a" @click="openModal">
                    <img class="img-fluid rounded-3" src="../../public/img/page1/10.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="#a" @click="openModal">
                    <img class="img-fluid rounded-3" src="../../public/img/page1/11.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="#a" @click="openModal">
                    <img class="img-fluid rounded-3" src="../../public/img/page1/12.jpg" alt="">
                </a>
            </div>
        </div>

        <!--  Last 4 columns      -->
        <div class="col-6 col-sm-4 col-md-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="#a" @click="openModal">
                    <img class="img-fluid rounded-3" src="../../public/img/page1/13.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="#a" @click="openModal">
                    <img class="img-fluid rounded-3" src="../../public/img/page1/14.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="#a" @click="openModal">
                    <img class="img-fluid rounded-3" src="../../public/img/page1/15.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="#a" @click="openModal">
                    <img class="img-fluid rounded-3" src="../../public/img/page1/16.jpg" alt="">
                </a>
            </div>
        </div>

    </div>
</div>


        <ul class="pagination justify-content-center mt-2">

            <li class=""><a class="btn btn-primary">1</a></li>&nbsp;&nbsp;
            <li class="page-item"><router-link :to="{name: 'Gallery2'}" class="page-link" href="#">2</router-link></li>&nbsp;&nbsp;
            <li class="page-item"><router-link :to="{name: 'Gallery2'}" class="page-link" href="#"><span class="fas fa-chevron-right"></span></router-link></li>
        </ul>






    <!-- The Modal -->
    <div id="myModal" ref="modal" class="modal" style="margin-top: 4rem;">
        <span class="close" @click="closeModal">&times;</span>
        <img class="modal-content" ref="modalImage">
<!--        <div id="caption"></div>-->
    </div>

    <div ref="mount" style="display: none; margin-top: 500px;">Mounting...............</div>

</template>

<script>
    export default {
        name: "Gallery",
        methods: {

            openModal(event){
                const src = event.target.getAttribute('src');
                const modal = this.$refs.modal;
                const modalImg = this.$refs.modalImage;

                modalImg.setAttribute('src', src);
                modal.style.display = "block";

            },

            closeModal(){
                const modal = this.$refs.modal;
                modal.style.display = "none";
            }
        },


    }
</script>

<style scoped>

    .page-link, .btn-primary{
        font-size: 1.1em;
    }

    .img-fluid:hover {opacity: 0.8;}

    /* The Modal (background) */
    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
    }

    /* Modal Content (image) */
    .modal-content {
        margin: auto;
        display: block;
        width: 80%;
        max-width: 700px;
        padding: 5px;
        border-radius: 4%;
    }

    /* Caption of Modal Image */
    #caption {
        /*margin: auto;*/
        /*display: block;*/
        /*width: 80%;*/
        /*max-width: 700px;*/
        /*text-align: center;*/
        /*color: #ccc;*/
        /*padding: 10px 0;*/
        /*height: 150px;*/
    }

    /* Add Animation */
    .modal-content, #caption {
        -webkit-animation-name: zoom;
        -webkit-animation-duration: 0.6s;
        animation-name: zoom;
        animation-duration: 0.6s;
    }

    @-webkit-keyframes zoom {
        from {-webkit-transform:scale(0)}
        to {-webkit-transform:scale(1)}
    }

    @keyframes zoom {
        from {transform:scale(0)}
        to {transform:scale(1)}
    }

    /* The Close Button */
    .close {
        position: absolute;
        top: 15px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        transition: 0.3s;
    }

    .close:hover,
    .close:focus {
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
    }

    /* 100% Image Width on Smaller Screens */
    @media only screen and (max-width: 700px){
        .modal-content {
            width: 100%;
        }
    }


</style>