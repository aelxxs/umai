<template>
  <main class="main">
    <nav class="nav">
      <span class="nav-item" :class="current === 0 ? 'selected' : ''" @click="current = 0">urls</span>
      <span>
        <small>/</small>
      </span>
      <span class="nav-item" :class="current === 1 ? 'selected' : ''" @click="current = 1">images</span>
    </nav>
    <TheLinkForm v-show="current === 0" />
    <TheImageForm v-show="current === 1" />
    <TheFormTip />
  </main>
</template>

<script>
  export default {
    data() {
      return {
        current: 0,
      };
    },

    methods: {
      switchTab() {
        return (this.current = this.current === 1 ? 0 : 1);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    flex-direction: column;
    animation: zoomIn 0.25s 1;

    .nav {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin-bottom: 1.5rem;

      .nav-item {
        color: inherit;
        opacity: 0.35;
        text-decoration: none;
        cursor: pointer;
        text-align: center;
        margin: 0 0.5rem;

        &:hover {
          opacity: 0.75;
          text-decoration: underline;
        }
      }

      .selected {
        opacity: 1;
        text-decoration: underline;
      }
    }
  }
</style>