<template>
  <div class="rbt-rbt-blog-area rbt-section-gap bg-color-extra2">
    <div class="container">
      <div class="row g-5 align-items-center mb--30">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="section-title">
            <span class="subtitle bg-pink-opacity">Blog Post</span>
            <h2 class="title">Post Popular Post.</h2>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="read-more-btn text-start text-md-end">
            <v-btn url="blog" isGradient btn-icon1="feather-arrow-right" btn-icon2="feather-arrow-right">See All Articles</v-btn>
          </div>
        </div>
      </div>
      <!-- Start Card Area -->
      <div class="row row--15">
        <!-- Start Single Card  -->
        <div
          class="col-lg-6 col-md-12 col-sm-12 col-12 mt--30 sal-animate"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <div class="rbt-card variation-02 height-330 rbt-hover">
            <div class="rbt-card-img">
              <nuxt-link :to="blogList[0].link">
                <v-img :src="blogList[0].img" alt="Card image" />
              </nuxt-link>
            </div>
            <div class="rbt-card-body">
              <h3 class="rbt-card-title">
                <nuxt-link :to="blogList[0].link">{{
                  blogList[0].name
                }}</nuxt-link>
              </h3>
              <p class="rbt-card-text">
                {{ blogList[0].desc }}
              </p>
              <div class="rbt-card-bottom">

                <nuxt-link class="transparent-button" :to="blogList[0].link"
                  >Learn More<i
                    ><svg
                      width="17"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#27374D" fill="none" fill-rule="evenodd">
                        <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                        <path
                          stroke-linecap="square"
                          d="M.663 5.572h14.594"
                        ></path>
                      </g></svg></i
                ></nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Card  -->
        <div
          class="col-lg-6 col-md-12 col-sm-12 col-12 mt--30 sal-animate"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <!-- Start Single Card  -->
          <template v-for="(item, index) in blogList">
            <div
              class="rbt-card card-list variation-02 rbt-hover"
              :class="{ 'mt--30': index > 1 }"
              :key="index"
              v-if="index !== 0"
            >
              <div class="rbt-card-img">
                <nuxt-link :to="item.link">
                  <v-img :src="item.img" />
                </nuxt-link>
              </div>
              <div class="rbt-card-body">
                <h5 class="rbt-card-title">
                  <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
                </h5>
                <div class="rbt-card-bottom">
                  <nuxt-link class="transparent-button" :to="item.link"
                    >Read Article<i
                      ><svg
                        width="17"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#27374D" fill="none" fill-rule="evenodd">
                          <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                          <path
                            stroke-linecap="square"
                            d="M.663 5.572h14.594"
                          ></path>
                        </g></svg></i
                  ></nuxt-link>
                </div>
              </div></div
          ></template>

          <!-- End Single Card  -->
        </div>
      </div>
      <!-- End Card Area -->
    </div>
  </div>
</template>

<script>
import blogs from '@/data//home/blog.js'
export default {
  name: 'BlogCard',
  setup() {
    const blogList = blogs

    return { blogList }
  },
}
</script>
