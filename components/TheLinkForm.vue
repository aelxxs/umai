<template>
  <section class="form">
    <form @submit.prevent="shorten">
      <input
        @input="copied = true"
        class="link-input"
        required
        v-model="url"
        placeholder="🍣 paste a long url"
        maxlength="1000"
        minlength="5"
      />
      <button
        :disabled="url.length < 5"
        type="submit"
        class="submit-button"
        @click="copied ? shorten() : copy()"
      >
        <span class="icon">
          <fa-icon :class="url.length > 5 ? 'wave' : ''" :icon="['fas', copied ? 'link' : 'copy']" />
        </span>
        <span class="hidden-mobile">{{ copied ? 'shorten' : 'copy' }}</span>
      </button>
    </form>
  </section>
</template>

<script >
  export default {
    name: "TheLinkForm",

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
          const { origin } = await this.$axios.$post("/v1/url", {
            url: this.url,
          });

          this.url = origin;
          this.copied = false;

          return this.$toast.global.success("🍣 link shortened");
        } catch (error) {
          this.copied = true;
          this.url = "";

          return this.$toast.global.error(
            error.response
              ? error.response.data.message
              : "An error occured - Try again?"
          );
        } finally {
          this.done = true;
        }
      },

      async copy() {
        await this.$copyText(this.url);
        this.copied = true;
        this.url = "";

        return this.$toast.global.success("🍣 link copied", { timeout: 2000 });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .link-input {
    font: inherit;
    padding: 0.5rem;
    color: white;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background: #232533;

    &:active,
    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.125em #2c2e40;
    }
    &::placeholder {
      color: white;
      opacity: 0.55;
    }
  }

  .submit-button {
    font: inherit;
    cursor: pointer;
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    color: white;
    background: #00cc74;
    border: 1px solid transparent;

    &:active,
    &:hover,
    &:focus {
      border: 1px solid #191b25;
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
</style>