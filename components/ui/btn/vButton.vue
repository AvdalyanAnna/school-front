<template>
  <button class="rbt-btn" :disabled="disabled" :class="btnClass">
    <div class="icon-reverse-wrapper" v-if="btnIcon1 && btnIcon2">
      <span class="btn-text">
        <slot />
      </span>
      <span class="btn-icon"><i :class="btnIcon1"></i></span>
      <span class="btn-icon"><i :class="btnIcon2"></i></span>
    </div>
    <slot v-else />
  </button>
</template>

<script>
export default {
  name: 'vButton',
  props: {
    url: {
      type: String,
      default: '#',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isGradient: {
      type: Boolean,
      default: false,
    },
    isBtn: {
      type: Boolean,
      default: false,
    },
    isGradientBorder: {
      type: Boolean,
      default: false,
    },
    isRound: {
      type: Boolean,
      default: false,
    },
    btnIcon1: {
      type: String,
      default: '',
      //feather-arrow-right
    },
    btnIcon2: {
      type: String,
      default: '',
    },
    small: {
      type: Boolean,
      default: false,
    },
    isSwitch: {
      type: Boolean,
      default: false,
    },
    hoverNoTransform: {
      type: Boolean,
      default: false,
    },
    md: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    btnClass() {
      return {
        'btn-gradient': this.isGradient,
        'btn-border-gradient': this.isGradientBorder,
        'radius-round': this.isRound,
        'btn-sm': this.small,
        'btn-md': this.md,
        'w-100': this.full,
        'rbt-switch-btn': this.isSwitch,
        'hover-transform-none': this.hoverNoTransform,
        'hover-icon-reverse': this.btnIcon1 && this.btnIcon2,
      }
    },
  },
}
</script>
