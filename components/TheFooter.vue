<template>
  <footer>
    <span>Build with</span>
    <a href="https://docs.dev.to/api" rel="nofollow noopener" target="_blank">
      <dev-to-icon />
    </a>
  </footer>
</template>

<script>
import DevToIcon from '@/assets/icons/dev-to.svg?inline'

export default {
  components: {
    DevToIcon
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: inline-block;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: $-ls2;
    font-size: $text-xs;
    font-weight: $bold-body-font-weight;
  }
  a {
    svg {
      width: 3rem;
      height: 3rem;
      margin: 0 0.5rem;
    }
    .nuxt-icon {
      width: 2.5rem;
      height: 2.5rem;
      margin: 0 0.25rem;
    }
  }
}
</style>
