<template>
  <div class="rbt-page-banner-wrapper pt--200">
    <!-- Start Banner BG Image  -->
    <div class="rbt-banner-image"></div>
    <!-- End Banner BG Image  -->
  </div>
  <!-- Start Card Style -->
  <div
    class="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <!-- Start Dashboard Top  -->
          <div class="rbt-dashboard-content-wrapper">
            <div class="tutor-bg-photo bg_image bg_image--22 height-350">
              <!-- <img src="assets/images/bg/bg-image-22.jpg" alt=""> -->
            </div>
            <!-- Start Tutor Information  -->
            <div class="rbt-tutor-information">
              <div class="rbt-tutor-information-left">
                <div class="thumbnail rbt-avatars size-lg">
                  <v-img :src="user.avatar" alt="Instructor" />
                </div>
                <div class="tutor-content">
                  <h5 class="title">{{ user.name }}</h5>
                  <ul class="rbt-meta rbt-meta-white mt--5">
                    <li>
                      <i class="feather-book"></i>{{ user.cursCount }} Courses
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- End Tutor Information  -->
          </div>
          <!-- End Dashboard Top  -->
        </div>
        <div class="col-lg-12 mt--30">
          <div class="profile-content rbt-shadow-box">
            <h4 class="rbt-title-style-3">Biography</h4>
            <div class="row g-5">
              <div class="col-lg-8">
                <p class="mt--10 mb--20">{{ user.description }}</p>
                <ul class="social-icon social-default justify-content-start">
                  <li v-for="(item, index) in user.social" :key="index">
                    <a target="_blank" :href="item.link">
                      <i :class="item.icon"></i>
                    </a>
                  </li>
                </ul>
                <header-info class="mt--15" :list="user.list" />
              </div>
              <div class="col-lg-2 offset-lg-2">
                <div class="feature-sin best-seller-badge text-end h-100">
                  <span class="rbt-badge-2 w-100 text-center badge-full-height">
                    <span class="image">
                      <v-img
                        src="icons/card-icon-1.png"
                        alt="Best Seller Icon"
                      />
                    </span>
                    Bestseller
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Start Card Area -->
      <div class="rbt-profile-course-area mt--60">
        <div class="row">
          <div class="col-lg-12">
            <div class="sction-title">
              <h2 class="rbt-title-style-3">Courses</h2>
            </div>
          </div>
        </div>
        <div class="row g-5 mt--5">
          <div class="row g-5">
            <course-item
              v-for="(item, index) in user.cursies"
              :key="index"
              :item="item"
            />
          </div>
        </div>
      </div>
      <!-- End Card Area -->
    </div>
  </div>
  <!-- End Card Style -->
</template>

<script>
export default {
  setup() {
    const user = {
      name: 'John Doe',
      age: 24,
      location: 'New York',
      cursCount: 20,
      avatar: 'team/avatar.jpg',
      description:
        'I am the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.',
      social: [
        {
          icon: 'feather-facebook',
          link: 'https://www.facebook.com/',
        },
        {
          icon: 'feather-twitter',
          link: 'https://twitter.com/',
        },
        {
          icon: 'feather-instagram',
          link: 'https://www.instagram.com/',
        },
        {
          icon: 'feather-linkedin',
          link: 'https://www.linkedin.com/',
        },
      ],
      list: [
        {
          text: 'example@gmail.com',
          link: 'mailto:hello@example.com',
          icon: 'feather-mail',
        },
        {
          text: '+1-202-555-0104',
          link: 'tel:+12025550174',
          icon: 'feather-phone',
        },
      ],
      cursies: [
        {
          title: 'PHP Beginner Advanced',
          lessons: 12,
          students: 50,
          progress: 90,
          image: 'courses/courses-online-01.jpg',
          link: '#',
          description:
            'It is a long established fact that a reader will be distracted.',
          complete: 90,
          download: 'Download Certificate',
          downloadLink: '#',
        },
        {
          title: 'Web Front To Back',
          lessons: 20,
          students: 40,
          progress: 45,
          image: 'courses/courses-online-04.jpg',
          link: '#',
          description:
            'Web Js long fact that a reader will be distracted by the readable.',
          complete: 45,
          download: 'Download Certificate',
          downloadLink: '#',
        },
      ],
    }
    return { user }
  },
}
</script>
