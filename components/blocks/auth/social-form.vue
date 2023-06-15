<template>
  <div class="rbt-separator-mid mt--20 mb--20 text-center">
    <v-desc> կամ </v-desc>
  </div>
  <ul class="social-icon social-default justify-content-center">
    <li v-for="item in socialList" :key="item.name">
      <a href="#" @click.prevent="loginWithSocial(item.name)">
        <i :class="item.icon"></i>
      </a>
    </li>
  </ul>
</template>

<script>
const social = [
  {
    icon: 'feather-facebook',
    name: 'facebook',
  },
  {
    icon: 'feather-chrome',
    name: 'google',
  },
]
export default {
  setup() {
    const socialList = social
    const loginWithSocial = (social = 'facebook') => {
      window.location.href = `http://localhost:3000/api/auth/${social}`
    }

    return {
      socialList,
      loginWithSocial,
    }
  },
}
</script>
