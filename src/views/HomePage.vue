<template>
  <div class="container">
    <div class="home">
      <Post :post="post" v-for="post in posts" :key="post.id" />
    </div>
    <Pagination />
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
    limit() {
      return this.$store.state.posts.limit;
    }
  },
  methods: mapActions(["fetchPosts"]),
  async mounted() {
    this.fetchPosts({limit: this.limit});
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
