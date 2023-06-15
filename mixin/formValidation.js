export default {
  setup() {
    const required = (value) => !!value
    const email = (value) => {
      const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return !!emailRegex.test(value)
    }
    const minLength = (num) => (value) => value.length >= num
    return {
      required,
      email,
      minLength,
    }
  },
}
