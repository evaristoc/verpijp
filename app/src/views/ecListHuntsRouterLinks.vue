<template>
    <div>
        <h3>HELLO HUNTS</h3>
        <div class="container" v-if="hunts.length > 0" v-for="hunt in hunts">
            <div class="row mt-1">
                <div class="col-12">
                    <!--<a href="">{{hunt.eststreet}} : {{hunt.gamedata.question}}</a>-->
                    <router-link :to="'hunt/'+newitem+'/'+hunt.imgid+'/question'" tag="li" active-class="active"><b>{{hunt.eststreet}}</b> : {{hunt.gamedata.question}}</router-link>
                    <!--<pre>{{hunt}}</pre>-->
                </div>
            </div>
        </div>
        <!--
         <a href="">{{hunt.estaddress}} : {{hunt.gamedata.question}}</a>
         <div class="container">
            <div class="row mt-1">
                <div class="col-12">
                    <a href="/#/hunts/hunt/question">Tweede van der Helststraat (between 3-13): What is the name of the business with this window?</a>
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-12">
                    <a href="#">Van Ostadestraat (between 149-155): Which year (ANNO) was this built?</a>
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-12">
                    <a href="#">There was an atelier in Sarphatipark 42: who was there in 1900's?</a>
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-12">
                    <a href="#">Tweede van der Helststraat (between 3-13): Which year (ANNO) was this built?</a>
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-12">
                    <a href="#">The name of the cinema at Ceintuurbaan 338?</a>
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-12">
                    <a href="#">Name of the square at the end of street: Van Der Xxxxplein?</a>
                </div>
            </div>
        </div>-->
    </div>
</template>
<script>
    //TODO --- https://mdbootstrap.com/docs/jquery/forms/validation/
    import {verdata} from '../assets/verpijptest.js';
    
    export default {
        data(){
            return {
                //huntslist: [],
            }
        },
        
        computed:{
            newitem(){return this.$route.query.gl},
            hunts(){
                if (verdata.output) {
                    //code
                    let h = [];
                    //console.log(this.newitem)
                    for (let i = 0; i < verdata.output.length; i++) {
                        //console.log(verdata.output[i].getlost);
                        if (verdata.output[i].getlost == parseInt(this.newitem)) {
                            //code
                            h.push(verdata.output[i])
                        }
                    }
                    //console.log(111, h.length);
                    return h;
                }
            }
        }
    }
    
</script>