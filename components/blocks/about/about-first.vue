<template>
  <!-- Start Banner Area -->
  <div class="rbt-banner-area rbt-banner-8 variation-02 pt--200">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-10 offset-lg-1">
          <div class="content">
            <div class="inner text-center">
              <div class="rbt-new-badge rbt-new-badge-one">
                <span class="rbt-new-badge-icon">🏆</span> The Leader in Online
                Learning
              </div>

              <h1 class="title">
                Read About Our
                <span class="header-caption">
                  <span class="cd-headline clip is-full-width">
                    <span class="cd-words-wrapper">
                      <b class="is-visible theme-gradient">Mission.</b>
                    </span>
                  </span>
                </span>
              </h1>
              <p class="description has-medium-font-size mt--20">
                Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
                Redux, React Routing, Animations, Next.js and way more!
              </p>
              <div class="slider-btn rbt-button-group justify-content-center">
                <v-btn
                  url="/auth/login"
                  isGradient
                  btnIcon1="feather-arrow-right"
                  btnIcon2="feather-arrow-right"
                >
                  Log in to Start
                </v-btn>
                <v-btn
                url="/contact"
                  btnIcon1="feather-arrow-right"
                  btnIcon2="feather-arrow-right"
                  class="btn-white"
                >
                  Contact US
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Banner Area -->
  <!-- Start Video Area  -->
  <div class="rbt-video-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="video-popup-wrapper">
            <v-img
              class="w-100 rbt-radius"
              src="bg/bg-image-12.jpg"
              alt="Video Images"
            />
            <a
              class="rbt-btn rounded-player-2 popup-video position-to-top with-animation btn-theme-color"
              href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
            >
              <span class="play-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Video Area  -->
</template>