<template>
  <!-- Start Footer aera -->
  <footer class="rbt-footer footer-style-1 bg-color-white overflow-hidden">
    <div class="footer-top">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="footer-widget">
              <v-logo />
              <v-desc desc-class="mt--20">
                We’re always in search for talented and motivated people. Don’t
                be shy introduce yourself!
              </v-desc>
              <v-social />
              <div class="contact-btn mt--30">
                <v-btn
                  isGradientBorder
                  isRound
                  btnIcon1="feather-arrow-right"
                  btnIcon2="feather-arrow-right"
                >
                  Contact With Us
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rbt-separator-mid">
      <div class="container">
        <hr class="rbt-separator m-0" />
      </div>
    </div>
    <v-copyright />
  </footer>
  <!-- End Footer aera -->
  <v-progress />
</template>

<script>
export default {
  components: {},
};
</script>
