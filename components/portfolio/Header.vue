<template>
  <div
    class="min-h-screen hidden md:flex md:items-center md:top-0 md:left-0 md:fixed md:z-50"
  >
    <div class="nav-height bg-green-100 z-50">
      <a :class="{ active: active === 'home' }" @click="navigateTo('home')">
        <HomeIcon class="w-8 h-8 md:w-10 md:h-10" />
      </a>
      <a :class="{ active: active === 'about' }" @click="navigateTo('about')">
        <AboutIcon class="w-8 h-8 md:w-10 md:h-10" />
      </a>
      <a :class="{ active: active === 'job' }" @click="navigateTo('job')">
        <JobIcon class="w-8 h-8 md:w-10 md:h-10" />
      </a>
      <a
        :class="{ active: active === 'contact' }"
        @click="navigateTo('contact')"
      >
        <ContactIcon class="w-8 h-8 md:w-10 md:h-10" />
      </a>
    </div>
  </div>
</template>

<script>
import HomeIcon from '@/assets/icons/deck-24px.svg?inline'
import AboutIcon from '@/assets/icons/message-24px.svg?inline'
import JobIcon from '@/assets/icons/work-black-18dp.svg?inline'
import ContactIcon from '@/assets/icons/email-24px.svg?inline'

export default {
  components: {
    HomeIcon,
    AboutIcon,
    JobIcon,
    ContactIcon
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
  // background: white;
  a {
    @apply block p-1 top-0 left-0;
  }
}
.active {
  @apply border-r-4 border-primary-color;
}
</style>
