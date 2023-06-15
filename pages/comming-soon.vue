<template>
  <div
    class="rbt-countdown-area rbt-maintenance-area bg_image bg_image--6 bg_image_fixed rbt-section-gap vh-100 d-flex align-items-center justify-content-center"
    data-black-overlay="5"
  >
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-12">
          <div class="inner">
            <div class="section-title text-center">
              <span class="subtitle bg-white-opacity"
                >Down For Maintenance</span
              >
              <h2 class="title color-white">
                Sorry, We are down for Maintenance
              </h2>
              <p
                class="description has-medium-font-size mt--20 mb--0 color-white opacity-7"
              >
                We're currently under maintenance, if all goas as planned we'll
                be back in
              </p>
            </div>
            <div class="countdown-style-1 mt--50 justify-content-center">
              <div
                class="countdown justify-content-center"
                data-date="2024-12-30"
              >
                <div
                  class="countdown-container days"
                  v-for="(item, index) in dateInfo"
                  :key="index"
                >
                  <span class="countdown-value">{{ item.value }}</span>
                  <span class="countdown-heading">{{ item.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script set>
// You might choose this based on an API call or logged-in status
definePageMeta({
  layout: 'custom',
})
import { reactive } from 'vue'
export default {
  setup() {
    const getDateInfo = () => {
      const targetDate = new Date('2023-05-30')
      const now = new Date().getTime()
      const timeDiff = targetDate.getTime() - now // разница в миллисекундах между текущей датой и целевой датой

      const seconds = Math.floor(timeDiff / 1000) % 60
      const minutes = Math.floor(timeDiff / (1000 * 60)) % 60
      const hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
      const dateInfo = [
        { name: 'days', value: days },
        { name: 'hours', value: hours },
        { name: 'minutes', value: minutes },
        { name: 'seconds', value: seconds },
      ]
      return dateInfo
    }

    let dateInfo = reactive(getDateInfo())

    setInterval(() => {
      const newDateInfo = getDateInfo()
      Object.keys(dateInfo).forEach((key, index) => {
        dateInfo[key].value = newDateInfo[index].value
      })
    }, 1000)
    return { dateInfo }
  },
}
</script>
