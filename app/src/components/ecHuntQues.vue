<template>
    <transition appear>
		{{myitemdata}}
        <div class="container">
            <div class="row mt-1">
                <div class="col-12">
                    <!--<img src="https://i.ibb.co/zbF6Kt9/8232820489-579018c1cd-b.jpg" class="float-left" width="100%">-->
					<img :src="myitemdata.gamedata.fotogame" class="float-left" width="100%">
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
                         <label for="input-live"><h4>{{myitemdata.gamedata.question}}</h4></label>
                         <input v-model="$v.text.$model" :class="status($v.text)" :placeholder="myitemdata.gamedata.placeholder">
                         <button class="btn btn-success" @click.prevent="gotoSol()">Solution</button><!--https://stackoverflow.com/questions/45185891/vue-js-navigate-to-url-with-question-mark-->
                    </form>
                     <!--<pre>{{ $v }}</pre>-->
                </div>
            </div>
        </div>
    </transition>
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
  props:['myitemdata'],
  validations: {
  	text: {
    	required,
        sameAs: function(){ //if EXACT, the solution here was to write `sameAs(function(){return VALUE})`
            //console.log(this);
            return this.$v.text.$model.toLowerCase() === this.myitemdata.gamedata.answer;
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
        gotoSol() {
            this.$router.push('./answer')
        }

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

 .v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
