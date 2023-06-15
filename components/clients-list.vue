<template>
  <div class="rbt-brand-area bg-color-white ptb--60">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-10 offset-lg-1">
          <div class="section-title text-center mb--40">
            <span class="small-title w-600"
              >The Best Trasted Client in This Education World</span
            >
          </div>
          <ul
            class="brand-list brand-style-3 justify-content-center justify-content-lg-between"
          >
            <li v-for="(item, index) in brandList" :key="index">
              <a href="#">
                <v-img :src="item" alt="Brand Image" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const brandList = [
      'brand/brand-01.png',
      'brand/brand-02.png',
      'brand/brand-03.png',
      'brand/brand-04.png',
      'brand/brand-05.png',
      'brand/brand-06.png',
    ]
    return { brandList }
  },
}
</script>