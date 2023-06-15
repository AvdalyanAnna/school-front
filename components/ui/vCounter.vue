<template>
  <div>
    <countup :startVal="0" :endVal="countNumber" :duration="2" />
  </div>
</template>

<script>
import CountUp from 'vue-countup';

export default {
  components: {
    CountUp,
  },
  props: {
    countNumber: {
      type: Number,
      required: true,
    },
  },
};
</script>
