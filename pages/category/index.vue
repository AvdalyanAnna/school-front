<template>
<!-- Start breadcrumb Area -->
    <div class="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1 pt--200">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner text-center">
                        <h2 class="title">Categories</h2>
                        <ul class="page-list">
                            <li class="rbt-breadcrumb-item"><a href="index.html">Home</a></li>
                            <li>
                                <div class="icon-right"><i class="feather-chevron-right"></i></div>
                            </li>
                            <li class="rbt-breadcrumb-item active">Categories</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- End Breadcrumb Area -->
    <div class="rbt-categories-area bg-color-white rbt-section-gap">
        <div class="container">

            <div class="row g-5 mt--30">
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
import { $axios, $url } from "../../utils/api";
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
