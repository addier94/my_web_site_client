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
        <li v-if="!isAuth">
          <nuxt-link class="link" :to="localePath({ name: 'login' })">{{
            $t('nav.login')
          }}</nuxt-link>
        </li>
        <li v-else class="w-8 h-8 link relative cursor-pointer">
          <img
            @click="toogleUserNav = !toogleUserNav"
            class="rounded-full absolute top-0 left-0"
            src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png"
            alt=""
          />
          <div
            v-if="user && user.hasOwnProperty('data')"
            :class="[toogleUserNav ? '' : 'hidden']"
            class="bg-elevated-surface-color bl absolute right-0 p-4 rounded-lg cursor-default"
            style="top: 2.5rem"
          >
            <img
              class="w-20 mx-auto mb-2 rounded-full"
              src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png"
              alt=""
            />
            <h5 class="text-center">
              {{ user.data.name }}
            </h5>
            <p class="lowercase text-gray-color leading-4">
              {{ user.data.email }}
            </p>
            <div class="text-center my-4">
              <button
                @click="redirectToUserProfile"
                class="lowercase focus:outline-none leading-4 block text-xs border border-gray-600 rounded-2xl px-2 py-1 hover:bg-gray-100"
              >
                Manage your Account
              </button>
              <!-- <nuxt-link
                :to="
                  localePath({
                    name: 'user-username',
                    params: { username: user.data.name.toLowerCase() }
                  })
                "
                class="lowercase leading-4 block text-xs border border-gray-600 rounded-2xl px-2 py-1 hover:bg-gray-100"
              >
                Manage your Account
              </nuxt-link> -->
            </div>
            <button
              @click="logout"
              class="btn-logout focus:outline-none block w-full p-2 rounded-lg shadow-small_shadow uppercase text-center font-bold"
            >
              Sign out
            </button>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      toogleUserNav: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/authUser',
      isAuth: 'auth/isAuthenticated',
      isAdmin: 'auth/isAdmin'
    })
  },
  mounted() {
    this.getAuthUser()
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push('/login')
        this.toogleUserNav = false
      })
    },
    getAuthUser() {
      const token = localStorage.getItem('token')
      this.$store
        .dispatch('auth/getAuthUser', { headers: { Authorization: token } })
        .catch(() => console.log('No autenticado'))
    },
    redirectToUserProfile() {
      const emailLikeSlug = this.user.data.email.split('@')[0]
      this.$router.push(`/user/${emailLikeSlug}`)
      this.toogleUserNav = false
    }
  }
}
</script>

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
      @apply flex flex-wrap items-center;
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
        .btn-logout {
          &:hover {
            background: $hovered-surface-color;
          }
        }
      }
    }
  }
}
</style>
