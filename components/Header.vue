<template>
  <header class="header">
    <h2 class="title">{{ `${emoji} うまい ！` }}</h2>
  </header>
</template>

<script>
  export default {
    name: "Header",

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
        "🥮",
        "🥢",
        "🍰",
      ];

      this.emoji = EMOJIS[~~(EMOJIS.length * Math.random())];
    },
  };
</script>
