<template>
  <header>
    <nuxt-link to="/" class="logo-wrapper">
      <img class="w-16" src="@/assets/icons/logo.png" alt="Logo" />
    </nuxt-link>
    <nav>
      <ul>
        <li v-for="link in links" :key="link.slug">
          <nuxt-link
            v-if="typeof link.params !== 'string'"
            :to="{ name: link.slug }"
          >
            {{ link.name }}
          </nuxt-link>
          <nuxt-link
            v-else
            :to="{ name: link.slug, params: { username: link.params } }"
          >
            {{ link.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      links: [
        {
          name: 'New',
          slug: 'index'
        },
        {
          name: 'Top',
          slug: 'top'
        },
        {
          name: 'My Articles',
          slug: 'username',
          params: 'afreddier'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  @apply max-w-screen-xl m-auto p-4 h-24 flex items-center justify-between;
  .logo-wrapper {
    margin: 0 0.5rem;
    svg {
      width: 3rem;
      height: 100%;
    }
  }
  nav {
    letter-spacing: $-ls2;
    font-weight: $display-font-weight;
    text-transform: uppercase;
    ul {
      display: flex;
      li {
        margin: 0 0.5rem;
        a {
          box-shadow: $small-shadow;
          padding: 0.25rem 1rem;
          border-radius: 0.5rem;
          // user-select: none;
          &:hover {
            background: $hovered-surface-color;
          }
          &.nuxt-link-exact-active {
            cursor: default;
            background: transparent;
            color: $primary-color;
            box-shadow: $small-inner-shadow;
          }
          &:active {
            background: transparent;
            box-shadow: $small-inner-shadow;
          }
        }
      }
    }
  }
}
</style>
