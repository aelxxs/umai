<template>
  <footer class="footer" style="user-select: none;">
    <a href="/discord" class="link">
      <fa-icon class="fa-lg" :icon="['fab','discord']" :style="{ color: '#7289DA' }" />
      <span class="text">discord</span>
    </a>:
    <a href="/github" class="link">
      <fa-icon class="fa-lg" :icon="['fab','github-alt']" :style="{ color: 'white' }" />
      <span class="text">github</span>
    </a>:
    <a href="/sharex" class="link">
      <fa-icon class="fa-lg" icon="share" :style="{ color: '#ff304f' }" />
      <span class="text">sharex</span>
    </a>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
  };
</script>
