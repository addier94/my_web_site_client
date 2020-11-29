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

<style lang="scss" src="@/assets/css/pages/footer.scss"></style>

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
