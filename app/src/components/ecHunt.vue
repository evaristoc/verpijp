<template>
    <div>
        <h3>Tweede van der Helststraat (between 3-13)</h3>
        <div class="container">
            <div class="row mt-1">
                <div class="col-12">
                    <img src="https://i.ibb.co/zbF6Kt9/8232820489-579018c1cd-b.jpg" class="float-left" width="100%">
                </div>
            </div>
            <!--<div class="row mt-1">
                <div class="col-12">
                    What is the name of the business with this window?
                </div>
            </div>-->
            <div class="row mt-1">
                <div class="col-12" role="group">
                    <form>
                         <label for="input-live"><h4>What is the name of the business with this window?</h4></label>
                         <input v-model="$v.text.$model" :class="status($v.text)">
                         <button class="btn btn-success" type="submit">Solution</button>
                    </form>
                     <pre>{{ $v }}</pre>
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
    //-- https://vuelidate.js.org/#custom-validators ===> https://jsfiddle.net/b5v4faqf/
    //---- https://stackoverflow.com/questions/54731460/why-doesnt-it-work-when-sameas-is-used-in-vuelidate
    //TODO check the implementation of GUARDS
    //TODO check to implement the question/answer section as an independent router-viewer with a shared header (see Max)
    import Vue from 'vue';
    import { required, sameAs } from 'vuelidate/lib/validators';
  

  
   
  export default {
    data(){
        return {
            text: '',
        };
    },
    computed:{
        //text(){
        //    return this.text
        //}
    },
  validations: {
  	text: {
    	required,
        sameAs: function(){ //if EXACT, the solution here was to write `sameAs(function(){return VALUE})`
            //console.log(this);
            return this.$v.text.$model.toLowerCase() === 'glou';
            },
    }
  },
  
  methods: {
        caselowering(txt){
            return txt.toLowerCase();
        },
        status(validation) {
            return {
            error: validation.$error,
            dirty: validation.$dirty
          }
        },

    }
  }
    
</script>
<style>
    input {
  border: 1px solid silver;
  border-radius: 4px;
  background: white;
  padding: 5px 10px;
}

.dirty {
  border-color: #5A5;
  background: #EFE;
}

.dirty:focus {
  outline-color: #8E8;
}

.error {
  border-color: red;
  background: #FDD;
}

.error:focus {
  outline-color: #F99;
}

</style>