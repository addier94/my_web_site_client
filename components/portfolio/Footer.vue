<template>
  <footer>
    <button :aria-label="$t('volver')" @click="navigateTo()">
      <fa style="color: black" :icon="['fas', 'arrow-circle-up']"></fa>
    </button>
    <LocaleSwitcher />
  </footer>
</template>

<script>
import LocaleSwitcher from '@/components/portfolio/help/LocaleSwitcher.vue'

export default {
  components: {
    LocaleSwitcher
  },
  methods: {
    navigateTo() {
      this.$emit('scroll', 'home')
    }
  }
}
</script>
<style lang="scss" scoped>
footer {
  @apply fixed bottom-0 h-10 w-full flex items-center justify-center z-50 bg-primary-dark;
  // background: $darkblue;

  &::before {
    content: '';
    @apply w-0 h-0 absolute top-0 left-0;
    border-bottom: 5rem solid $primary-color;
    border-right: 2.5rem solid transparent;
  }

  &::after {
    content: '';
    @apply w-0 h-0 absolute top-0 right-0;
    border-top: 5rem solid $elevated-surface-color;
    border-left: 2.5rem solid transparent;
  }

  button {
    @apply text-2xl text-primary_dark;

    &:focus {
      @apply outline-none;
    }
  }
}
</style>
<i18n>
{
  "es": {
    "volver": "Volver arriba"
  },
  "en": {
    "volver": "Back to top"
  }
}
</i18n>
