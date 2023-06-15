<template>
  <p class="description" :class="descClass"><slot /></p>
</template>

<script>
export default {
  name: 'vDesc',
  props: {
    descClass: {
      type: String,
      default: '',
    },
  },
};
</script>
