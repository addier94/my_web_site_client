<template>
  <header>
    <nuxt-link to="/" class="logo-wrapper hidden sm:block" tag="nav">
      <ul>
        <li>
          <div class="link leading-4 cursor-pointer">
            <p>FERNÁNDEZ</p>
            <p>ALFREDO</p>
          </div>
        </li>
      </ul>
      <!-- <img class="w-16" src="@/assets/logo.png" alt="Logo" /> -->
    </nuxt-link>
    <nav>
      <ul>
        <li>
          <nuxt-link class="link" :to="localePath({ name: 'index' })">{{
            $t('home.name')
          }}</nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="link"
            :to="
              localePath({
                name: 'username',
                params: { username: 'afreddier' }
              })
            "
            >{{ $t('nav.my_articles') }}</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="link" :to="localePath({ name: 'article' })">{{
            $t('nav.articles')
          }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  @apply max-w-screen-xl m-auto p-4 h-24 flex items-center justify-between relative z-50;
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
      @apply flex flex-wrap;
      li {
        margin: 0.3rem;
        .link {
          box-shadow: $small-shadow;
          padding: 0.25rem 0.6rem;
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
