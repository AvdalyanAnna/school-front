import {defineStore} from 'pinia'
import {$axios, authUrl} from "~/utils/api";
export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: {},
        loggedIn: false,
    }),
    actions: {
        setUser(user) {
            $axios.get(authUrl.user).then(({data: {data}}) => {
                this.user = data
                this.loggedIn = true
            }).catch((err) => {
                console.log(err)
            })
        },
        logout() {
            this.user = {}
            this.loggedIn = false
        }
    },
})
