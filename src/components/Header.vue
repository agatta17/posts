<template>
  <header class="header">
    <div class="header__content container">
      <router-link to="/" class="header__logo">Logo</router-link>
      <div class="header__column">
        <Search />
        <router-link to="/" class="header__title">Посты</router-link>
      </div>
      </div>
  </header>
</template>

<script>
import Search from '@/components/Search.vue';
export default {
  name: 'Header',
  components: {
    Search
  }
}
</script>

<style lang="scss">
.header {
  margin-bottom: 46px;
  font-family: 'Inter', sans-serif;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
  }

  &__logo {
    font-weight: 700;
    font-size: 20px;
    color: #000;
    text-decoration: none;
  }

  &__column {
    width: 49%;
    min-width: 390px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #FF008A;
    position: relative;
    text-decoration: none;

    &::before {
      content: '';
      position: absolute;
      box-sizing: border-box;
      right: calc(100% + 9px);
      width: 20px;
      height: 12px;
      border: 2px solid #FF008A;
      border-radius: 2px;
    }
    &::after {
      content: '';
      position: absolute;
      box-sizing: border-box;
      right: calc(100% + 9px);
      top: 14px;
      width: 20px;
      height: 6px;
      border-top: 2px solid #FF008A;
      border-bottom: 2px solid #FF008A;
    }
  }
}
</style>
