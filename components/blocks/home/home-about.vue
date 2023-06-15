<template>
  <div
    class="rbt-about-area bg-color-white rbt-section-gapTop about-style-1 pb--100"
  >
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6">
          <div class="thumbnail-wrapper">
            <div
              v-for="(item, index) in images"
              :key="index"
              :class="`image-${index + 1}`"
              class="thumbnail "
            >
              <v-img
                :data-parallax="item.parallax"
                :src="item.img"
                alt="Education Images"
                :style="`transform:${transform}`"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="inner pl--50 pl_sm--0 pl_md--0">
            <div class="section-title text-start">
              <span class="subtitle bg-coral-opacity">Know About Us</span>
              <h2 class="title">
                Know About Histudy <br />
                Learning Platform
              </h2>
            </div>

            <p class="description mt--30">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>

            <!-- Start Feature List  -->

            <div class="rbt-feature-wrapper mt--20 ml_dec_20">
              <div class="rbt-feature feature-style-2 rbt-radius">
                <div class="icon bg-pink-opacity">
                  <i class="feather-heart"></i>
                </div>
                <div class="feature-content">
                  <h6 class="feature-title">Flexible Classes</h6>
                  <p class="feature-description">
                    It is a long established fact that a reader will be
                    distracted by this on readable content of when looking at
                    its layout.
                  </p>
                </div>
              </div>

              <div class="rbt-feature feature-style-2 rbt-radius">
                <div class="icon bg-primary-opacity">
                  <i class="feather-book"></i>
                </div>
                <div class="feature-content">
                  <h6 class="feature-title">Learn From Anywhere</h6>
                  <p class="feature-description">
                    Sed distinctio repudiandae eos recusandae laborum eaque non
                    eius iure suscipit laborum eaque non eius iure suscipit.
                  </p>
                </div>
              </div>
            </div>

            <!-- End Feature List  -->
            <div class="about-btn mt--40">
              <a class="rbt-btn btn-gradient hover-icon-reverse" href="#">
                <span class="icon-reverse-wrapper">
                  <span class="btn-text">More About Us</span>
                  <span class="btn-icon"
                    ><i class="feather-arrow-right"></i
                  ></span>
                  <span class="btn-icon"
                    ><i class="feather-arrow-right"></i
                  ></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const images = [
      {
        img: 'about/about-01.png',
        parallax: '{x: 0, y: -20}',
        transform:
          'translate3d(0px, -20px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
      },
      {
        img: 'about/about-02.png',
        parallax: '{x: 0, y: 60}',
        transform:
          'translate3d(0px, 54.12px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
      },
      {
        img: 'about/about-03.png',
        parallax: '{x: 0, y: 80}',
        transform:
          'translate3d(0px, 28.969px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
      },
    ]
    return { images }
  },
}
</script>
