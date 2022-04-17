import apiFetch from '@/utils/api';

export default {
  actions: {
    async fetchPosts({ commit }, params) {
      let query = ''
      if (params.query) query = `&q=${params.query}`
      let page = ''
      if (params.page) {
        page = `&_page=${params.page}`
      } else {
        commit('updatePage', 1)
      }
      const res = await apiFetch(
        `https://jsonplaceholder.typicode.com/posts?_embed=comments${page}&_limit=${params.limit}${query}`
      )
      if (!res.ok) {return;}
      const posts = await res.json()
      const postCount = res.headers.get('x-total-count')
      commit('updatePosts', posts)
      commit('updatePostsCount', postCount)
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
    },
    updateQuery(state, query) {
      state.query = query
    },
    updatePage(state, page) {
      state.page = page
    },
    updatePostsCount(state, postCount) {
      state.postCount = Number(postCount)
    }
  },
  state: {
    isLoading: false,
    limit: 9,
    query: '',
    page: 1,
    posts: [],
    post: {},
    comments: [],
    postCount: 0
  },
}
