<template>
  <div class="container">
    <div class="home" v-if="posts.length">
      <template v-for="post in posts">
        <Post v-if="$mq === 'lg'" :post="post" :key="post.id"/>
        <PostMobile v-else :post="post" :key="post.id"/>
      </template>
    </div>
    <h1 v-else>{{isLoading ? 'Загрузка...' : 'Посты не найдены'}}</h1>
    <Pagination v-if="pagesTotal > 1" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Post: () => import('@/components/Post.vue'),
    PostMobile: () => import ('@/components/PostMobile'),
    Pagination: () => import('@/components/Pagination.vue')
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
    pagesTotal() {
      return this.$store.getters.pagesTotal;
    },
    isLoading() {
      return this.$store.state.posts.isLoading;
    }
  },
  async mounted() {
    if (this.$mq === 'sm') this.$store.commit('updateLimit', 3);
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<style lang="scss">
@media (max-width: 767px) {
  .home {
    padding-bottom: 16px;
  }

  .pagination {
    height: 67px;
    background: #FAFAFA;
    margin: 0 -15px 0 -15px;
    justify-content: center;
  }
}

@media (min-width: 768px) {
  .home {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 40px;
    column-gap: 23px;
    margin-bottom: 40px;
  }

  .pagination {
    justify-content: flex-end;
  }
}
</style>
