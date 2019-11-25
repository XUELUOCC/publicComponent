import Vue from 'vue'
import Router from 'vue-router'
import Country from '@/components/Country'
import HomePage from '@/components/HomePage'
import NavBar from '@/common/NavBar/NavBar'
import Person from '@/components/Person'
import Other from '@/components/Other'
import Setting from '@/components/Setting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/homePage'
    },
    {
      path: '/country',
      name: 'Country',
      component: Country
    },
    {
      path:'/homePage',
      name:'HomePage',
      component:HomePage
    },
    {
      path:'/navBar',
      name:'NavBar',
      component:NavBar
    },
    {
      path:'/person',
      name:'person',
      component:Person
    },
    {
      path:'/other',
      name:'other',
      component:Other
    },
    {
      path:'/setting/',
      name:'setting',
      component:Setting
    },
    
  ]
})
