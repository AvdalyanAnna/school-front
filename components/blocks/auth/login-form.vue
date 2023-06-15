<template>
    <v-form @submit="sendForm">
        <template #header>
            <h3 class="title">Մուտք</h3>
        </template>
        <template #default>
            <v-input
                    label="Էլ. Հասց"
                    name="email"
                    :value="form.email.value"
                    @blur="form.email.blur"
                    @update:value="form.email.value = $event"
                    :error="!form.email.valid && form.email.touched"
            />
            <v-input
                    label="Գաղտնաբառ *"
                    type="password"
                    :value="form.password.value"
                    @blur="form.password.blur"
                    @update:value="form.password.value = $event"
                    :error="!form.password.valid && form.password.touched"
            />
            <div class="row mb--30">
                <div class="col-lg-6"></div>
                <div class="col-lg-6">
                    <div class="rbt-lost-password text-end">
                        <nuxt-link class="rbt-btn-link" to="/auth/forgot">
                           Մոռացել եք գաղտնաբառը
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div class="form-submit-group">
                <v-button
                        :disabled="!form.valid"
                        isGradient
                        md
                        full
                        btnIcon1="feather-arrow-right"
                        btnIcon2="feather-arrow-right"
                        isBtn
                        type="submit"
                >
                   Մուտք
                </v-button>
                <social-form/>
            </div>
        </template>
    </v-form>
</template>

<script>
import {useForm, useAxiosForm} from '@/use/form'
import {$axios, authUrl} from '@/utils/api'
import {required, email, minLength} from '@/utils/validations'

export default {
    async setup() {
        const form = useForm({
            email: {
                value: 'admin@admin.com',
                validations: {
                    required,
                    email,
                },
            },
            password: {
                value: 'password',
                validations: {
                    required,
                    minLength: minLength(8),
                },
            },
        })
        const user = useCookie(
            'userInfo',
            {
                default: () => ({score: -1}),
                watch: true
            }
        )
        const loggedIn = useCookie(
            'loggedIn',
            {
                default: () => 0,
                watch: true
            }
        )

        const sendForm = async () => {
            const {data} = await $axios.post(authUrl.login, useAxiosForm(form))
            user.value = data.token
            loggedIn.value = 1
        }

        return {
            form,
            sendForm,
        }
    },
}
</script>
