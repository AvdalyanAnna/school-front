<template>
<!-- Start Dashboard Top  -->
    <div class="rbt-dashboard-content-wrapper">
        <div class="tutor-bg-photo bg_image bg_image--23 height-350"></div>
        <!-- Start Tutor Information  -->
        <div class="rbt-tutor-information">
            <div class="rbt-tutor-information-left">
                <div class="thumbnail rbt-avatars size-lg">
                    <v-img
                            :src="`team/avatar.jpg`"
                            alt="Instructor"
                    />
                </div>
                <div class="tutor-content">
                    <h5 class="title">{{ $user.user.first_name }} {{ $user.user.last_name }}</h5>
                    <ul class="rbt-meta rbt-meta-white mt--5">
                        <li><i class="feather-book"></i>5 Courses Enroled</li>
                        <li><i class="feather-award"></i>0 Certificate</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- End Tutor Information  -->
    </div>
<!-- End Dashboard Top  -->
</template>
<script setup>
import {useUserStore} from '@/store/user'

const $user = useUserStore()

</script>
