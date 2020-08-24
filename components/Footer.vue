<template>
  <footer class="footer" style="user-select: none;">
    <nuxt-link class="link" to="/discord">
      <fa-icon class="fa-lg" :icon="['fab','discord']" :style="{ color: '#7289DA' }" />
      <span class="text">discord</span>
    </nuxt-link>:
    <nuxt-link class="link" to="/github">
      <fa-icon class="fa-lg" :icon="['fab','github-alt']" :style="{ color: 'white' }" />
      <span class="text">github</span>
    </nuxt-link>:
    <nuxt-link class="link" to="/email">
      <fa-icon class="fa-lg" icon="envelope" :style="{ color: '#ff304f' }" />
      <span class="text">email</span>
    </nuxt-link>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
  };
</script>
