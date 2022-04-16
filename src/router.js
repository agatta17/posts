import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomePage
    },
    {
      name: 'Post',
      path: '/post:id',
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