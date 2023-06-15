<template>
  <div class="col-lg-4 col-md-6 col-sm-12 col-12">
    <div class="rbt-card variation-02 rbt-hover">
      <div class="rbt-card-img">
        <nuxt-link :to="item.link">
          <v-img :src="item.image" alt="Card image" />
        </nuxt-link>
      </div>
      <div class="rbt-card-body">
        <h5 class="rbt-card-title">
          <nuxt-link :to="item.link">
            {{ item.title }}
          </nuxt-link>
        </h5>
        <p class="rbt-card-text">
          {{ item.desc }}
        </p>
        <div class="rbt-card-bottom">
          <nuxt-link class="transparent-button" :to="item.link">
            Learn More
            <i>
              <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#27374D" fill="none" fill-rule="evenodd">
                  <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                  <path stroke-linecap="square" d="M.663 5.572h14.594" />
                </g>
              </svg>
            </i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
