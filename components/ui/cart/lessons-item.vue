<template>
  <!-- Start Single Lesson  -->
  <div class='col-lg-4 col-md-6 col-12'>
    <div class='rbt-card  variation-01 rbt-hover' :class="{'card-success':isShow(item.id)}">
      <div class='rbt-card-body text-center'>
        <p class='rbt-card-text'>
          {{ index }}
        </p>

        <h4 class='rbt-card-title'>
          <nuxt-link :to='`/lessons/${item.slug}`'>{{ item.title }}</nuxt-link>
        </h4>
      </div>
    </div>
  </div>
  <!-- End Single Course  -->
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 1
    },
    history: {
      type: Array,
      default: []
    },
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
  methods: {
    isShow(id) {
      const hasId = this.history.find(el => id === el)
      return hasId
    }
  }
}
</script>

<style lang='scss'>
.card-success{
  position: relative;
  &::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 5px;
    bottom: 0;
    left: 0;
    background: greenyellow;
  }
}
</style>