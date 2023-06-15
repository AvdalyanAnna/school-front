<template>
  <!-- Start Service Area -->
  <div class="rbt-service-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title">Why learn with our courses?</h2>
            <p class="description mt--30">
              <strong>Histudy educational platform</strong> ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <!-- Start Card Area -->
      <div class="row row--15 mt_dec--30">
        <!-- Start Service Grid  -->
        <div
          v-for="(item, index) in learnList"
          :key="index"
          class="col-lg-4 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-12 mt--30"
        >
          <div class="service-card service-card-6">
            <div class="inner">
              <div class="icon">
                <v-img :src="item.icon" alt="icons Images" />
              </div>
              <div class="content">
                <h6 class="title">
                  <a href="#">{{ item.title }}</a>
                </h6>
                <v-desc>
                  {{ item.description }}
                </v-desc>
              </div>
              <span class="number-text">{{ index + 1 }}</span>
            </div>
          </div>
        </div>
        <!-- End Service Grid  -->
      </div>
      <!-- End Card Area -->
    </div>
  </div>
  <!-- End Service Area -->
</template>

<script>
export default {
  setup() {
    const learnList = [
      {
        icon: 'icons/001-bulb.png',
        title: 'Your Apply',
        description:
          'English Learning looking for random paragraphs, you’ve come to the right place.',
      },
      {
        icon: 'icons/002-hat.png',
        title: 'We Connect',
        description:
          'Javascript Learning looking for random paragraphs, you’ve come to the right place.',
      },
      {
        icon: 'icons/003-id-card.png',
        title: 'You Get Ready',
        description:
          'Angular Learning looking for random paragraphs, you’ve come to the right place.',
      },
      {
        icon: 'icons/004-pass.png',
        title: 'Completed',
        description:
          'Php Learning looking for random paragraphs, you’ve come to the right place.',
      },
    ]

    return { learnList }
  },
}
</script>
