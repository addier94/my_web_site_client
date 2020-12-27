<template>
  <div>
    <nuxt-link to="/login" class="px-4 py-2 rounded-l">Login</nuxt-link>
    <nuxt-link to="/register" class="px-4 py-2 rounded-r active"
      >Registro</nuxt-link
    >
  </div>
</template>

<style lang="scss" scoped>
.register {
  font-family: 'Open Sans', sans-serif;
}
.login-and-register .active {
}
.button:hover {
  @apply bg-black text-primary-color;
}
.login-and-register .nuxt-link-exact-active {
  @apply text-white;
  background: $primary-color;
}
</style>
