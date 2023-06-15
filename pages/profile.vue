<template>
    <div class="rbt-page-banner-wrapper pt--150">
        <!-- Start Banner BG Image  -->
        <div class="rbt-banner-image"></div>
        <!-- End Banner BG Image  -->
    </div>
<!-- Start Card Style -->
    <div v-if="$user.user" class="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <v-dashboard-content/>
                    <div class="row g-5">
                        <div class="col-lg-3">
                            <v-default-sidebar/>
                        </div>

                        <div class="col-lg-9">
                            <div class="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
                                <div class="content">
                                    <div class="section-title">
                                        <h4 class="rbt-title-style-3">Dashboard</h4>
                                    </div>
                                    <div class="row g-5">
                                        <!-- Start Single Card  -->
                                        <div v-if="lesson" class="col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div class="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-primary-opacity">
                                                <div class="inner">
                                                    <div class="rbt-round-icon bg-primary-opacity">
                                                        <i class="feather-book-open"></i>
                                                    </div>
                                                    <div class="content">
                                                        <h3 class="counter without-icon color-primary">
                                                            <span class="odometer">{{ lesson.length }}</span>
                                                        </h3>
                                                        <span class="rbt-title-style-2 d-block">Lessons</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Single Card  -->

                                        <!-- Start Single Card  -->
                                        <div v-if="certificate" class="col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div class="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-violet-opacity">
                                                <div class="inner">
                                                    <div class="rbt-round-icon bg-violet-opacity">
                                                        <i class="feather-award"></i>
                                                    </div>
                                                    <div class="content">
                                                        <h3 class="counter without-icon color-violet">
                                                            <span class="odometer">{{ certificate.length }}</span>
                                                        </h3>
                                                        <span class="rbt-title-style-2 d-block">Certificate</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Single Card  -->
                                    </div>
                                </div>
                            </div>
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
import {$axios, authUrl} from "~/utils/api";

const $user = useUserStore()
const lesson = ref(null)
const certificate = ref([])
const getHistory = async () => {
    const {data} = await $axios(authUrl.histories)
    lesson.value = data
}
onMounted(async () => {
    await getHistory()
    // const {data} = await $axios(authUrl.certificates)
    // certificate.value = data
} )
</script>
