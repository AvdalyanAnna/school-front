<template>
  <div class="rbt-conatct-area bg-gradient-11 rbt-section-gap pt--200">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center mb--60">
            <h2 class="title">
            Կապ մեզ հետ
            </h2>
          </div>
        </div>
      </div>
      <div class="row g-5">
        <div
          v-for="(item, index) in contactList"
          :key="index"
          class="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
          data-sal="slide-up"
          data-sal-delay="150"
          data-sal-duration="800"
        >
          <div class="rbt-address">
            <div class="icon">
              <i :class="item.icon"></i>
            </div>
            <div class="inner">
              <h4 class="title">{{ item.text }}</h4>
              <p v-for="(i, idx) in item.list" :key="idx">
                <a :href="i.link">{{ i.text }}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rbt-google-map bg-color-white rbt-section-gapTop pt--0">
    <iframe
      class="w-100"
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
      height="600"
      style="border: 0"
    ></iframe>
  </div>
</template>

<script>
export default {
  setup() {
    const contactList = [
      {
        icon: 'feather-headphones',
        text: 'Հեռախոսահամարներ',
        list: [
          {
            text: '+444 555 666 777',
            link: 'tel:+444555666777',
          },
          {
            text: '+222 222 222 333',
            link: 'tel:+222222222333',
          },
        ],
      },
      {
        icon: 'feather-mail',
        text: 'Էլ. Հասցե',
        list: [
          {
            text: 'admin@gmail.com',
            link: 'mailto:admin@gmail.com',
          },
          {
            text: 'admin@gmail.com',
            link: 'mailto:admin@gmail.com',
          },
        ],
      },
      {
        icon: 'feather-map-pin',
        text: 'Հասցե',
        list: [
          {
            link: '#',
            text: '5678 Bangla Main Road, cities 580 GBnagla, example 54786',
          },
        ],
      },
    ]
    return { contactList }
  },
}
</script>
