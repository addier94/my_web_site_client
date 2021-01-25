<template>
  <div>
    <div class="register px-5 py-10 max-w-lg m-auto">
      <div class="login-and-register mb-5 flex justify-center">
        <div class="loginBoxShadow h-8">
          <NavLogin />
        </div>
      </div>
      <form class="register-container px-8 pt-6 pb-10 w-full">
        <h5 class="font-bold text-xl mb-3">Register</h5>
        <div class="mb-4">
          <input
            v-model.trim="$v.form.name.$model"
            type="text"
            class="bg-info px-2 py-2 outline-none rounded w-full"
            placeholder="Name"
          />
          <p
            v-if="!$v.form.name.required"
            class="text-red-700 italic leading-tight text-xs mt-1"
          >
            Name is required
          </p>
          <p
            v-if="!$v.form.name.minLength"
            class="text-red-700 italic leading-tight text-xs mt-1"
          >
            Must be at least 3 characters
          </p>
        </div>
        <div class="mb-4">
          <input
            v-model="form.email"
            @blur="$v.form.email.$touch()"
            type="text"
            class="bg-info px-2 py-2 outline-none rounded w-full"
            placeholder="Email"
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
            placeholder="Password"
          />
          <p
            v-if="$v.form.password.$error"
            class="text-red-700 italic leading-tight text-xs mt-1"
          >
            <span v-if="!$v.form.password.required">
              Password is required
            </span>
          </p>
          <p
            v-if="!$v.form.password.minLength"
            class="text-red-700 italic leading-tight text-xs mt-1"
          >
            <span> Must be at least 4 characters </span>
          </p>
        </div>
        <button @click.prevent="register" class="button focus:outline-none">
          <fa
            v-if="spinner && spinnerFor === 'register'"
            icon="spinner"
            size="lg"
            pulse
          />
          Register
        </button>
        <div class="forgot-password mt-3 italic leading-tight text-xs">
          If you forget the password you can follow the next steps in
          <nuxt-link
            to="/pforgot"
            class="transition duration-200 hover:text-black underline"
            >Forgot Password</nuxt-link
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import NavLogin from '@/components/NavLogin.vue'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  components: {
    NavLogin
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        email,
        required
      },
      password: {
        required,
        minLength: minLength(4)
      }
    }
  },
  methods: {
    register() {
      this.$v.form.$touch()
      if (this.isFormValid) {
        this.toggleSpinner('register', true)
        this.$store
          .dispatch('auth/register', this.form)
          .then(() => {
            this.getAuthUser()
            this.$router.push('/article')
            this.form.name = ''
            this.form.email = ''
            this.form.password = ''
            this.swalAlert('success', 'Successfull register')
            this.toggleSpinner('register', false)
          })
          .catch((e) => {
            this.swalAlert('error', e)
            this.toggleSpinner('register', false)
          })
      }
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
