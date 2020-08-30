<template>
  <small class="info-message">
    <fa-icon :icon="['fas', 'info-circle']" />
    <span>{{tip}}</span>
  </small>
</template>

<script>
  const tips = ["最近どうですか？"];

  export default {
    name: "TheFormTip",

    data() {
      return {
        tip: tips[~~(Math.random() * tips.length)],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .info-message {
    user-select: none;
    color: white;
    opacity: 0.55;
    text-align: center;
    margin-top: 1.5rem;
  }
</style>