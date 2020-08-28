<template>
  <footer class="footer" style="user-select: none;">
    <a href="https://discord.gg/AuWCjAb" class="link">
      <fa-icon class="fa-lg" :icon="['fab','discord']" :style="{ color: '#7289DA' }" />
      <span class="text">Discord</span>
    </a>:
    <a href="https://github.com/ohagiiman" class="link">
      <fa-icon class="fa-lg" :icon="['fab','github-alt']" :style="{ color: 'white' }" />
      <span class="text">Github</span>
    </a>:
    <a href="/" class="link">
      <fa-icon class="fa-lg" icon="star" :style="{ color: '#ff304f' }" />
      <span class="text">Dunno what to put here lol</span>
    </a>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
  };
</script>
