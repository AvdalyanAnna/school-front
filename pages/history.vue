<template>
    <div class="rbt-page-banner-wrapper pt--150">
        <!-- Start Banner BG Image  -->
        <div class="rbt-banner-image"></div>
        <!-- End Banner BG Image  -->
    </div>
<!-- Start Card Style -->
    <div class="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <v-dashboard-content/>

                    <div class="row g-5">
                        <div class="col-lg-3">
                            <v-default-sidebar/>
                        </div>

                        <div class="col-lg-9">
                            <!-- Start Enrole Course  -->
                            <div class="rbt-dashboard-content bg-color-white rbt-shadow-box">
                                <div class="content">

                                    <div class="section-title">
                                        <h4 class="rbt-title-style-3">Enrolled Courses</h4>
                                    </div>
                                    <div class="row">
                                        <lessons-item
                                                v-for="(item, index) in lesson"
                                                :key="index"
                                                :index="item.lesson.level"
                                                :item="item.lesson"
                                        />
                                    </div>
                                </div>
                            </div>
                            <!-- End Enrole Course  -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- End Card Style -->
</template>

<script setup>
import {useUserStore} from '@/store/user'
import {authUrl,$axios} from "~/utils/api";

const $user = useUserStore()
const lesson = ref(null)
const getHistory = async () => {
    const {data} = await $axios(authUrl.histories)
    lesson.value = data
}
getHistory()
</script>
