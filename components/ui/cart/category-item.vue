<template>
  <!-- Start Category Box Layout  -->
  <div class='col-lg-3 col-md-6 col-sm-6 col-12'>
    <nuxt-link
      class='rbt-cat-box rbt-cat-box-1 text-center'
      :to='getLink(item.slug)'
    >
      <div class='inner'>
        <div class='icons'>
          <v-img :src="item.image || '/category/web-design.png'" :alt='item.title' />
        </div>
        <div class='content'>
          <h5 class='title'>{{ item.title }}</h5>
          <div class='read-more-btn'>
            <span class='rbt-btn-link'>
              տեսնել ավելին
              <i class='feather-arrow-right'></i>
            </span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
  <!-- End Category Box Layout  -->
</template>

<script>
import { useUserStore } from '@/store/user'

export default {
  props: {
    item: {
      type: Object,
      default: () => ({
        img: 'category/web-design.png',
        title: 'Web Design',
        desc: '25 Courses',
        link: '#'
      })
    }
  },
  setup() {

    const $user = useUserStore()
    const getLink = function(link) {
      console.log($user.user, $user)
      return $user.user.id ? `/category/${link}` :'/login'
    }
    getLink('1')
    return {
      getLink
    }
  }
}
</script>
