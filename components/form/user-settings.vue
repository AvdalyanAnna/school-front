<template>
    <div class="rbt-dashboard-content-wrapper">
        <div class="tutor-bg-photo bg_image bg_image--23 height-245"
             :style="bg?`background-image: url(${bg});`:false"></div>
        <!-- Start Tutor Information  -->
        <div class="rbt-tutor-information">
            <div class="rbt-tutor-information-left">
                <div class="thumbnail rbt-avatars size-lg position-relative">
                    <img v-if="avatar" :src="avatar || `/team/avatar-2.jpg`" alt="Instructor" />
                    <v-img v-else src="/team/avatar-2.jpg" alt="Instructor"/>
                    <div class="rbt-edit-photo-inner">
                        <label class="rbt-edit-photo d-flex align-items-center justify-content-center" title="Upload Photo">
                            <i class="feather-camera"></i>
                            <input type="file" class="d-none" @change="changeAvatar">
                        </label>
                    </div>
                </div>
            </div>
            <div class="rbt-tutor-information-right">
                <div class="tutor-btn">
                    <label class="rbt-btn btn-sm btn-border color-white radius-round-10">
                        <input type="file" class="d-none" @change="changeBg">
                        Edit Cover Photo</label>
                </div>
            </div>
        </div>
        <!-- End Tutor Information  -->
    </div>
<!-- Start Profile Row  -->

    <form v-if="$user.user" @submit.prevent="update" class="rbt-profile-row rbt-default-form row row--15">
        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="rbt-form-group"
                 :class="{error:!form.first_name.valid && form.first_name.touched}">
                <label for="firstname">First Name</label>
                <input id="firstname" type="text"
                       v-model="form.first_name.value"
                       @blur="form.first_name.blur">
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="rbt-form-group"
                 :class="{error:!form.last_name.valid && form.last_name.touched}">
                <label for="lastname">Last Name</label>
                <input id="lastname" type="text" v-model="form.last_name.value"
                       @blur="form.last_name.blur">
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="rbt-form-group "
                 :class="{error:!form.email.valid && form.email.touched}">
                <label for="username">Email</label>

                <input id="email" type="email" v-model="form.email.value"
                       @blur="form.email.blur">
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="rbt-form-group"
                 :class="{error:!form.phone.valid && form.phone.touched}">
                <label for="phonenumber">Phone Number</label>
                <input id="phonenumber" type="tel" v-model="form.phone.value"
                       @blur="form.phone.blur">
            </div>
        </div>
        <div class="col-12">
            <div class="rbt-form-group"
                 :class="{error:!form.skill.valid && form.skill.touched}">
                <label for="skill">Skill/Occupation</label>
                <input id="skill" type="text" v-model="form.skill.value"
                       @blur="form.skill.blur">
            </div>
        </div>
        <div class="col-12">
            <div class="rbt-form-group"
                 :class="{error:!form.bio.valid && form.bio.touched}">
                <label for="bio">Bio</label>
                <textarea id="bio" cols="20" rows="5"
                          v-model="form.bio.value"
                          @blur="form.bio.blur"></textarea>
            </div>
        </div>
        <div class="col-12 mt--20">
            <div class="rbt-form-group">
                <v-button
                        :disabled="!form.valid"
                        isGradient
                        md
                        btnIcon1="feather-arrow-right"
                        btnIcon2="feather-arrow-right"
                        isBtn
                        type="submit"
                >
                    Update Info
                </v-button>
            </div>
        </div>
    </form>
<!-- End Profile Row  -->

</template>
<script setup>
import {useUserStore} from '@/store/user'
import {authUrl, $axios} from "~/utils/api";
import {useForm, useAxiosForm} from "~/use/form";
import {email, required} from "~/utils/validations";

const $user = useUserStore()
const bg = ref(null)
const avatar = ref(null)

const form = useForm({
    first_name: {
        value: $user.user?.first_name,
        validations: {
            required,
        },
    },
    last_name: {
        value: $user.user?.last_name,
        validations: {
            required,
        },
    },
    email: {
        value: $user.user?.email,
        validations: {
            required,
            email,
        },
    },
    phone: {
        value: $user.user?.phone || '',
        validations: {
            required,
        },
    },
    skill: {
        value: $user.user?.skill || '',
        validations: {
            required,
        },
    },
    bio: {
        value: $user.user?.bio || '',
        validations: {
            required,
        },
    },

})

const update = async () => {
    const {data} = await $axios.post(authUrl.update, useAxiosForm(form))
    console.log(data)
    const user = useCookie('userInfo').value
    $user.setUser(user)
}
const changeBg = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
        bg.value = e.target.result
    }
    reader.readAsDataURL(file)
}
const changeAvatar = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
        avatar.value = e.target.result
    }
    reader.readAsDataURL(file)
}
</script>

<style>
.thumbnail img{
    width: 120px;
    height: 120px;
    object-fit: cover;
}
</style>
