import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Catalog from '../views/Catalog.vue'
import Help from '../views/Help.vue'
import Profile from '../views/Profile.vue'

const Routes = [
   {
      path: '/',
      component: Home,
      meta: {
         label: "Home"
      }
   },
   {
      path: '/about',
      component: About,
      meta: {
         label: "About"
      }
   },
   {
      path: '/catalog',
      component: Catalog,
      meta: {
         label: "Catalog"
      }
   },
   {
      path: '/help',
      component: Help,
      meta: {
         label: "Help"
      }
   },
   {
      path: '/profile',
      component: Profile,
      meta: {
         label: "Profile"
      }
   },
]

export default Routes
