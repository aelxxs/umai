<template>
  <form style="padding: 1rem;" @submit.prevent="shorten">
    <input
      class="input"
      required
      v-model="url"
      placeholder="paste a long url"
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
        <fa-icon :class="url.length > 5 ? 'wave' : ''" :icon="['fas', copied ? 'link' : 'copy']" />
      </span>
      <span class="hidden-mobile">{{ copied ? 'shorten' : 'copy' }}</span>
    </button>
  </form>
</template>

<script >
  export default {
    name: "LinkForm",

    data() {
      return {
        url: "",
        done: true,
        error: null,
        copied: true,
      };
    },

    methods: {
      async shorten() {
        if (!this.done) return;

        this.done = false;

        try {
          const data = await this.$axios.$post("/api/v1/url", {
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
