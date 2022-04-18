<template>
  <div class="container">
    <div class="home" v-if="posts.length">
      <Post :post="post" v-for="post in posts" :key="post.id"/>
    </div>
    <h1 v-else>Посты не найдены</h1>
    <Pagination v-if="pagesTotal > 1" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Post: () => import('@/components/Post.vue'),
    Pagination: () => import('@/components/Pagination.vue')
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
    pagesTotal() {
      return this.$store.getters.pagesTotal;
    },
  },
  async mounted() {
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  column-gap: 23px;
  margin-bottom: 40px;
}

@media screen and (max-width: 768px) {
  .home {
    grid-template-columns: 1fr;
  }
}

</style>
