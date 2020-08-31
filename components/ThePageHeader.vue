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

  @keyframes tada {
    from {
      transform: scale3d(1, 1, 1);
    }
    10%,
    20% {
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }
    30%,
    50%,
    70%,
    90% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }
    40%,
    60%,
    80% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes bounceInDown {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0) scaleY(3);
    }

    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0) scaleY(0.9);
    }

    75% {
      transform: translate3d(0, -10px, 0) scaleY(0.95);
    }

    90% {
      transform: translate3d(0, 5px, 0) scaleY(0.985);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
</style>