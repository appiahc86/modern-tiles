<template>
    <div class="container-fluid inTouch bg-dark">
        <div class="row justify-content-center">
            <div class="col-sm-12  col-lg-10 col-xl-8 px-3 msg">
                <h1 class="text-center">GET IN TOUCH.</h1>
                <h3 class="text-center">
                    Our friendly and experienced team is here to help. If you’d like to get
                    in touch, please contact us via the email or telephone details below. Or
                    chat with us on whatsapp by clicking on the icon at the bottom of this page.
                </h3>
            </div>

        </div>
    </div>

    <div class="container-fluid py-5 contact">
        <div class="row">
            <div class="col text-center">
                <h2 class="enquiries">GENERAL ENQUIRIES</h2>
                <p><span class="fas fa-phone"></span>
                  <a href="tel:+233240829816" style="text-decoration: none; color: black"> 0240 829 816</a> /
                  <a href="tel:+233201851808" style="text-decoration: none; color: black">0201 851 808</a>
                </p>
                <p><span class="fas fa-envelope"></span> moderntilesghltd@gmail.com</p>
                <h3 class="mt-2">Location (Kumasi)</h3>
                <cite>
                    New Orleans Hotel<br>
                    Danyame <br>
                    Kumasi
                </cite>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

    iframe{
        margin-top: 20px;
        width: 100%;
        height: 500px;
        border-radius: 30px;
    }

    .enquiries{
        letter-spacing: 2px;
        font-size: 24px;
        font-weight: bold;
    }

    .contact{
        background: #ccc;
    }
    .inTouch{
        background: black;
        color: white;
    }
    .msg{
        padding: 80px 0 80px 0;
    }
    h1{
        font-weight: bold;
        font-size: 5em;
    }
    h3{
        line-height: 35px;
    }

    @media only screen and (max-width: 1300px){
        h1{
            font-weight: bold;
            font-size: 3em;
        }
    }

    @media only screen and (max-width: 1000px){
        h1{
            font-size: 2.3em;
        }
        h3{
            font-size: 1.4em;
        }
    }


    @media only screen and (max-width: 700px){

        h3{
            font-size: 1.2em;
        }
        iframe{
            height: 300px;
        }
    }
</style>