<template>

    <h1>Gallery Page</h1>


<div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div class="card shadow p-1">
                <a data-bs-toggle="modal" href="#a" @click="chk">
                    <img class="img-fluid rounded-3" src="../../public/img/home/3.jpg" alt="">
                </a>

            </div>
        </div>
    </div>
</div>




<!--  Modal  -->
    <div class="modal fade" id="a" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body p-1">
                    <img ref="modalImage" class="img-fluid rounded-3" src="" alt="" data-bs-dismiss="modal">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Gallery",
        methods: {
            chk(event){
                const imgSrc = event.target.getAttribute('src');
                this.$refs.modalImage.setAttribute("src", imgSrc)
            }
        }

    }
</script>

<style scoped>

</style>