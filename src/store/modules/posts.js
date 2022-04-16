import apiFetch from '@/utils/api';

export default {
  actions: {
    async fetchPosts({ commit }, params) {
      let q = '';
      if (params.query) q = `&q=${params.query}`
      const res = await apiFetch(
        `https://jsonplaceholder.typicode.com/posts?_embed=comments&_limit=${params.limit}${q}`
      )
      if (!res.ok) {return;}
      const posts = await res.json()
      commit('updatePosts', posts)
    },
    async fetchPostById({ commit }, id) {
      commit('updateIsLoading', true)
      const res = await apiFetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      commit('updateIsLoading', false)
      if (!res.ok) {return;}
      const post = await res.json()
      commit('updatePost', post)
    },
    async fetchCommentsByPostId({ commit }, id) {
      const res = await apiFetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments `
      )
      if (!res.ok) {return;}
      const comments = await res.json()
      commit('updateComments', comments)
    },
    async sendPost({ commit }, data) {
      const request = {
        body: data.body
      }
      const res = await apiFetch(
        `https://jsonplaceholder.typicode.com/posts/${data.id}`, {
          method: 'PUT',
          body: JSON.stringify(request)
        }
      )
      if (res.ok) commit('editPost', data.body)
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    updatePost(state, post) {
      state.post = post
    },
    updateComments(state, comments) {
      state.comments = comments
    },
    updateIsLoading(state, isLoading) {
      state.isLoading = isLoading
    },
    editPost(state, postBody) {
      state.post.body = postBody
    }
  },
  state: {
    isLoading: false,
    posts: [],
    post: {},
    comments: []
  },
}
