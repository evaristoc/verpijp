<template>
        <transition appear>
		{{myhunt}}
        <div class="container">
            <div class="row mt-1">
                <div class="col-12">
                    <!--<img src="https://i.ibb.co/zbF6Kt9/8232820489-579018c1cd-b.jpg" class="float-left" width="100%">-->
					<img :src="myhunt.picture" class="float-left" width="100%">
				</div>
            </div>
            <!--<div class="row mt-1">
                <div class="col-12">
                    What is the name of the business with this window?
                </div>
            </div>-->
            <div class="row mt-1">
                <div class="col-12" role="group">
                    <h3>{{myhunt.street}}</h3>
                    <p>{{myhunt.gamedata.descrip}}</p>
                </div>
            </div>
        </div>
    </transition>
    <!--<transition appear>
        <h2>Answer</h2>
    </transition>-->
</template>
<script>
    export default {
        props:['myhunt'],
    }
</script>
<style>
 .v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>