import axios from 'axios'

const {store} = import('@/store/index.js')

const baseURL = 'http://localhost:3000/api'
axios.defaults.withCredentials = true
export const $axios = axios.create({
    baseURL,
    headers: {
        withCredentials: true,
    },
})

export const authUrl = {
    login: `/auth/login`,
    update: `/auth/update`,
    register: `/auth/register`,
    logout: `/auth/logout`,
    user: `/auth/user`,
    forgotPassword: `/auth/forgot-password`,
    resetPassword: `/auth/reset-password`,
    verifyEmail: `/auth/verify-email`,
    histories: `/auth/histories`,
}

export const $url = {
    categories: '/categories',
    courses: '/courses',
    tests: '/tests',
    coursesLesson: '/lessons/course',
    lessons: '/lessons',
    teachers: '/teachers',
}
