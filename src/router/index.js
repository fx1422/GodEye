import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Video from 'components/video/video'
import Ranking from 'components/ranking/ranking'
import Account from 'components/account/account'
import ContentBox from 'components/ContentBox/ContentBox'
import NewsContent from 'components/newsContent/newsContent'
import Login from 'components/login/login'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: ':id',
          component: ContentBox
        }
      ]
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/newsContent/:id',
      name: 'newsContent',
      component: NewsContent
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
