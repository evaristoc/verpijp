//import Home from '../App.vue' //map is my MAIN
import Home from '../components/ecHome.vue'
import MainSidebar from '../components/ecMainSidebar.vue'
import Gallery from '../components/ecPhotoGallery.vue'
import GenAbout from '../components/ecGeneralAbout.vue'

export const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/main',
    name: 'mainsidebar',
    component: MainSidebar,
    children: [
      {
        path: 'gallery', //CHECKOUT the slash! without it, it will be appended to parent directly, otherwise it would be to root
        name: 'gallery',
        component: Gallery
      },
      {
        path: 'about',
        name: 'about',
        component: GenAbout
      },      
    ]
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

