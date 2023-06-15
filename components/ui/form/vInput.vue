<template>
  <div class="form-group" :class="inputClass">
    <input
      :name="name"
      :type="type"
      @focus="focused = true"
      @blur="blurFunction"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
    <label>{{ label }}</label>
    <span class="focus-border"></span>
  </div>
</template>

<script>
export default {
  name: 'vInput',
  props: {
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
      // required: true,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      focused: false,
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
    blurFunction() {
      this.focused = false
      this.$emit('blur')
    },
  },
  computed: {
    inputClass() {
      return {
        focused: this.focused || this.value,
        error: this.error,
      }
    },
  },
}
</script>
