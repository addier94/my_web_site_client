<template>
  <div class="min-h-screen flex items-center top-0 left-0 fixed z-50">
    <div class="nav-height z-50">
      <a :class="{ active: active === 'home' }" @click="navigateTo('home')">
        <athlete class="w-8 h-8 md:w-10 md:h-10" />
      </a>
      <a :class="{ active: active === 'about' }" @click="navigateTo('about')">
        <work class="w-8 h-8 md:w-10 md:h-10" />
      </a>
      <a
        :class="{ active: active === 'contact' }"
        @click="navigateTo('contact')"
      >
        <email class="w-8 h-8 md:w-10 md:h-10" />
      </a>
    </div>
  </div>
</template>

<script>
import Athlete from '@/assets/icons/athlete.svg?inline'
import Email from '@/assets/icons/email.svg?inline'
import Work from '@/assets/icons/work.svg?inline'

export default {
  components: {
    Athlete,
    Email,
    Work
  },
  props: ['active'],
  data() {
    return {
      showNavContent: false
    }
  },
  methods: {
    navigateTo(where) {
      this.showNavContent = false
      this.$emit('scroll', where)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-height {
  box-shadow: $small-shadow;
  border-radius: 0.5rem;
  overflow: hidden;
  background: white;
  a {
    @apply block m-1;
  }
}
.active {
  box-shadow: $inner-shadow;
}
</style>
