<template>
  <nuxt-link :to="{ name: 't-tag', params: { tag: tag.name } }" class="tag">
    #{{ tag.name }}
  </nuxt-link>
</template>
<script>
export default {
  props: {
    tag: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.tag {
  font-size: $text-sm;
  font-weight: $bold-body-font-weight;
  line-height: 1;
  margin: 0.25rem;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  box-shadow: $small-shadow;
  &:hover {
    color: $primary-color;
    background: $hovered-surface-color;
  }
  &.nuxt-link-exact-active {
    color: $primary-color;
    background: transparent;
    box-shadow: $small-inner-shadow;
  }
  &:active {
    background: transparent;
    box-shadow: $small-inner-shadow;
  }
}
</style>
