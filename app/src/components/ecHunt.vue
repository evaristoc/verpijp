<template>
    <div>
        <h3>Tweede van der Helststraat (between 3-13)</h3>
        <div class="container">
            <div class="row mt-1">
                <div class="col-6">
                    <img src="https://i.ibb.co/zbF6Kt9/8232820489-579018c1cd-b.jpg" class="float-left" width="100%">
                </div>
            </div>
            <!--<div class="row mt-1">
                <div class="col-12">
                    What is the name of the business with this window?
                </div>
            </div>-->
            <div class="row mt-1">
                <div class="col-7" role="group">
                        <label for="input-live"> What is the name of the business with this window?</label>
                        <b-form-input
                          id="input-live"
                          v-model="name"
                          :state="nameState"
                          aria-describedby="input-live-help input-live-feedback"
                          placeholder="Enter your name"
                          trim
                        ></b-form-input>
                    
                        <!-- This will only be shown if the preceding input has an invalid state -->
                        <b-form-invalid-feedback id="input-live-feedback">
                          Enter at least 3 letters
                        </b-form-invalid-feedback>
                    
                        <!-- This is a form text block (formerly known as help block) -->
                        <b-form-text id="input-live-help">Your full name.</b-form-text>
                    <!--<form>
                         <input type="text" class="form-control" id="entry" pattern="GlouGlou" required>
                        <div class="valid-feedback">
                         Looks good!
                       </div>
                       <div class="invalid-feedback">
                         Doesn't look good!
                       </div>
                         <button class="btn btn-success" type="submit">Solution</button>
                    </form>-->
                </div>
            </div>
        </div>
    </div>
            <!--<div class="row mt-1">
                <div class="col-3">
                    <img src="https://i.ibb.co/RD2G05b/8442730616-6c74194f4a-b-pre.jpg" class="float-left" width="100%">
                </div>
                <div class="col-5">
                    Van Ostadestraat (between 149-155): Which year (ANNO) was this built?
                </div>
                <div class="col-3">
                    <form>
                         <input type="text" class="form-control" id="entry">
                         <button class="btn btn-success" type="submit">Solution</button>
                    </form>
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-3">
                    <img src="https://i.ibb.co/wzLJxQL/Afb1-Atelier-Piet-Mondriaan.png" class="float-left" width="100%">
                </div>
                <div class="col-5">
                    There was an atelier in Sarphatipark 42: who was there in 1900's?
                </div>
                <div class="col-3">
                    <form>
                         <input type="text" class="form-control" id="entry">
                         <button class="btn btn-success" type="submit">Solution</button>
                    </form>
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-3">
                    <img src="https://i.ibb.co/C89pbbx/7276801330-5e92700db2-b-pre.jpg" class="float-left" width="100%">
                </div>
                <div class="col-5">
                    Tweede van der Helststraat (between 3-13): Which year (ANNO) was this built?
                </div>
                <div class="col-3">
                    <form>
                         <input type="text" class="form-control" id="entry">
                         <button class="btn btn-success" type="submit">Solution</button>
                    </form>
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-3">
                    <img src="https://i.ibb.co/XXFGszX/94349279-2125730530904768-1464695048934260736-o.jpg" class="float-left" width="100%">
                </div>
                <div class="col-5">
                    The name of the cinema at Ceintuurbaan 338?
                </div>
                <div class="col-3">
                    <form>
                         <input type="text" class="form-control" id="entry">
                         <button class="btn btn-success" type="submit">Solution</button>
                    </form>
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-3">
                    <img src="https://hallodepijp.nl/blobs/gebiedsplatform/w10000/98652/2016/47/vd_Helst2.jpg" class="float-left" width="100%">
                </div>
                <div class="col-5">
                    Name of the square at the end of street: Van Der Xxxxplein?
                </div>
                <div class="col-3">
                    <form>
                         <input type="text" class="form-control" id="entry">
                         <button class="btn btn-success" type="submit">Solution</button>
                    </form>
                </div>
            </div>
        </div>
    </div>-->
</template>
<script>
    //TODO --- https://mdbootstrap.com/docs/jquery/forms/validation/
    //-- https://stackoverflow.com/questions/43481237/bootstrap-4-form-validation
    //-- https://vuelidate.js.org/#custom-validators
    //TODO check the implementation of GUARDS
    //TODO check to implement the question/answer section as an independent router-viewer with a shared header (see Max)
</script>