<template>
  <section class="form">
    <form enctype="multipart/form-data">
      <label class="img-upload-box">
        <input @change="queue" class="img-input" type="file" name="files[]" />
        <span class="icon">
          <fa-icon icon="upload" />
        </span>
        <span>choose an image...</span>
      </label>
    </form>
    <div class="img-upload" v-for="image in images" :key="image.origin">
      <div class="left">
        <fa-icon class="angle-right" icon="angle-right" />
        <a target="_blank" :href="image.origin" class="img-link">{{image.name}}</a>
      </div>
      <div class="right">
        <button @click="copy(image.origin)" class="copy-button">
          <span class="icon">
            <fa-icon class="wave" icon="copy" />
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script >
  export default {
    name: "TheFileForm",

    data() {
      return {
        images: [
          {
            name: "yp2LCg.png",
            origin: "https://i.waifu.pics/P817hp4.jpg",
          },
        ],
      };
    },

    methods: {
      async queue(event) {
        const name = event.target.name;
        const images = event.target.files;

        const formData = new FormData();

        if (!images.length) return;

        Array.from(Array(images.length).keys()).map((x) => {
          formData.append(name, images[x], images[x].name);
        });

        return await this.upload(formData);
      },
      async upload(images) {
        try {
          const data = await this.$axios.$post("/v1/file", images);

          this.images = data;

          return this.$toast.global.success("🍣 file uploaded");
        } catch (error) {
          this.$toast.global.error(error.response.data.message);
        }
      },
      async copy(link) {
        await this.$copyText(link);

        this.images = this.images.filter((img) => img.origin !== link);

        this.$toast.global.success("🍣 link copied");
      },
    },
  };
</script>

<style lang="scss" scoped>
  .img-input {
    display: none;
    position: absolute;
  }

  .img-upload-box {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    color: #fff;
    padding: 1em 2em;
    border-radius: 0.25rem;
    background: #232533;

    &:hover {
      filter: brightness(115%);
    }
  }

  .img-upload {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;

    .img-link {
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .copy-button {
      cursor: pointer;
      font: inherit;
      border-radius: 0.25rem;
      border: none;
      color: white;
      background: #00cc74;
    }
  }

  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
</style>