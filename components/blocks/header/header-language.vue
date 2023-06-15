<template>
  <ul class="rbt-dropdown-menu switcher-language">
    <li class="has-child-menu">
      <a href="#">
        <v-img
          class="left-image"
          :src="`icons/${activeLang.img.src}`"
          :alt="activeLang.img.alt"
        />
        <span class="menu-item">{{ activeLang.text }}</span>
        <i class="right-icon feather-chevron-down"></i>
      </a>
      <ul class="sub-menu">
        <li v-for="item in list" :key="item.lang">
          <a href="#" v-if="item.lang !== activeLang.lang">
            <v-img
              class="left-image"
              :src="`icons/${item.img.src}`"
              :alt="item.img.alt"
            />
            <span class="menu-item">{{ item.text }}</span>
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      activeLang: {
        text: 'English',
        lang: 'en',
        img: {
          src: 'en-us.png',
          alt: 'Language Images',
        },
      },
      list: [
        {
          text: 'English',
          lang: 'en',
          img: {
            src: 'en-us.png',
            alt: 'Language Images',
          },
        },
        {
          text: 'Français',
          lang: 'fr',
          img: {
            src: 'fr.png',
            alt: 'Language Images',
          },
        },
        {
          text: 'Deutsch',
          lang: 'de',
          img: {
            src: 'de.png',
            alt: 'Language Images',
          },
        },
      ],
    }
  },
}
</script>
