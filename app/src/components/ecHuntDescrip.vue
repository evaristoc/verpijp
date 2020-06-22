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
                    <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>
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