<template>
  <ul class="rbt-information-list">
    <li v-for="(item, index) in list" :key="index">
      <a :href="item.link" target="_blank">
        <i :class="item.icon"></i>
        {{ item.text }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [
        {
          text: 'example@gmail.com',
          link: 'mailto:hello@example.com',
          icon: 'feather-mail',
        },
        {
          text: '+1-202-555-0174',
          link: 'tel:+12025550174',
          icon: 'feather-phone',
        },
      ],
    },
  },
}
</script>
