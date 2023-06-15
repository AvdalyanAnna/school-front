<template>
  <v-form @submit="sendForm">
    <template #header>
      <h3 class="title">Request Password Reset</h3>
    </template>
    <template #default>
      <v-input
        label="Please enter your email:"
        name="email"
        :value="form.email.value"
        @blur="form.email.blur"
        @update:value="form.email.value = $event"
        :error="!form.email.valid && form.email.touched"
      />
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
          Request Password Reset
        </v-button>
      </div>
    </template>
  </v-form>
</template>

<script>
import { useForm, useAxiosForm } from '@/use/form'
import { $axios, authUrl } from '@/utils/api'
import { required, email } from '@/utils/validations'

export default {
  setup() {
    const form = useForm({
      email: {
        value: '',
        validations: {
          required,
          email,
        },
      },
    })

    const sendForm = async () => {
      $axios.post(authUrl.forgotPassword, useAxiosForm(form))
    }

    return {
      form,
      sendForm,
    }
  },
}
</script>
