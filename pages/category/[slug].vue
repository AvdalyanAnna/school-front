<template>
    <div class="pt--100">
        <!-- Start Course Area -->
        <div class="rbt-course-area bg-color-extra2 rbt-section-gap pb--10">
            <div class="container">
                <div class="row mb--60">
                    <div class="col-lg-12">
                        <div class="section-title text-center">
                            <h2 class="title">
                                {{ lessons.value.title }}
                            </h2>
                            <v-desc> {{ lessons.value.description }}</v-desc>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Course Area -->
        <div class=" pt--100 pb--100">
            <div class="inner">
                <div class="container">
<!--                  {{lessons.value}}-->

                    <div class="row">
                        <course-item
                                v-for="(item, index) in lessons.value.courses"
                                :key="index"
                                :item="item"
                        />
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {$axios, $url} from "../../utils/api";

const $route = useRoute();
const {slug} = $route.params
const lessons = reactive({
    value: {}
})

const getLessons = async () => {
    const {data} = await $axios(`${$url.categories}/${slug}/courses`)
    lessons.value = data
}

onMounted(() => {
    getLessons()
})
</script>
