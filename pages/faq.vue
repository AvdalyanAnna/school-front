<template>
  <!-- Start breadcrumb Area -->
  <div class="rbt-breadcrumb-default ptb--100 bg-gradient-1 pt--200">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-inner text-center">
            <h2 class="title">Հաճախ տրվող հարցեր </h2>
            <ul class="page-list">
              <li class="rbt-breadcrumb-item"><a href="index.html">Home</a></li>
              <li>
                <div class="icon-right">
                  <i class="feather-chevron-right"></i>
                </div>
              </li>
              <li class="rbt-breadcrumb-item active">Հաճախ տրվող հարցեր </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Breadcrumb Area -->

  <!-- Start Accordion Area  -->
  <div
    class="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap"
  >
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-12">
          <div class="rbt-accordion-style accordion">
            <div class="rbt-accordion-style rbt-accordion-04 accordion">
              <div class="accordion" id="accordionExamplec3">
                <div
                  class="accordion-item card"
                  v-for="(item, index) in faqs"
                  :key="index"
                  @click="changeActiveIndex(index)"
                >
                  <h2 class="accordion-header card-header" id="headingThree1">
                    <button
                      class="accordion-button"
                      :class="[{ collapsed: index !== active }]"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree1"
                      :aria-expanded="index === active"
                      aria-controls="collapseThree1"
                    >
                      {{ item.title }}
                    </button>
                  </h2>
                  <div
                    id="collapseThree1"
                    class="accordion-collapse collapse"
                    :class="{ show: index === active }"
                    aria-labelledby="headingThree1"
                    data-bs-parent="#accordionExamplec3"
                  >
                    <div class="accordion-body card-body" v-html='item.description'>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Accordion Area  -->
  <contact-block />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const faqs = [
      {
        title: 'Ես tech ոլորտի աշխատակից չեմ, սակայն ցանկանում եմ մասնագիտանալ այս ոլորտում։ Կարո՞ղ եմ մասնակցել դասընթացներին։',
        description:'Իհարկե, կարող եք։ «Հիմունքներ» բաժնի դասընթացները նախատեսված են սկսնակների համար։ Կարող եք գրանցվել դասընթացներին, ինչպես նաև ստանալ անհատական խորհրդատվություն մասնագիտության ընտրության հարցում։'
      },
      {
        title: 'Ինչպե՞ս միանալ դասընթացներին։',
        description:'<div>Մասնակցության փուլերը հետևյալն են՝ <br> - Գրանցվել համապատասխան դասընթացին կայքի միջոցով, որից հետո կստանաք նամակ՝ հաջորդ փուլերի մասին տեղեկատվությամբ,<br>- Մասնակցել քննական և հարցազրույցի փուլերին,<br>- Ներգրավվել դասապրոցեսում։</div>'
      },
      {
        title: 'Ի՞նչ ժամանակահատվածում կստանամ քննության արդյունքների մասին տեղեկատվություն։',
        description:'Քննությանը հաջորդող մեկ շաբաթվա ընթացքում կստանաք պատասխան նամակ Ձեր էլ.հասցեին։ Նամակը չստանալու պարագայում խնդրում ենք ստուգել նաև “Spam” ենթաբաժինը:'
      },
    ]
    const active = ref(0)
    const changeActiveIndex = (index) => {
      active.value = index
    }
    return {
      faqs,
      active,
      changeActiveIndex,
    }
  },
}
</script>
