import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    name: 'Home',
    // 当项目较大的时候可以用异步加载组件
    // 项目小的时候不用，
    // 因为这时由于异步加载多发送的http请求消耗的性能远多于一次性加载全部app.js
    // component: () => import('@/pages/home/Home')
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
  ],
  scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
})
