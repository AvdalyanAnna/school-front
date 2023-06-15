<template>
  <div class="rbt-counterup-area rbt-section-gapBottom bg-gradient-1">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title">Ինչու ընտրել մեզ</h2>
          </div>
        </div>
      </div>
      <div class="row g-5 hanger-line">
        <!-- Start Single Counter  -->
        <div
          v-for="(item, index) in histudy"
          :key="index"
          class="col-lg-3 col-md-6 col-sm-6 col-12"
        >
          <div class="rbt-counterup rbt-hover-03 border-bottom-gradient">
            <div class="top-circle-shape"></div>
            <div class="inner">
              <div class="rbt-round-icon">
                <v-img :src="item.icon" alt="Icons Images" />
              </div>
              <div class="content">
                <h3 class="counter">
                  <span
                    class="odometer odometer-auto-theme"
                    :data-count="item.count"
                  >
                    {{ item.count }}
                  </span>
                </h3>
                <span class="subtitle">{{ item.text }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Counter  -->
      </div>
    </div>
  </div>
</template>

<script>
import hisroryList from '~~/data/home/hisrory'
export default {
  setup() {
    const histudy = hisroryList
    return { histudy }
  },
}
</script>
