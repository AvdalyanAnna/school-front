import { ref, reactive, computed } from 'vue'
import { useField } from './field'
export function useForm(init = {}) {
  const form = reactive({})
  const validKey = 'valid'

  for (const [key, value] of Object.entries(init)) {
    form[key] = useField(value)
  }

  const withoutValid = k => k !== validKey

  form[validKey] = computed(() => Object.keys(form).filter(withoutValid).every(k => form[k].valid))

  return form
}

export function useAxiosForm(init = {}) {
  const form = reactive({})
  for (const [key, { value }] of Object.entries(init)) {
    form[key] = value
  }
  return form
}
