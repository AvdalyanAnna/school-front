<template>
  <div class="rbt-categories-area bg-color-white rbt-section-gapBottom mt--200">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title">
              Կատեգորիաներ
            </h2>
          </div>
        </div>
      </div>
      <div class="row g-5 mt--20">
        <!-- Start Category Box Layout  -->
        <category-item
          v-for="(item, index) in category.list"
          :key="index"
          :item="item"
        />
        <!-- End Category Box Layout  -->

      </div>
    </div>
  </div>
</template>

<script>
// import { onCreated } from '@nuxtjs/composition-api'
import categoriesList from '@/data/categories'
import { $axios, $url } from "../utils/api";
import { reactive } from 'vue'

export default {
  setup() {
    let category = reactive({
      list:[]
    })

    const getCategory = async () => {
     const {data} = await $axios($url.categories)
      category.list = data
    }

    onMounted(() => {
      getCategory()
    })
    return { category }
  }
}
</script>
