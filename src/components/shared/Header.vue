<template>
  <header class="header">
    <router-link to="/" class="link">
      <img
        src="@/assets/logo.png"
        alt="Logo"
        class="logo"
      />CookIdea</router-link
    >
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 1000;

  padding: 20px;
  background: var(--vt-c-black-mute);

  .logo {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  .link {
    display: flex;
    align-items: center;
    width: fit-content;
    color: #ffd585;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
  }
}
</style>
