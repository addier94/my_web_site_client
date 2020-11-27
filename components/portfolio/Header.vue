<template>
  <div class="min-h-screen flex items-center top-0 left-0 fixed z-50">
    <div class="nav-height z-50">
      <a>
        <athlete class="icon-height w-8 h-8 md:w-10 md:h-10 active" />
      </a>
      <a>
        <work class="icon-height w-8 h-8 md:w-10 md:h-10" />
      </a>
      <a>
        <heart-icon class="icon-height w-8 h-8 md:w-10 md:h-10" />
      </a>
      <a>
        <email class="icon-height w-8 h-8 md:w-10 md:h-10" />
      </a>
    </div>
  </div>
</template>

<script>
import HeartIcon from '@/assets/icons/heart.svg?inline'
import Athlete from '@/assets/icons/athlete.svg?inline'
import Email from '@/assets/icons/email.svg?inline'
import Work from '@/assets/icons/work.svg?inline'

export default {
  components: {
    HeartIcon,
    Athlete,
    Email,
    Work
  }
}
</script>

<style lang="scss" scoped>
.nav-height {
  box-shadow: $small-shadow;
  border-radius: 0.5rem;
  overflow: hidden;
  background: white;
  .icon-height {
    @apply p-1;
  }
}
.active {
  box-shadow: $inner-shadow;
}
</style>
