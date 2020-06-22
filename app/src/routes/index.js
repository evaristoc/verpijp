//https://serversideup.net/building-page-layout-vue-router/

/*
1. define the router-view section, usually a top component, in this case App.vue
2. create a view, which is composed by specific templates, in my case home view include map and sidebar
3. call the view and register it as the routing destination; in my case, home

So it follows:
1. the user check the app
2. it lands in App.vue
3. App.vue brings it to my ROUTER logic (router-view)
4. The first element of my router logic is home

See that path that are NOT taking me to a complete different PAGE, are CHILDREN
In my example, gallery is NOT taking me to a different SIBLING page, but STAYING in this VIEW, only that I have to open
the sidebar to see it

IMPORTANT: If one of the components INSIDE the router-view logic requires data from its CURRENT PARENT,
data MUST be passed (chained) to the router-view for the the components to access it (or use Vuex)

IMPORTANT: home renders because it points to 2 global components that are already registered; otherwise, nothing

References to keep around...
--- https://medium.com/@saidhayani/understand-routing-in-vue-js-with-examples-6da96979c8e3
--- https://regenrek.com/posts/how-to-create-an-animated-vue-sidebar-menu-with-vue-observable/ (check also codepens)
--- https://serversideup.net/building-page-layout-vue-router/
--- https://router.vuejs.org/
--- https://stackoverflow.com/questions/54698133/fixed-sidebar-with-dynamic-content-in-vue-js (dynamic components)

*/

//=========================================

import HomeView from '../views/ecHomeView.vue'; //a component (I wont say it is a view...) that nests map, as well as main sidebar which nest sidebar (both actually the VIEWs in my opinion); all are PUBLIC (main.js)

//this two below are children of home

import GenAbout from '../components/ecGeneralAbout.vue' //the About page

//=========================================

import CamInterf from '../components/ecCameraInterface.vue' //an apart component containing camera features

//=========================================

import lpHuntsView from '../views/ecLPHuntsView.vue'; //viewer

import ListHuntsRL from '../views/ecListHuntsRouterLinks.vue' //a list of links, so a navigator?

import HuntView from '../views/ecHuntView.vue' //viewer

import HuntQ from '../components/ecHuntQues.vue'

import HuntS from '../components/ecHuntSol.vue'

export const routes = [
  {
    path: '',
    name: 'homeview',
    component: HomeView,
  },
  
  {
    path: '/about',
    name: 'mainaboutcomp',
    component: GenAbout
  },  
  
  {
    path:'/testcamera',
    name: 'cameracomp',
    component: CamInterf,
  },
  
  {
    path: '/hunts',
    name: 'huntsview',
    component: lpHuntsView,
    children:[
      {
        path:'',
        name: 'huntlistrl',
        component: ListHuntsRL,
      },
    ]
  },
  {
    path:'/hunt',
    name: 'huntunitview',
    component: HuntView,
    children:[
      {
        path:':spreadid/:id/question',
        name: 'huntquestioncomp',
        component: HuntQ
      },
      {
        path:':spreadid/:id/answer',
        name: 'huntanswercomp',
        component: HuntS,
        beforeEnter: (to, from, next)=>{ if(from.name == 'huntquestioncomp'){ next() } else { next(false) } }
      },          
    ]
  },
  {
    path:'*',
    name:'404',
    redirect:''
  }
  //{
  //  path: '/about',
  //  name: 'about',
  //  // route level code-splitting
  //  // this generates a separate chunk (about.[hash].js) for this route
  //  // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

