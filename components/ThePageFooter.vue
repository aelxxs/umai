<template>
  <footer class="footer">
    <a taget="_blank" href="https://discord.gg/AuWCjAb" class="footer-link">
      <span class="icon">
        <fa-icon class="fa-lg" :icon="['fab','discord']" :style="{ color: '#7289DA' }" />
      </span>
      <span class="link-text">Discord</span>
    </a>
    <span>&#58;</span>
    <a taget="_blank" href="https://github.com/ohagiiman" class="footer-link">
      <span class="icon">
        <fa-icon class="fa-lg" :icon="['fab','github-alt']" :style="{ color: 'white' }" />
      </span>
      <span class="link-text">GitHub</span>
    </a>
    <span>&#58;</span>
    <a taget="_blank" href="/" class="footer-link">
      <span class="icon">
        <fa-icon class="fa-lg" :icon="['fab', 'twitter']" :style="{ color: '#1DA1F2' }" />
      </span>
      <span class="link-text">Twitter</span>
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
</style>