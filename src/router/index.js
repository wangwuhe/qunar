import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home.vue'
import City from '@/components/city/City.vue'
import Detail from '@/components/details/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
