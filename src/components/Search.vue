<template>
  <div class="search">
    <svg class="search__icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.29248 12.8877C8.67871 12.8877 9.95703 12.4395 11.0029 11.6924L14.9375 15.627C15.1201 15.8096 15.3608 15.9009 15.6182 15.9009C16.1577 15.9009 16.5396 15.4858 16.5396 14.9546C16.5396 14.7056 16.4565 14.4648 16.2739 14.2905L12.3643 10.3726C13.186 9.29346 13.6758 7.95703 13.6758 6.50439C13.6758 2.99316 10.8037 0.121094 7.29248 0.121094C3.78955 0.121094 0.90918 2.98486 0.90918 6.50439C0.90918 10.0156 3.78125 12.8877 7.29248 12.8877ZM7.29248 11.5098C4.55322 11.5098 2.28711 9.24365 2.28711 6.50439C2.28711 3.76514 4.55322 1.49902 7.29248 1.49902C10.0317 1.49902 12.2979 3.76514 12.2979 6.50439C12.2979 9.24365 10.0317 11.5098 7.29248 11.5098Z" fill="#3C3C43" fill-opacity="0.6"/>
    </svg>
    <input class="search__input" type=text placeholder="Поиск" v-model="query" @change="fetchPosts" />
  </div>

</template>

<script>
export default {
  name: 'Search',
  computed: {
    query: {
      get: function () {
        return this.$store.state.posts.query;
      },
      set: function (newValue) {
        this.$store.commit('updateQuery', newValue);
      }
    },
    limit() {
      return this.$store.state.posts.limit;
    }
  },
  methods: {
    fetchPosts() {
      this.$store.commit('updatePage', 1);
      this.$store.dispatch('fetchPosts');
    }
  }
}
</script>

<style lang="scss">
.search {
  position: relative;

  &__icon {
    position: absolute;
    top: 16px;
    left: 8px;
  }

  &__input {
    font-size: 17px;
    background: rgba(60, 60, 67, 0.1);
    border-radius: 10px;
    width: 309px;
    height: 50px;
    padding: 0px 16px 0px 36px;
    box-sizing: border-box;
    border: none;
    outline: 0;
  }

  @media (max-width: 768px) {
    &__icon {
      top: 9px;
    }

    &__input {
      width: 100%;
      height: 36px;
    }
  }
}

</style>
