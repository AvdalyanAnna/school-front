<template>
    <div>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<script setup>
import {useUserStore} from '@/store/user'
const $user = useUserStore()

onMounted(() => {
    const user = useCookie('userInfo').value
    $user.setUser(user)
})
</script>

<style>
.rbt-avatars img{
  max-height: 120px;
}
</style>
