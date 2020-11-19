<template>
  <div class="tags">
    <nuxt-link
      v-for="link in links"
      :key="link.slug"
      :to="{ name: link.slug }"
      class="tag"
    >
      {{ link.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      links: [
        {
          name: 'All Tags',
          slug: 'alltags'
        },
        {
          name: 'Feature',
          slug: 'featured'
        },
        {
          name: 'Nuxt',
          slug: 'nuxt'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-wrap: wrap;
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
      color: $primary-color;
      background: transparent;
      box-shadow: $small-inner-shadow;
    }
  }
}
</style>
