<template>
  <img :src="`/_nuxt/assets/images/${src}`" :alt="alt" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: 'logo.png',
    },
    alt: {
      type: String,
      default: 'logo.png',
    },
  },
};
</script>
