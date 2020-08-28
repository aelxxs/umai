<template>
  <form style="padding: 1rem;" @submit.prevent="shorten">
    <input
      @input="copied = true"
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
        copied: true,
      };
    },

    methods: {
      async shorten() {
        if (!this.done) return;

        try {
          this.done = false;

          const { origin } = await this.$axios.$post(
            "https://api.umai.pw/v1/url",
            {
              url: this.url,
            }
          );

          this.url = origin;
          this.copied = false;

          this.$toast.success("🍣 link shortened", { timeout: 2000 });
        } catch (error) {
          this.url = "";
          this.copied = true;

          this.$toast.error(error.response.data.message, {
            timeout: 2000,
          });
        } finally {
          this.done = true;
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
