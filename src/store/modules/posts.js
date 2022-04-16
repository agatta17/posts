export default {
  actions: {
    async fetchPosts({ commit }, limit = 9) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_embed=comments&_limit=${limit}`
      )
      const posts = await res.json()
      commit('updatePosts', posts)
    },
    async fetchPostById({ commit }, id) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      const post = await res.json()
      commit('updatePost', post)
    },
    async fetchCommentsByPostId({ commit }, id) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments `
      )
      const comments = await res.json()
      commit('updateComments', comments)
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
    }
  },
  state: {
    posts: [],
    post: {},
    comments: []
  },
  // getters: {
  //   validPosts(state) {
  //     return state.posts.filter(p => {
  //       return p.title && p.body
  //     })
  //   },
}
