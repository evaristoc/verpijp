<template>
    <div>
        <h3>HELLO COLLECTABLES</h3>
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
               iconType(t) {
                    if (t == "show") {
                        //code
                        return "http://icons.iconarchive.com/icons/designbolts/free-multimedia/32/Dslr-Camera-icon.png"
                        //return "http://icons.iconarchive.com/icons/iconcubic/classic-cameras/32/Leica-2-icon.png"
                    }else if (t == "hist") {
                        //code
                        //return "http://icons.iconarchive.com/icons/icons8/ios7/32/Cinema-History-icon.png"
                        return "https://img.icons8.com/plasticine/32/000000/order-history.png"
                    }else if (t == "game") {
                        //code
                        //return "http://icons.iconarchive.com/icons/thegirltyler/brand-camp/32/Search-icon.png"
                        //return "https://image.flaticon.com/icons/png/32/179/179658.png"
                        return "http://icons.iconarchive.com/icons/graphicloads/seo-services/32/location-icon.png" 
                    }else if (t == "expand") {
                        //code
                        //return "http://icons.iconarchive.com/icons/aha-soft/free-3d-glossy-interface/32/move-icon.png"
                        //return "http://icons.iconarchive.com/icons/thegirltyler/brand-camp/32/Search-icon.png"
                        return "http://icons.iconarchive.com/icons/double-j-design/super-mono-3d/32/compass-icon.png"
                    }
                },        
        },
    }
    
</script>
<style>
    li{
        padding: .3em 0 1em 40px;
        list-style-type: none;
    } 
</style>