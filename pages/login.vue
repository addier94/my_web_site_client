<template>
  <div>
    <div class="register px-5 py-10 max-w-lg m-auto">
      <div class="login-and-register mb-5 flex justify-center">
        <div class="loginBoxShadow h-8">
          <NavLogin />
        </div>
      </div>
      <form class="login-container px-8 pt-6 pb-10 w-full">
        <h5 class="font-bold text-xl mb-3">
          Login <span class="text-red-500">{{ isFormValid }}</span>
        </h5>
        <div class="mb-4">
          <input
            v-model="form.email"
            @blur="$v.form.email.$touch()"
            type="text"
            class="bg-info px-2 py-2 outline-none rounded w-full"
            placeholder="Your Email"
          />
          <p
            v-if="$v.form.email.$error"
            class="text-red-700 italic leading-tight text-xs mt-1"
          >
            <span v-if="$v.form.email.$error"> Email invalid </span>
            <span v-if="$v.form.email.email"> Email is required </span>
          </p>
        </div>
        <div class="mb-8">
          <input
            v-model="form.password"
            @blur="$v.form.password.$touch()"
            type="password"
            class="bg-info px-2 py-2 outline-none rounded w-full"
            placeholder="Your Password"
          />
          <p
            v-if="$v.form.password.$error"
            class="text-red-700 italic leading-tight text-xs mt-1"
          >
            <span v-if="!$v.form.password.required">
              Password is required
            </span>
          </p>
        </div>
        <button class="button focus:outline-none" @click.prevent="login">
          <fa v-if="spinner" icon="spinner" size="lg" pulse />
          Login
        </button>
        <div class="forgot-password mt-3 italic leading-tight text-xs">
          If you forget the password you can follow the next steps in
          <nuxt-link
            to="/pforgot"
            class="transition duration-200 hover:text-black underline"
            >Forgot Password
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
import NavLogin from '@/components/NavLogin.vue'
export default {
  components: {
    NavLogin
  },
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  validations: {
    form: {
      email: {
        email,
        required
      },
      password: {
        required
      }
    }
  },
  computed: {
    isFormValid() {
      return !this.$v.$invalid
    },
    spinner() {
      return this.$store.state.spinner
    }
  },
  methods: {
    login() {
      this.$v.form.$touch()

      if (this.isFormValid) {
        this.$store.commit('setSpinner', true)
        this.$store
          .dispatch('auth/login', this.form)
          .then(() => {
            this.getAuthUser()
            this.$router.push('/article')
            this.form.email = null
            this.form.password = null
            this.spinner = false
            this.$store.commit('setSpinner', false)
          })
          .catch((e) => {
            this.$swal({
              icon: 'error',
              title: e,
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true
            })
          })
      }
    },
    getAuthUser() {
      const token = localStorage.getItem('token')
      this.$store
        .dispatch('auth/getAuthUser', { headers: { Authorization: token } })
        .catch(() => console.log('No autenticado'))
    }
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
.login-container {
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
.button:hover {
  @apply bg-black;
}
</style>
