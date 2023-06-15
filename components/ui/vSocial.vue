<template>
  <ul class="social-icon social-default justify-content-start">
    <li v-for="(item, index) in list" :key="index">
      <a :href="item.link" target="_blank">
        <i :class="item.icon"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          icon: 'feather-facebook',
          link: 'https://www.facebook.com/',
        },
        {
          icon: 'feather-twitter',
          link: 'https://www.twitter.com',
        },
        {
          icon: 'feather-instagram',
          link: 'https://www.instagram.com/',
        },
        {
          icon: 'feather-linkedin',
          link: 'https://www.linkdin.com/',
        },
      ],
    };
  },
};
</script>
