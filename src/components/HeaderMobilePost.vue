<template>
  <header class="header container">
    <div class="header__back back">
      <div class="back__arrow"></div>
      <router-link to="/" class="back__text">Назад</router-link>
    </div>
    <h1 class="header__title">Пост</h1>
  </header>
</template>

<script>
export default {
  name: 'HeaderMobilePost',
}
</script>

<style scoped lang="scss">
.header {
  font-family: 'Manrope', sans-serif;
  background: #FAFAFA;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 600;
  font-size: 18px;

  &__title {
    margin: 0;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
  }

  &__back {
    position: absolute;
  }

  .back {
    display: flex;
    align-items: center;

    &__arrow {
      width: 7px;
      height: 7px;
      border-top: 2px solid #FF008A;
      border-right: 2px solid #FF008A;
      transform: rotate(-135deg);
      margin-right: 4px;
    }

    &__text {
      text-decoration: none;
      color: #FF008A;
      font-weight: 600;
      font-size: 18px;
    }
  }
}
</style>
