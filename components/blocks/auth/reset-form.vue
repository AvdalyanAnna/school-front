<template>
  <v-form @submit="sendForm">
    <template #header>
      <h3 class="title">Reset Password</h3>
    </template>
    <template #default>
      <v-input
        label="Enter a new password:"
        name="password"
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
          Reset Password
        </v-button>
      </div>
    </template>
  </v-form>
</template>

<script>
import { useForm, useAxiosForm } from '@/use/form'
import { $axios, authUrl } from '@/utils/api'
import { required, minLength } from '@/utils/validations'

export default {
  setup() {
    const form = useForm({
      password: {
        value: '',
        validations: {
          required,
          minLength: minLength(8),
        },
      },
    })

    const sendForm = async () => {
      $axios.post(authUrl.resetPassword, useAxiosForm(form))
    }

    return {
      form,
      sendForm,
    }
  },
}
</script>
