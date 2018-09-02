import Vue from 'vue'
import Router from 'vue-router'

import Intro from '@/components/Intro'
import Day from '@/components/Day'
import Calendar from '@/components/Calendar'
import Setting from '@/components/Setting'
import About from '@/components/About'

Vue.use(Router)

// 라우터로 지정한 컴포넌트가 임포트 되지 않았다.
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/day/:date',
      name: 'day',
      component: Day
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
