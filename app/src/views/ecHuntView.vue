<template>
    <div>
        <!-- A grey horizontal navbar that becomes vertical on small screens -->
        <nav class="navbar navbar-expand-sm bg-dark">
          <h3 style="color:#fff;">Item View</h3>
          <!-- Links -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" @click="$router.go(-1)">&times;</a>
            </li>
          </ul>      
        </nav>
        <h3>{{itemeststreet}}</h3>
        <!--<pre>{{item}}</pre>
        {{$route.params}}-->
        <router-view :myitemdata="myitemdata"></router-view>
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
    //https://stackoverflow.com/questions/41544174/send-data-to-components-in-vuejs-vue-router/45496186#45496186
    //https://laracasts.com/index.php/discuss/channels/vue/pass-data-to-components-while-using-vue-router?page=0
    //https://forum.vuejs.org/t/pass-data-from-parent-view-to-child-router-view/27926/5
    //https://dev.to/aligoren/passing-data-to-a-router-link-in-vuejs-2cb0
    import {verdata} from '../assets/verpijptest.js';
    
    export default {
      
      data(){
          return {
                    
                };
        },
      computed:{
        imgid(){return parseInt(this.$route.params.imgid)},
        myitemdata(){
            //console.log(1111, this.$route.params);
            for (let i = 0; i < verdata.output.length; i++) {
                //console.log(1111, this.$route.params);
                if (parseInt(verdata.output[i].imgid) == parseInt(this.imgid)) {
                    //code
                    //console.log(2222, verdata.output[i]);
                    return verdata.output[i];
                }
            };
        },
        itemeststreet(){
            if (this.myitemdata) {
                //code
                return this.myitemdata.eststreet;
            }else{
                return
            }
        }
      }
    }
</script>
<style>
    .fmetadata p{
    font-size:smaller;
}
</style>
