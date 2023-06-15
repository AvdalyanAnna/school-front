<template>
  <div class='rbt-page-banner-wrapper pt--150'>
    <!-- Start Banner BG Image  -->
    <div class='rbt-banner-image'></div>
    <!-- End Banner BG Image  -->
  </div>
  <!-- Start Card Style -->
  <div class='rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom'>
    <div class='container'>
      <div class='row'>
        <div class='col-lg-12'>
          <v-dashboard-content />

          <div class='row g-5'>
            <div class='col-lg-3'>
              <v-default-sidebar />
            </div>

            <div class='col-lg-9'>
              <div class='rbt-dashboard-content bg-color-white rbt-shadow-box'>
                <div class='content'>
                  <div class='section-title'>
                    <h4 class='rbt-title-style-3'>My Profile</h4>
                  </div>
                  <!-- Start Profile Row  -->
                  <div v-for='(item,index) in info' :key='index'
                       class='rbt-profile-row row row--15 mt--15'>
                    <div class='col-lg-4 col-md-4'>
                      <div class='rbt-profile-content b2'>{{ item.label }}</div>
                    </div>
                    <div class='col-lg-8 col-md-8'>
                      <div class='rbt-profile-content b2'>{{ item.value }}</div>
                    </div>
                  </div>
                  <!-- End Profile Row  -->
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
import { useUserStore } from '@/store/user'

const $user = useUserStore()

const info = ref([
  {
    label: 'Գրանցման օր',
    value: $user.user?.createdAt
  },
  {
    label: 'Անուն',
    value: $user.user?.first_name
  },
  {
    label: 'Ազգանուն',
    value: $user.user?.last_name
  },
  {
    label: 'Էլ. Հասցե',
    value: $user.user?.email
  },
  {
    label: 'Հէռախոսահամար',
    value: $user.user?.phone
  },
  {
    label: 'Ունակություներ',
    value: $user.user?.skill
  },
  {
    label: 'Նկարագրություն',
    value: $user.user?.bio
  }
])
</script>
