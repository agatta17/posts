<template>
  <div id="app">
    <Header v-if="$mq === 'lg'" />
    <HeaderMobileHome v-else-if="$route.name === 'Home'" />
    <main class="main">
      <router-view/>
    </main>
    <Footer v-if="$mq === 'lg'" />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Header: () => import('@/components/Header.vue'),
    HeaderMobileHome: () => import('@/components/HeaderMobileHome.vue'),
    Footer
  },
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  height: 100%;
  font-family: "Manrope", sans-serif;
}
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1 1 auto;
}
.container {
  max-width: 973px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
