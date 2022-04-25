import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import store from './store'
import { publicPath } from '../vue.config'

console.log(publicPath)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: publicPath,
      component: HomePage
    },
    {
      name: 'Post',
      path: `${publicPath}post:id`,
      component: () => import('@/views/PostPage.vue')
    }
  ]
})

router.afterEach((to) => {
  if (to.name === 'Post') {
    store.dispatch('fetchPostById', to.params.id)
    store.dispatch('fetchCommentsByPostId', to.params.id)
  }
})

export default router