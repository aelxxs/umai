<template>
  <div class="wrapper">
    <ThePageHeader />
    <Nuxt />
    <ThePageFooter />
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log(
        `%c umai.pw %c v1.0.0 %c`,
        "background: #191b25; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
        "background: #00cc74; padding: 1px; border-radius: 0 3px 3px 0; color: #fff",
        "background: transparent;"
      );
    },
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    color: #ffffff;
    overflow: hidden;
  }
</style>