<template>
<!-- Start Header Area -->
    <header class="rbt-header rbt-header-8 rbt-transparent-header">
        <div class="rbt-sticky-placeholder"/>
        <header-top/>

        <div class="rbt-header-wrapper header-sticky">
            <div class="container">
                <div class="mainbar-row rbt-navigation-end align-items-center">
                    <div class="header-left">
                        <v-logo/>
                    </div>

                    <div class="rbt-main-navigation d-none d-xl-block">
                        <nav class="mainmenu-nav">
                            <header-menu/>
                        </nav>
                    </div>
                    <div class="header-right">
                        <template v-if="!$user.loggedIn">
                            <div class="rbt-btn-wrapper d-none d-xl-block">
                                <v-btn
                                        url="/auth/login"
                                        isGradient
                                        small
                                        isSwitch
                                        hoverNoTransform
                                >
                                    Մուտք
                                </v-btn>
                            </div>
                            <div class="rbt-btn-wrapper d-none d-xl-block ml--5">
                                <v-btn url="/auth/registration" isGradient small isSwitch hoverNoTransform>
                                    Գրանցում
                                </v-btn>
                            </div>
                        </template>
                        <template v-else>
                            <div class="rbt-btn-wrapper d-none d-xl-block ml--5 ">
                                <v-btn url="/profile" isGradient small isSwitch hoverNoTransform>
                                    {{ $user.user.first_name }} {{ $user.user.last_name }}
                                </v-btn>
                            </div>
                            <div class="rbt-btn-wrapper d-none d-xl-block ml--5">
                                <v-btn
                                        url="/auth/logout"
                                        isGradient
                                        small
                                        isSwitch
                                        hoverNoTransform
                                >
                                    Ելք
                                </v-btn>
                            </div>
                        </template>


                        <!-- Start Mobile-Menu-Bar -->
                        <div class="mobile-menu-bar d-block d-xl-none">
                            <v-hamberger/>
                        </div>
                        <!-- Start Mobile-Menu-Bar -->
                    </div>
                </div>
            </div>
        </div>
    </header>
    <header-mobile/>
</template>
<script setup>
import {useUserStore} from '@/store/user'

const $user = useUserStore()

</script>
