import { createRouter, createWebHistory } from 'vue-router'
import Routes from './routes.js'

const Router = createRouter({
   routes: Routes,
   history: createWebHistory()
})

export default Router