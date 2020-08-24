<template>
  <div class="wrapper">
    <header class="header">
      <h2 class="title">{{ `${emoji} うまい ！` }}</h2>
    </header>
    <div class="container">
      <nav class="nav">
        <span class="item selected">
          <fa-icon icon="link" />
        </span>
        <span>
          <small>/</small>
        </span>
        <span class="item">
          <fa-icon icon="image" />
        </span>
      </nav>
      <form @submit.prevent="shorten">
        <input
          class="input"
          required
          v-model="url"
          :placeholder="`${emoji} enter a long url`"
          maxlength="50000"
          minlength="5"
        />
        <button
          :disabled="url.length < 5"
          type="submit"
          class="shorten"
          @click="copied ? shorten() : copy()"
        >
          <span class="icon">
            <fa-icon
              :class="url.length > 5 ? 'wave' : ''"
              :icon="['fas', copied ? 'link' : 'copy']"
            />
          </span>
          <span>{{ copied ? 'shorten' : 'copy' }}</span>
        </button>
      </form>
      <small class="info">
        <fa-icon :icon="['fas', 'question-circle']" />
        <span>最近どうですか？</span>
      </small>
    </div>
    <footer class="footer">
      <nuxt-link class="link" to="/discord">
        <fa-icon class="fa-lg" :icon="['fab','discord']" :style="{ color: '#7289DA' }" />
        <span class="text">discord</span>
      </nuxt-link>:
      <nuxt-link class="link" to="/github">
        <fa-icon class="fa-lg" :icon="['fab','github-alt']" :style="{ color: 'white' }" />
        <span class="text">github</span>
      </nuxt-link>:
      <nuxt-link class="link" to="/email">
        <fa-icon class="fa-lg" icon="envelope" :style="{ color: '#f14668' }" />
        <span class="text">email</span>
      </nuxt-link>
    </footer>
  </div>
</template>

<script >
  export default {
    data() {
      return {
        url: "",
        done: true,
        error: null,
        copied: true,
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

    methods: {
      async shorten() {
        if (!this.done) return;

        this.done = false;

        try {
          const data = await this.$axios.$post("/api/url", {
            url: this.url,
          });

          this.url = data.origin;
          this.copied = false;

          this.$toast.success("🍣 link shortened", { timeout: 2000 });

          this.done = true;
        } catch (error) {
          this.done = true;
          this.url = "";
          this.$toast.error(error.response.data.message, {
            timeout: 2000,
          });
        }
      },

      async copy() {
        await this.$copyText(this.url);
        this.url = "";
        this.copied = true;

        this.$toast.success("🍣 link copied", { timeout: 2000 });
      },
    },
  };
</script>
