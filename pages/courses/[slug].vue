<template>

  <div class='pt--100'>
    <!-- Start Course Area -->
    <div class='rbt-course-area bg-color-extra2 rbt-section-gap pb--10'>
      <div class='container'>
        <div class='row mb--60'>
          <div v-if='course' class='col-lg-12'>
            <div class='section-title text-center'>
              <h2 class='title'>
                {{ course.title }}
              </h2>
              <v-desc> {{ course.description }}</v-desc>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Course Area -->
  </div>
  <div class=' pt--100 pb--100'>
    <div class='inner'>
      <div class='container'>
        <div class='row'>
          <lessons-item
            v-for='(item, index) in lessonsList'
            :key='index'
            :index='index + 1'
            :item='item'
            :history='history'
          />
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { $axios, $url } from '../../utils/api'

const $route = useRoute()
const { slug } = $route.params
const course = ref(null)
const lessonsList = ref(null)
const history = ref(null)

const getCourse = async () => {
  const { data } = await $axios(`${$url.courses}/${slug}`)
  console.log(data)
  course.value = data.course
  history.value = data.history_lessons_id
  const les = await $axios(`${$url.coursesLesson}/${data.course.id}`)
  lessonsList.value = les.data
}
onMounted(() => {
  getCourse()
})
</script>
