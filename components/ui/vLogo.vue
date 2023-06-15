<template>
  <div class="logo">
    <nuxt-link to="/">
      <img :src="`/_nuxt/assets/images/logo/${src}`" :alt="src" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "logo.png",
    },
  },
};
</script>
