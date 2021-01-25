<template>
  <div>
    <div class="register px-5 py-10 max-w-lg m-auto">
      <form class="login-container px-8 pt-6 pb-10 w-full">
        <h5 class="font-bold text-xl mb-3">Recover password</h5>
        <div class="forgot-password my-2 italic leading-tight text-xs">
          Your email please? to which we will send you verification token
        </div>
        <div class="mb-4">
          <input
            v-model="email"
            @blur="$v.email.$touch()"
            type="email"
            class="bg-info px-2 py-2 outline-none rounded w-full"
            placeholder="Your Email"
          />
          <p
            v-if="$v.email.$error"
            class="text-red-700 italic leading-tight text-xs mt-1"
          >
            <span v-if="$v.email.$error"> Email invalid </span>
            <span v-if="$v.email.email"> Email is required </span>
          </p>
        </div>
        <!-- <button class="button focus:outline-none">
          Send
        </button> -->
        <button
          @click.prevent="forgotPassword"
          class="button focus:outline-none"
        >
          <fa
            v-if="spinner && spinnerFor === 'forgotPassword'"
            icon="spinner"
            size="lg"
            pulse
          />
          Sending
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      email: ''
    }
  },
  validations: {
    email: {
      email,
      required
    }
  },
  methods: {
    forgotPassword() {
      this.$v.email.$touch()
      if (this.isFormValid) {
        this.toggleSpinner('forgotPassword', true)
        this.$store
          .dispatch('auth/forgotpassword', this.email)
          .then((response) => {
            this.email = ''
            this.swalAlert('success', 'Please check your email')
            this.toggleSpinner('forgotPassword', false)
          })
          .catch((e) => {
            this.swalAlert('error', e)
            this.toggleSpinner('forgotPassword', false)
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
