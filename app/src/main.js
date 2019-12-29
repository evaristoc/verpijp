// jshint esversion:6
import Vue from 'vue';
import App from './App.vue';

//routers*******************
import VueRouter from 'vue-router';
import {routes} from './routes'

Vue.use(VueRouter);

//components*****************
import ecMapComponent from './components/ecMapComponent';
import ecMainSidebar from './components/ecMainSidebar';
import ecPhotoGallery from './components/ecPhotoGallery';
import ecNavMainSidebar from './components/ecNavMainSidebar';

Vue.component('ecMapComponent', ecMapComponent);
Vue.component('ecMainSidebar', ecMainSidebar);
Vue.component('ecPhotoGallery', ecPhotoGallery);
Vue.component('ecNavMainSidebar', ecNavMainSidebar);

//https://www.webdesignerdepot.com/2013/03/how-to-use-the-fullscreen-api/
//https://parrot-tutorial.com/jsref/elem_requestfullscreen.html
const elem = document.documentElement;
if (elem.RequestFullscreen) { /* not listed */
    elem.RequestFullscreen();
} else if (elem.mozRequestFullScreen) { /* Mozilla */
    elem.mozRequestFullScreen();
} else if (elem.msRequestFullscreen) { /* MicroSoft */
    elem.msRequestFullscreen();
} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
}

//public Vue Bus component
window.EventBus = new Vue({
    data() {
        return {
            //depijpcenter: {"lat":52.353056, "lng": 4.896111}
            depijpcenter: { "lat": 52.354200, "lng": 4.896411 }
        };
    }
});

//E: Environment variables in Vue-cli 2 and 3
//-- https://stackoverflow.com/questions/10972176/find-the-version-of-an-installed-npm-package
//-- https://stackoverflow.com/questions/50715302/how-to-use-dotenv-with-vue-js
export const loadedGoogleMapsAPI = new Promise((resolve, reject) => {
    if(!document){reject};
    window.GoogleMapsInit = resolve; //E: save in window as global
    let GMap = document.createElement('script'); //E: create a script
    GMap.setAttribute('src',
        "https://maps.googleapis.com/maps/api/js?key="+process.env.VUE_APP_GOOMAPS_KEY5+"&callback=GoogleMapsInit"
    );
    document.body.appendChild(GMap);
});


new Vue({
    routes,
    el: '#app',
    render: h => h(App)
});


//webpack:
//-- also remember to keep node version as 7