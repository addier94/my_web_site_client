<template>
  <div
    v-if="user && user.hasOwnProperty('email')"
    class="mx-4 pb-3 rounded-2xl bg-elevated-surface-color md:flex max-w-screen-lg lg:mx-auto"
  >
    <div class="md:flex sm:p-8 sm:flex items-center sm:justify-between md:pr-0">
      <div class="mb-6 sm:mb-0 sm:p-0 text-center">
        <div class="px-8 pt-8 sm:pt-0">
          <img
            class=""
            src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png"
          />
        </div>
        <div class="leading-5 mt-3 sm:mb-0">
          <p class="font-bold uppercase text-lg">{{ user.name }}</p>
          <p class="text-gray-color">{{ user.email }}</p>
        </div>
      </div>
      <div class="mx-6 sm:mx-0 md:pl-8" style="min-width: 16rem">
        <form class="mb-6">
          <div class="input mb-3">
            <input
              :value="user.name"
              @input="
                (e) =>
                  this.$store.commit('auth/setChangeUser', {
                    resource: 'name',
                    item: e.target.value
                  })
              "
              class="px-2 py-1 rounded-md w-full outline-none bg-surface-color"
              type="text"
            />
          </div>
          <div class="input mb-3">
            <input
              :value="user.email"
              @input="
                (e) =>
                  this.$store.commit('auth/setChangeUser', {
                    resource: 'email',
                    item: e.target.value
                  })
              "
              class="px-2 py-1 rounded-md w-full outline-none bg-surface-color"
              type="email"
            />
          </div>

          <button
            @click.prevent="updateUser"
            class="btn-logout focus:outline-none block w-full p-2 rounded-lg shadow-small_shadow uppercase text-center font-bold hovered-surface-color"
          >
            <fa v-if="spinnerForNameAndEmail" icon="spinner" size="lg" pulse />
            Update user
          </button>
        </form>
        <form>
          <div class="input mb-3">
            <input
              class="px-2 py-1 rounded-md w-full outline-none bg-surface-color"
              type="password"
              placeholder="Change password"
            />
          </div>
          <button
            class="btn-logout focus:outline-none block w-full p-2 rounded-lg shadow-small_shadow uppercase text-center font-bold hovered-surface-color"
          >
            <fa v-if="spinner" icon="spinner" size="lg" pulse />
            Change Password
          </button>
        </form>
      </div>
    </div>
    <div class="mx-6 mt-4 md:p-8 md:mx-0 md:mt-0">
      <h5 class="">
        Role: <span class="text-primary-color">{{ user.role }}</span>
      </h5>
      <p class="text-gray-color">{{ user.createdAt }}</p>
      <p class="mt-4 leading-none text-red-500 uppercase">
        you need administrator authorization
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      user: 'auth/authUser'
    }),
    spinnerForNameAndEmail() {
      return this.$store.state.spinner
    }
  },
  methods: {
    updateUser() {
      this.$store.commit('setSpinner', true)
      this.$store
        .dispatch('auth/updateNameEmailOfUser', {
          headers: { Authorization: localStorage.getItem('token') }
        })
        .then(() => {
          this.$store.commit('setSpinner', false)
        })
    }
  }
}
</script>