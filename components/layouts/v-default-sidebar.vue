<template>
<!-- Start Dashboard Sidebar  -->
    <div class="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
        <div class="inner">
            <div class="content-item-content">

                <div class="rbt-default-sidebar-wrapper">
                    <div class="section-title mb--20">
                        <h6 class="rbt-title-style-2">Welcome, {{ $user.user.first_name }} {{ $user.user.last_name }}</h6>
                    </div>
                    <nav class="mainmenu-nav">
                        <ul class="dashboard-mainmenu rbt-default-sidebar-list">
                            <li v-for="(item,index) in menu" :key="index">
                                <nuxt-link :to="item.link" exact-active-class="active"><i :class="item.icon"></i><span>{{ item.title }}</span></nuxt-link>
                            </li>
                        </ul>
                    </nav>

                    <div class="section-title mt--40 mb--20">
                        <h6 class="rbt-title-style-2">User</h6>
                    </div>

                    <nav class="mainmenu-nav">
                        <ul class="dashboard-mainmenu rbt-default-sidebar-list">
                            <li v-for="(item,index) in setMenu" :key="index">
                                <a :href="item.link"><i :class="item.icon"></i><span>{{ item.title }}</span></a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    </div>
<!-- End Dashboard Sidebar  -->
</template>

<script setup>
import {useUserStore} from '@/store/user'

const $user = useUserStore()

const menu = ref([
    {
        title: 'Dashboard',
        icon: 'feather-home',
        link: '/profile'
    },
    {
        title: 'Իմ էջ',
        icon: 'feather-user',
        link: '/profile-info'
    },
    // {
    //     title: 'Enrolled Courses',
    //     icon: 'feather-book-open',
    //     link: '/test'
    // },
    {
        title: 'Պատմություն',
        icon: 'feather-shopping-bag',
        link: '/history'
    }
])
const setMenu = ref([
    {
        title: 'Կարգաորումներ',
        icon: 'feather-settings',
        link: '/settings'
    },
    {
        title: 'Ելք',
        icon: 'feather-log-out',
        link: '/test'
    }
])
</script>

