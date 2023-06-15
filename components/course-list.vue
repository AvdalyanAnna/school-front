<template>
  <!-- Start Course Area -->
  <div class="rbt-course-area bg-color-extra2 rbt-section-gap">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle bg-secondary-opacity">
              Top Popular Course
            </span>
            <h2 class="title">
              Histudy Course student <br/>
              can join with us.
            </h2>
          </div>
        </div>
      </div>
      <!-- Start Card Area -->
      <div class="row g-5">
        <course-item
            v-for="(item, index) in course.list"
            :key="index"
            :item="item"
        />
      </div>
      <!-- End Card Area -->

      <div class="row" v-if="course.list.length > 6">
        <div class="col-lg-12">
          <div class="load-more-btn mt--60 text-center">
            <v-btn
                btnIcon1="feather-arrow-right"
                btnIcon2="feather-arrow-right"
                isGradient
            >
              Load More Course ({{  course.list.length - 6 }})
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Course Area -->
</template>

<script>
import course from '@/data/home/courseList'
import {reactive} from "vue";
import {$axios, $url} from "../utils/api";

export default {
  setup() {
    const course = reactive({
      list: []
    })
    const getCourse = async () => {
      const {data} = await $axios($url.courses)
      course.list = data
    }

    onMounted(() => {
      getCourse()
    })
    return {course}
  },
}
</script>
