<template>
  <section class="file-upload">
    <input id="file-input" class="file" type="file" name="files" multiple />
    <label for="file-input" class="file-picker">choose or drag an image</label>
    <div class="separator">or</div>
    <input class="input" placeholder="paste image or url" />
  </section>
</template>

<script >
  export default {
    name: "FileForm",
  };
</script>
