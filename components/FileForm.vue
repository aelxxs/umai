<template>
  <div class>
    <form style="padding: 1rem;" enctype="multipart/form-data">
      <input
        ref="file"
        id="file"
        @change="change($event.target.name, $event.target.files)"
        class="file"
        type="file"
        name="files[]"
      />
      <label for="file" class="file-upload file-picker">
        <span class="icon">
          <fa-icon icon="upload" />
        </span>
        <span>choose an image...</span>
      </label>
    </form>
    <div class="file-links" v-for="file in files" :key="file.origin">
      <a target="_blank" class="file-link" :href="file.origin">
        {{file.origin.split('https://')[1]}}
        <img :src="file.origin" class="img-preview" />
      </a>
    </div>
  </div>
</template>

<script >
  export default {
    name: "FileForm",
    data() {
      return {
        url: "",
        files: [
          {
            origin: "https://i.umai.pw/XPbFcc.jpg",
          },
        ],
      };
    },

    methods: {
      async change(fieldName, fileList) {
        const formData = new FormData();

        if (!fileList.length) return;

        Array.from(Array(fileList.length).keys()).map((x) => {
          formData.append(fieldName, fileList[x], fileList[x].name);
        });

        await this.save(formData);
      },

      async save(img) {
        try {
          const data = await this.$axios.$post(
            "https://api.umai.pw/v1/file",
            img
          );

          this.files = data;
          this.$toast.global.success("🍣 file uploaded", { timeout: 2000 });
        } catch (error) {
          this.$toast.global.error(error.response.data.message, {
            timeout: 2000,
          });
        }
      },

      async copy(i) {
        await this.$copyText(this.files[i].origin);
        // this.uploaded = false;
        // this.file = null;

        this.$toast.global.success("🍣 link copied", { timeout: 2000 });
      },
    },
  };
</script>
