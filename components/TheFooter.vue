<template>
  <footer class="footer">
    <a href="https://discord.gg/AuWCjAb" class="footer-link">
      <span class="icon">
        <fa-icon class="fa-lg" :icon="['fab','discord']" :style="{ color: '#7289DA' }" />
      </span>
      <span class="link-text">Discord</span>
    </a>
    <span>&#58;</span>
    <a href="https://github.com/ohagiiman" class="footer-link">
      <span class="icon">
        <fa-icon class="fa-lg" :icon="['fab','github-alt']" :style="{ color: 'white' }" />
      </span>
      <span class="link-text">Github</span>
    </a>
    <span>&#58;</span>
    <a href="/" class="footer-link">
      <span class="icon">
        <fa-icon class="fa-lg" icon="star" :style="{ color: '#ff304f' }" />
      </span>
      <span class="link-text">Dunno</span>
    </a>
  </footer>
</template>

<script>
  export default {
    name: "TheFooter",
  };
</script>

<style lang="scss" scoped>
  .footer {
    color: inherit;
    display: flex;
    text-align: center;
    align-items: center;
    margin-bottom: 1.2rem;
    user-select: none;
    animation: bounceInUp 1s 1;

    .footer-link {
      color: inherit;
      display: flex;
      margin: 0 1.25rem;
      text-decoration: none;

      .link-text {
        color: inherit;
        margin-left: 0.25rem;
        display: none;
      }

      &:hover {
        .link-text {
          display: block;
          text-decoration: underline;
          animation: fade-in 0.1s;
        }
      }
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0) scaleY(5);
    }

    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0) scaleY(0.9);
    }

    75% {
      transform: translate3d(0, 10px, 0) scaleY(0.95);
    }

    90% {
      transform: translate3d(0, -5px, 0) scaleY(0.985);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
</style>