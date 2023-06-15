import {ref, reactive, watch} from 'vue'

const not = val => !val

export function useField(field) {
  const valid = ref(true)
  const value = ref(field.value)
  const touched = ref(false)
  const errors = reactive({})

  const reassign = val => {
    valid.value = true
    Object.keys(field.validations ?? {}).map(name => {
      const isValid = field.validations[name](val)
      errors[name] = not(isValid)
      if (not(isValid))   valid.value = false
    })
  }

  watch(value, reassign)
  reassign(field.value)

  return {value, valid, errors, touched, blur: () => touched.value = true}
}