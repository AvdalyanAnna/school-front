import { createPinia } from 'pinia'
import { useUserStore } from '~/store/user'

export default function (context, inject) {
  const pinia = createPinia()
  const userStore = useUserStore(pinia)
  inject('pinia', pinia)
  inject('userStore', userStore)
}
