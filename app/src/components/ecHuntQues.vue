<template>
    <transition appear>
		{{myitemdata}}
        <div class="container">
            <div class="row mt-1">
                <div class="col-12">
                    <!--<img src="https://i.ibb.co/zbF6Kt9/8232820489-579018c1cd-b.jpg" class="float-left" width="100%">-->
					<img :src="itemgamefoto" class="float-left" width="100%">
				</div>
            </div>
            <!--<div class="row mt-1">
                <div class="col-12">
                    What is the name of the business with this window?
                </div>
            </div>-->
            <div class="row mt-1">
                <div class="col-12" role="group">
                   <h3>{{itemstreet}}</h3>
				   <div class="fmetadata">
						<p>YEAR: <b>{{itemyear}}</b></p>
						<p>AUTHOR: <b>{{itemauthor}}</b></p>
						<p>SOURCE: <b>{{itemsource}}</b></p>  
						<p>COPYRIGHT: <b>{{itemcopyrights}}</b></p>					
				   </div>
					</br>
				</div>
			</div>
            <div class="row mt-1">
                <div class="col-12" role="group">
                    <form>
                         <label for="input-live"><h4>{{itemgamequestion}}</h4></label>
                         <input v-model="$v.text.$model" :class="status($v.text)" :placeholder="itemgameplaceholder">
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
   props:['myitemdata'],
    data(){
        return {
            text: '',
        };
    },
    computed:{
        //text(){
        //    return this.text
        //}
		itemgamefoto(){
			if (this.myitemdata && this.myitemdata.gamedata && this.myitemdata.gamedata.fotogame) {
				//code
				return this.myitemdata.gamedata.fotogame;
			}else{
				return 'https://weownrotterdam.nl/app/uploads/2019/06/BLACK.jpg';
			}
		},
		itemyear(){
			if (this.myitemdata && this.myitemdata.gamedata && this.myitemdata.gamedata.year) {
				//code
				return this.myitemdata.gamedata.year;
			}else{
				return '[UNKNOWN]';
			}
		},
		itemauthor(){
			if (this.myitemdata && this.myitemdata.gamedata && this.myitemdata.gamedata.author) {
				//code
				return this.myitemdata.gamedata.author;
			}else{
				//return '[UNKNOWN]';
			}
		},
		itemsource(){
			if (this.myitemdata && this.myitemdata.gamedata && this.myitemdata.gamedata.src) {
				//code
				return this.myitemdata.gamedata.src;
			}else{
				//return '[UNKNOWN]';
			}
		},
		itemcopyrights(){
			if (this.myitemdata && this.myitemdata.gamedata && this.myitemdata.gamedata.copyrights) {
				//code
				return this.myitemdata.gamedata.copyrights;
			}else{
				//return '[UNKNOWN]';
			}
		},	
		itemgamequestion(){
			if (this.myitemdata && this.myitemdata.gamedata && this.myitemdata.gamedata.question) {
				//code
				return this.myitemdata.gamedata.question;
			}else{
				return '(no question)';
			}
		},
		itemgameplaceholder(){
			if (this.myitemdata && this.myitemdata.gamedata && this.myitemdata.gamedata.placeholder) {
				//code
				return this.myitemdata.gamedata.placeholder;
			}else{
				return '';
			}
		},
    },
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
