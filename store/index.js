export const state = () => ({
    apiUrl: ''
})

export const mutations = {
    setApiUrl(state, apiUrl) {
        state.apiUrl = apiUrl
    }
}