<template>
  <div
    v-observe-visibility="{
      callback: visibilityChanged,
      intersection: {
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    }"
    class="home"
  >
    <h2>HOME</h2>
    <div
      class="home-card shadow-small_shadow"
      :class="{ active, inactive: !active }"
    >
      <img class="w-8 h-8" src="@/assets/alfre.png" alt="Pengu" />
      <transition appear name="home-card--left">
        <div class="home-card--left">
          <img
            src="@/assets/alfre.png"
            class="shadow-normal_shadow"
            alt="Logo"
          />
        </div>
      </transition>
      <div class="home-card--right">
        <div class="right__content">
          <h3>IO</h3>
          <p v-t="'home.io'"></p>
          <h3>Alfredo</h3>
          <p v-t="'home.samuel'"></p>
        </div>
        <transition appear name="home-card--bottom">
          <SocialIcons class-name="home-card--bottom"></SocialIcons>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcons from '@/components/portfolio/help/SocialIcons.vue'
export default {
  components: {
    SocialIcons
  },
  props: {
    active: Boolean
  },
  methods: {
    visibilityChanged(visible, { intersectionRatio }) {
      this.$emit('visible', { from: 'home', visible, intersectionRatio })
    }
  }
}
</script>

<style lang="scss" src="@/assets/css/pages/home.scss"></style>
