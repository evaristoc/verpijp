<template>
    
    <transition appear>
        <h2>Answer</h2>
    </transition>
</template>
<style>
 .v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>