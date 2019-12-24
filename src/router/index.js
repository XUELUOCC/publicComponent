import Vue from 'vue'
import Router from 'vue-router'
import Country from '@/components/Country'
import HomePage from '@/components/HomePage'
import NavBar from '@/common/NavBar/NavBar'
import Person from '@/components/Person'
import IdentifyCode from '@/components/IdentifyCode'
import Model from '@/components/Model'
import InfiniteScroll from '@/common/infiniteScroll/InfiniteScroll.vue'
import DatePicker from '@/common/DatePicker/DatePicker.vue'
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
      path:'/identifyCode',
      name:'IdentifyCode',
      component:IdentifyCode
    },
    {
      path:'/model',
      name:'Model',
      component:Model
    },
    {
      path:'/infiniteScroll',
      name:'InfiniteScroll',
      component:InfiniteScroll
    },
    {
      path:'/datePicker',
      name:'DatePicker',
      component:DatePicker
    }
    
  ]
})
