<template>
  <!--    <div class="container mx-auto">-->
  <div class="template-body">
    <v-header/>
    <main class="template-main">
      <div class="rbt-error-area bg-gradient-11 rbt-section-gap pt--200">
        <div class="error-area">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-10">
                        <h1 class="title">404!</h1>
                        <h3 class="sub-title">Page not found</h3>
                        <p>The page you were looking for could not be found.</p>
                        <nuxt-link class="rbt-btn btn-gradient icon-hover" href="/">
                            <span class="btn-text">Back To Home</span>
                            <span class="btn-icon"><i class="feather-arrow-right"></i></span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
    <v-footer/>
  </div>
  <!--    </div>-->
</template>
<script lang="ts" setup>

</script>


<script setup lang="ts">
defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: '/' });
</script>
