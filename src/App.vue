<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <RouterView />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/shared/Footer.vue";
import Header from "./components/shared/Header.vue";
export default {
  components: {
    Footer,
    Header,
  },
};
</script>

<style></style>
