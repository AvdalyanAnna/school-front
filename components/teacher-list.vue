<template>
  <div class="rbt-team-area bg-color-white rbt-section-gap">
    <div class="container">
      <div class="row mb--60">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title">Մեր ուսուցիչները</h2>
          </div>
        </div>
      </div>
      <div class="row g-5">
        <div class="col-lg-7">
          <teacher-big-item :item="teachers.list[activeIndex]" />
        </div>

        <div class="col-lg-5">
          <!-- Start Tab Nav  -->
          <ul class="rbt-team-tab-thumb nav nav-tabs" id="myTab" role="tablist">
            <teacher-item
              v-for="(item, index) in teachers.list"
              :item="item"
              :key="index"
              :active="activeIndex === index"
              @click="changeActiveIndex(index)"
            />
          </ul>
          <!-- End Tab Content  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, ref} from 'vue'
import { $axios, $url } from "../utils/api";

export default {
  setup() {
    const activeIndex = ref(0)
    const teachers = reactive({
      list: [],
    })
    const getTeachers = async () => {
      const {data} = await $axios($url.teachers)
      teachers.list = data
    }
    onMounted(() => {
      getTeachers()
    })
    const changeActiveIndex = (index) => {
      activeIndex.value = index
    }
    return { teachers, activeIndex, changeActiveIndex }
  },
}
</script>
