<template>
  <footer class="footer" style="user-select: none;">
    <a href="/discord" class="link">
      <fa-icon class="fa-lg" :icon="['fab','discord']" :style="{ color: '#7289DA' }" />
      <span class="text">Discord</span>
    </a>:
    <a href="/github" class="link">
      <fa-icon class="fa-lg" :icon="['fab','github-alt']" :style="{ color: 'white' }" />
      <span class="text">Github</span>
    </a>:
    <a href="/" class="link">
      <fa-icon class="fa-lg" icon="share" :style="{ color: '#ff304f' }" />
      <span class="text">Soon</span>
    </a>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
  };
</script>
