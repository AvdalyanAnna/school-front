<template>
  <li>
    <nuxt-link
      :class="{ active: active }"
      id="team-tab1-tab"
      data-bs-toggle="tab"
      data-bs-target="#team-tab1"
      role="tab"
      aria-controls="team-tab1"
      aria-selected="false"
      :to="item.link"
      @click.prevent="$emit('click')"
    >
      <div class="rbt-team-thumbnail">
        <div class="thumb">
          <v-img :src="item.avatar || `/team/team-0${item.id}.jpg`" :alt="item.first_name"/>
        </div>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          link: '#',
          img: 'team/team-01.jpg',
        }
      },
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
