<template>
  <div class="rbt-contact-form contact-form-style-1 max-width-auto">
    <slot name="header" />
    <form class="max-width-auto" @submit.prevent="$emit('submit')">
      <slot />
    </form>
  </div>
</template>
