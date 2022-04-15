<template>
  <header class="header">
    <div class="header__content container">
      <div class="header__logo">Logo</div>
      <div class="header__column">
        <Search />
        <div class="header__title">Посты</div>
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
