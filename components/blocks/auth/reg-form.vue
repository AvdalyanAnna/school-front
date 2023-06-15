<template>
  <v-form @submit="sendForm">
    <template #header>
      <h3 class="title">Գրանցում</h3>
    </template>
    <template #default>
      <v-input
        label="Անուն"
        name="fName"
        :value="form.fName.value"
        @blur="form.fName.blur"
        @update:value="form.fName.value = $event"
        :error="!form.fName.valid && form.fName.touched"
      />
      <v-input
        label="Ազգանուն"
        name="lName"
        :value="form.lName.value"
        @blur="form.lName.blur"
        @update:value="form.lName.value = $event"
        :error="!form.lName.valid && form.lName.touched"
      />
      <v-input
        label="Էլ. Հասցե"
        name="email"
        type="email"
        :value="form.email.value"
        @blur="form.email.blur"
        @update:value="form.email.value = $event"
        :error="!form.email.valid && form.email.touched"
      />
      <v-input
        label="Գաղտնաբառ "
        type="password"
        :value="form.password.value"
        @blur="form.password.blur"
        @update:value="form.password.value = $event"
        :error="!form.password.valid && form.password.touched"
      />
      <div class="mb--30"></div>
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
          Գրանցում
        </v-button>

        <social-form />
      </div>
    </template>
  </v-form>
</template>

<script>
import { useForm, useAxiosForm } from '@/use/form'
import { $axios, authUrl } from '@/utils/api'
import { ref } from 'vue'
import { required, email, minLength } from '@/utils/validations'

export default {
  setup() {
    const submitted = ref(false)

    const form = useForm({
      fName: {
        value: '',
        validations: { required, },
      },
      lName: {
        value: '',
        validations: { required, },
      },
      email: {
        value: '',
        validations: { required, email, },
      },
      password: {
        value: '',
        validations: { required, minLength: minLength(8), },
      },
    })

    const sendForm = async () => {
      $axios.post(authUrl.register, useAxiosForm(form))
    }

    return { form, sendForm, }
  },
}
</script>
