<template>
  <header class="header">
    <div class="container">
      <h1 class="header__title">Посты</h1>
      <Search />
    </div>
  </header>
</template>

<script>
import Search from '@/components/Search.vue';
export default {
  name: 'HeaderMobileHome',
  components: {
    Search
  }
}
</script>

<style scoped lang="scss">
.header {
  background: #FAFAFA;
  padding-bottom: 10px;
  font-family: 'Manrope', sans-serif;

  &__title {
    font-weight: 700;
    font-size: 32px;
    color: #000;
    margin: 30px 0 18px 0;
  }
}
</style>
