<template>
  <div class="not-found">
    <h1 class="title">404</h1>
    <p class="text">Oops! The page you are looking for does not exist.</p>
    <router-link to="/" class="link">Go back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
.not-found {
  text-align: center;
  margin-top: 100px;

  .title {
    font-size: 6rem;
    color: #ff6b6b;
  }

  .text {
    font-size: 1.5rem;
    margin: 20px 0;
  }

  .link {
    font-size: 1.2rem;
    text-decoration: none;
    transition: color 0.3s;
  }
}
</style>
