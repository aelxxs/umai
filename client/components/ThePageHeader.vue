<template>
  <header class="header">
    <h2 class="title">
      <span>{{emoji}}</span>
      <span>うまい ！</span>
    </h2>
  </header>
</template>

<script>
  export default {
    name: "TheHeader",

    data() {
      return {
        emoji: "",
      };
    },

    mounted() {
      const EMOJIS = [
        "🍣",
        "🍱",
        "🍘",
        "🥠",
        "🥡",
        "🍙",
        "🍚",
        "🍜",
        "🍤",
        "🍥",
        "🥢",
        "🍰",
      ];

      this.emoji = EMOJIS[~~(EMOJIS.length * Math.random())];
    },
  };
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    margin-top: 1.2rem;
    color: white;
    font-size: 19px;
    animation: bounceInDown 1s 1;

    .title {
      &:hover {
        animation: tada 1s 1;
      }
    }
  }
</style>