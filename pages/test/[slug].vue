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
        <form v-if='tests' ref='form' @submit='send'>
          <input type='hidden' name='courseId' value='4'>
          <div class='row'>
            <div v-for='(item,index) in tests' :key='item.id' class='col-6 mb--20'>
              <h4>{{item.title}}</h4>
              <div v-for='i in item.testAnswers' :key='i.id'>
                <div class="form-check">
                  <input class="form-check-input" type="radio" :value='i.id' :name="`answers[${item.id}]`" :id="`answers${i.id}`">
                  <label class="form-check-label" :for="`answers${i.id}`">
                    {{i.title}}
                  </label>
                </div>
              </div>
            </div>

          </div>
          <v-btn @click='send' type='button' isGradient small isSwitch hoverNoTransform>
            Send
          </v-btn>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { $axios, $url } from '../../utils/api'
import axios from 'axios'

const $route = useRoute()
const { slug } = $route.params
const course = ref(null)
const history = ref(null)
const tests = ref(null)
const form = ref(null)
const resultTest = ref(null)
const getTest = async (id) =>{
  console.log(id)
  const {data} = await $axios(`${$url.tests}/${id}`)
  tests.value = data
}
const getCourse = async () => {
  const { data } = await $axios(`${$url.courses}/${slug}`)
  console.log(data)
  course.value = data.course
  getTest(course.value.id)
}

const send = async () =>{
  const formData = new FormData(form.value);
  let array = {
    courseId:0,
    answers:[]
  }
  for (let [key,value] of formData.entries()) {
    if(key === 'courseId') array.courseId = +value
    else array.answers.push(+value)
  }
  const { data } = await $axios.post(`${$url.tests}/exam`,{
    ...array
  })
  resultTest.value = data.percent
  alert('result: '+ data.percent)
}
onMounted(() => {
  getCourse()
})
</script>
