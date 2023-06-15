<template>
  <!-- Start Tab Content  -->
  <div class="rbt-team-tab-content tab-content" id="myTabContent">
    <div
        class="tab-pane fade active show"
        id="team-tab6"
        role="tabpanel"
        aria-labelledby="team-tab6-tab"
    >
      <div class="inner">
        <div class="rbt-team-thumbnail">
          <div class="thumb">
            <v-img :src="item.avatar || `/team/team-0${item.id}.jpg`" :alt="item.first_name" />
          </div>
        </div>
        <div class="rbt-team-details">
          <div class="author-info">
            <h4 class="title"> {{ item.first_name }} {{ item.last_name }}</h4>
            <span class="designation theme-gradient">
                      {{ item.description }}
                    </span>
            <span class="team-form">
                      <i class="feather-map-pin"></i>
                      <span class="location">
                        {{ item.location }}Armenia
                      </span>
                    </span>
          </div>
          <p>
            Histudy The standard chunk of Lorem Ipsum used since the
            1500s is reproduced below for those interested.
          </p>
          <ul
              class="social-icon social-default mt--20 justify-content-start"
          >
            <li
                v-for="(item, index) of item.social"
                :key="index"
            >
              <a :href="item.link" target="_blank">
                <i :class="item.icon"></i>
              </a>
            </li>
          </ul>
          <ul class="rbt-information-list mt--25">
            <li>
              <a href="#">
                <i class="feather-phone"></i>
                {{ item.phone }}
              </a>
            </li>
            <li>
              <a href="mailto:hello@example.com">
                <i class="feather-mail"></i>
                {{ item.email }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="top-circle-shape"></div>
  </div>
  <!-- End Tab Content  -->

</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          link: '#',
          img: 'team/team-01.jpg',
        }
      }
    }
  },
}
</script>
