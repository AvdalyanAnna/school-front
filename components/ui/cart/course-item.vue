<template>
  <!-- Start Single Course  -->
  <div  class="col-lg-4 col-md-6 col-12">
    <div class="rbt-card variation-01 rbt-hover">
      <div class="rbt-card-img" style='height: 182px;'>

        <nuxt-link :to="`/courses/${item.slug || null}`">
          <v-img :src="item.image || 'course/single-course-02.jpg'" style='height: 182px;object-fit: contain;object-position: center' alt="Card image" />
        </nuxt-link>
      </div>
      <div class="rbt-card-body">
        <div class="rbt-card-top">
          <div class="rbt-review"></div>
        </div>

        <h4 class="rbt-card-title">
          <nuxt-link :to="`/courses/${item.slug}`">{{ item.title }} </nuxt-link>
        </h4>
        <ul class="rbt-meta">
          <li><i class="feather-book"></i>{{ lessonsCount }} Lessons</li>
        </ul>
        <p class="rbt-card-text">
          {{ item.description }}
        </p>
        <div class="rbt-author-meta mb--20" v-if="item.teacher">
          <div class="rbt-avater">
            <nuxt-link to="#">
              <v-img :src="item.teacher.image || 'team/avatar.jpg'" :alt="item.teacher.name" />
            </nuxt-link>
          </div>
          <div class="rbt-author-info">{{ item.teacher.first_name }} {{ item.teacher.last_name }}</div>
        </div>


        <div class="rbt-progress-style-1 mb--20 mt--10">
          <div class="single-progress">
            <h6 class="rbt-title-style-2 mb--10">Complete</h6>
            <div class="progress">
              <div
                class="progress-bar wow fadeInLeft bar-color-success"
                data-wow-duration="0.5s"
                data-wow-delay=".3s"
                role="progressbar"
                :style="`width: ${progress || 0}%`"
                :aria-valuenow="progress || 0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <span class="rbt-title-style-2 progress-number"
                >{{ Math.floor(progress)  || 0}}%</span
              >
            </div>
          </div>
        </div>
          <div class="rbt-card-bottom">

              <nuxt-link class="rbt-btn-link" :to="`/courses/${item.slug}`">
                  Learn More<i class="feather-arrow-right"></i>
              </nuxt-link>
          </div>
<!--        <div class="rbt-card-bottom" v-if="item.progress">-->
<!--          <a-->
<!--            class="rbt-btn btn-sm bg-primary-opacity w-100 text-center"-->
<!--            href="#"-->
<!--          >-->
<!--            Download Certificate-->
<!--          </a>-->
<!--        </div>-->
      </div>
    </div>
  </div>
  <!-- End Single Course  -->
</template>

<script>
import { $axios, $url } from '~/utils/api'

export default {
  props: {
    item: {
      type: Object,
      default: () => ({
        img: 'category/web-design.png',
        title: 'Web Design',
        desc: '25 Courses',
        link: '#',
      }),
    },
  },
  data(){
    return {
      progress:0,
      lessonsCount:0
    }
  },
  async mounted() {
    const {data} = await $axios(`${$url.courses}/${this.item.id}/progress`)
    this.progress = data.progress
    this.lessonsCount = data.courseLessonsCount
  }
}
</script>
