import Vue from 'vue'
import Router from 'vue-router'
import News from '@/view/news'

Vue.use(Router)



export const constantRouterMap = [
  {
    path: '/',
    component: News,
  },
  
]

export default new Router({
  // mode: 'history',  require service support
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

