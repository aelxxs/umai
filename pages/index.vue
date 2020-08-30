<template>
  <main class="container">
    <nav class="nav">
      <span class="item" :class="current === 0 ? 'selected' : ''" @click="current = 0">urls</span>
      <span>
        <small>/</small>
      </span>
      <span class="item" :class="current === 1 ? 'selected' : ''" @click="current = 1">images</span>
    </nav>
    <TheLinkForm v-show="current === 0" />
    <FileForm v-show="current === 1" />
    <ThePageTip />
  </main>
</template>

<script>
  export default {
    transition: {
      name: "zoom-fade",
      mode: "out-in",
    },

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