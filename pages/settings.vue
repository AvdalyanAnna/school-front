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
                            <!-- Start Instructor Profile  -->
                            <div class="rbt-dashboard-content bg-color-white rbt-shadow-box">
                                <div class="content">

                                    <div class="section-title">
                                        <h4 class="rbt-title-style-3">Settings</h4>
                                    </div>

                                    <div class="tab-content">
                                        <div class="tab-pane fade active show" id="profile" role="tabpanel"
                                             aria-labelledby="profile-tab">

                                            <user-settings v-if="$user.user" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Instructor Profile  -->
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
const $user = useUserStore()

</script>
