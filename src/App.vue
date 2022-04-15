<template>
  <div id="app">
    <Header />
    <main class="main">
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Header,
    Footer
  },
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  height: 100%;
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
