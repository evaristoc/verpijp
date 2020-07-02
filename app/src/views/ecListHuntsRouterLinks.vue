<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-dark">
          <h3 style="color:#fff;">Collectables View</h3>
          <!-- Links -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" @click="$router.go(-1)">&times;</a>
            </li>
          </ul>      
        </nav>
        <div class="container" v-if="collects.length > 0" v-for="collect in collects">
            <div class="row mt-1">
                <div class="col-12">
                    <!--<a href="">{{hunt.eststreet}} : {{hunt.gamedata.question}}</a>-->
                    <router-link :to="'spot/'+nodeimg+'/'+collect.imgid+'/question'" tag="li" active-class="active"><span><img :src="collect.iconType(collect.useas)"></span> <b>{{collect.eststreet}}</b> : {{collect.gamedata.question}}</router-link>
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
            nodeimg(){return this.$route.query.nodeimg},
            collects(){
                if (verdata.output) {
                    //code
                    let h = [];
                    //console.log(this.newitem)
                    for (let i = 0; i < verdata.output.length; i++) {
                        //console.log(verdata.output[i].getlost);
                        if (parseInt(verdata.output[i].getlost) == parseInt(this.nodeimg)) {
                            //code
                            h.push(verdata.output[i])
                        }
                    }
                    //console.log(111, h.length);
                    return h;
                }
            }
        },
        
        methods:{
   
        },
    }
    
</script>
<style>
    li{
        padding: .3em 0 1em 40px;
        list-style-type: none;
    } 
</style>