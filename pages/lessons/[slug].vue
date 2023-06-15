<template>
    <div class="">
        <!-- Start Course Area -->
        <div style="padding:250px 0 100px;" class="rbt-course-area bg-color-extra2 rbt-section-gap">
            <div class="container">
                <div class="row">
                    <div v-if="lesson" class="col-lg-12">
                        <div class="section-title text-center">
                            <h2 class="title">
                                {{ lesson.title }}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Course Area -->
    </div>
    <div v-if="lesson" class=" pt--100 pb--100">
        <div class="inner">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <v-desc> {{ lesson.description }}</v-desc>
                    </div>
                    <div class="col-12 row lesson-button pt--40">
                        <div class="col-6" >
                            <div v-if="lastLesson" class="d-flex align-items-center">
                                <v-btn
                                        :to="`/lessons/${lastLesson.slug}`"
                                        class="rbt-prev"
                                        isGradientBorder
                                        isRound
                                        btnIcon1="feather-arrow-right"
                                        btnIcon2="feather-arrow-right"
                                />
                                <span class="p-2"></span>
                                {{lastLesson.title}}
                            </div>
                            <div v-else class="d-flex align-items-center">
                                <v-btn
                                        :to="`/courses/${lesson.slug}`"
                                        class="rbt-prev"
                                        isGradientBorder
                                        isRound
                                        btnIcon1="feather-arrow-right"
                                        btnIcon2="feather-arrow-right"
                                />
                                <span class="p-2"></span>
                              All lessons
                            </div>
                        </div>
                        <div  class="col-6 d-flex justify-content-end">
                            <div v-if="nextLesson" class="d-flex align-items-center">
                                {{nextLesson.title}}
                                <span class="p-2"></span>
                                <v-btn
                                        :to="`/lessons/${nextLesson.slug}`"
                                        isGradientBorder
                                        isRound
                                        btnIcon1="feather-arrow-right"
                                        btnIcon2="feather-arrow-right"
                                />
                            </div>

                            <div v-else class="d-flex align-items-center">
                                Go to Test!
                                <span class="p-2"></span>
                                <v-btn
                                        :to="`/test/html`"
                                        isGradientBorder
                                        isRound
                                        btnIcon1="feather-arrow-right"
                                        btnIcon2="feather-arrow-right"
                                />
                            </div>
                        </div>
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
const lesson = ref(null)
const lastLesson = ref(null)
const nextLesson = ref(null)

const getCourse = async () => {
    const {data} = await $axios(`${$url.lessons}/${slug}`)
    lesson.value = data.lesson
    lastLesson.value = data.lastLesson
    nextLesson.value = data.nextLesson
}
onMounted(() => {
    getCourse()
})
</script>

<style lang="scss">
.lesson-button{
    .rbt-btn{
        width: 60px;
    }
  .rbt-prev{
    transform: rotate(-180deg);
  }
}
</style>
