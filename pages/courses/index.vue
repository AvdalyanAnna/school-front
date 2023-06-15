<template>
    <div class="rbt-page-banner-wrapper pt--200">
        <!-- Start Banner BG Image  -->
        <div class="rbt-banner-image"></div>
        <!-- End Banner BG Image  -->
        <div class="rbt-banner-content">

            <!-- Start Banner Content Top  -->
            <div class="rbt-banner-content-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <!-- Start Breadcrumb Area  -->
                            <ul class="page-list">
                                <li class="rbt-breadcrumb-item"><a href="index.html">Home</a></li>
                                <li>
                                    <div class="icon-right"><i class="feather-chevron-right"></i></div>
                                </li>
                                <li class="rbt-breadcrumb-item active">All Courses</li>
                            </ul>
                            <!-- End Breadcrumb Area  -->
                            <div class=" title-wrapper">
                                <h1 class="title mb--0">All Courses</h1>
                                <a href="#" class="rbt-badge-2">
                                    <div class="image">🎉</div> {{course.list.length}} Courses
                                </a>
                            </div>
                            <p class="description">Courses that help beginner designers become true unicorns. </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Banner Content Top  -->

            <!-- Start Course Top  -->
            <div class="rbt-course-top-wrapper mt--40 mt_sm--20">
                <div class="container">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-5 col-md-12">
                            <div class="rbt-sorting-list d-flex flex-wrap align-items-center">
                                <div class="rbt-short-item switch-layout-container">
                                    <ul class="course-switch-layout">
                                        <li class="course-switch-item">
                                            <button class="rbt-grid-view active" title="Grid Layout">
                                                <i class="feather-grid"></i> <span class="text">Grid</span>
                                            </button>
                                        </li>
                                        <li class="course-switch-item">
                                            <button class="rbt-list-view" title="List Layout">
                                                <i class="feather-list"></i> <span class="text">List</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12">
                            <div class="rbt-sorting-list d-flex flex-wrap align-items-center justify-content-start justify-content-lg-end">
                                <div class="rbt-short-item">
                                    <form action="#" class="rbt-search-style me-0">
                                        <input type="text" placeholder="Search Your Course..">
                                        <button type="submit" class="rbt-search-btn rbt-round-btn">
                                            <i class="feather-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Course Top  -->
        </div>
    </div>
    <div class="rbt-section-overlayping-top rbt-section-gapBottom">
        <div class="inner">
            <div class="container">
                <course-item
                        v-for="(item, index) in course.list"
                        :key="index"
                        :item="item"
                />
            </div>
        </div>
    </div>
</template>

<script>
import course from '@/data/home/courseList'
import {reactive} from "vue";
import {$axios, $url} from "../../utils/api";

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
