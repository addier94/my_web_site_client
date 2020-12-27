<template>
  <div>
    <div class="register px-5 py-10 max-w-lg m-auto">
      <div class="login-and-register mb-5 flex justify-center">
        <div class="loginBoxShadow h-8">
          <NavLogin />
        </div>
      </div>
      <div class="register-container px-8 pt-6 pb-10 w-full">
        <h5 class="font-bold text-xl mb-3">Register</h5>
        <div class="mb-4">
          <input
            type="text"
            class="bg-info px-2 py-2 outline-none rounded w-full"
            placeholder="Username"
          />
          <!-- <p class="text-red-700 italic leading-tight text-xs mt-1">
            The password should be at least twelve characters long. To make it
            stronger, use upper and lower case letters, numbers, and symbols
            like
          </p> -->
        </div>
        <div class="mb-4">
          <input
            type="text"
            class="bg-info px-2 py-2 outline-none rounded w-full"
            placeholder="Email"
          />
        </div>
        <div class="mb-8">
          <input
            type="text"
            class="bg-info px-2 py-2 outline-none rounded w-full"
            placeholder="Password"
          />
        </div>
        <button class="button focus:outline-none">Register</button>
        <div class="forgot-password mt-3 italic leading-tight text-xs">
          If you forget the password you can follow the next steps in
          <nuxt-link
            to="/pforgot"
            class="transition duration-200 hover:text-black underline"
            >Forgot Password</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavLogin from '@/components/NavLogin.vue'
export default {
  components: {
    NavLogin
  }
}
</script>

<style lang="scss" scoped>
.register {
  font-family: 'Open Sans', sans-serif;
  .forgot-password {
    color: $gray-color;
  }
}
.register-container {
  background-color: $elevated-surface-color;
  border-radius: 1rem;
  .button {
    display: block;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: $small-shadow;
    text-transform: uppercase;
    text-align: center;
    font-weight: $display-font-weight;
    letter-spacing: $-ls2;
    &:hover {
      background: $hovered-surface-color;
    }
    &:active {
      background: transparent;
      box-shadow: $small-inner-shadow;
    }
  }
}
.login-and-register .active {
  @apply text-white;
  background: $primary-color;
}
</style>
