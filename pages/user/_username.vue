<template>
  <div>
    <div
      v-if="user && user.hasOwnProperty('data')"
      class="mx-4 pb-3 rounded-2xl bg-elevated-surface-color md:flex max-w-screen-lg lg:mx-auto"
    >
      <div
        class="md:flex sm:p-8 sm:flex items-center sm:justify-between md:pr-0"
      >
        <div class="mb-6 sm:mb-0 sm:p-0 text-center">
          <div class="px-8 pt-8 sm:pt-0">
            <img
              class=""
              src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png"
            />
          </div>
          <div class="leading-5 mt-3 sm:mb-0">
            <p class="font-bold uppercase text-lg">{{ user.data.name }}</p>
            <p class="text-gray-color">{{ user.data.email }}</p>
          </div>
        </div>
        <div class="mx-6 sm:mx-0 md:pl-8" style="min-width: 16rem">
          <form class="mb-6">
            <div class="input mb-3">
              <input
                :value="user.data.name"
                @input="
                  (e) =>
                    this.$store.commit('auth/setChangeUser', {
                      user: e.target.value,
                      resource: 'name'
                    })
                "
                class="px-2 py-1 rounded-md w-full outline-none bg-surface-color"
                type="text"
              />
            </div>
            <div class="input mb-3">
              <input
                :value="user.data.email"
                @input="
                  (e) =>
                    this.$store.commit('auth/setChangeUser', {
                      user: e.target.value,
                      resource: 'email'
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
              Change Password
            </button>
          </form>
        </div>
      </div>
      <div class="mx-6 mt-4 md:p-8 md:mx-0 md:mt-0">
        <h5 class="">
          Role: <span class="text-primary-color">{{ user.data.role }}</span>
        </h5>
        <p class="text-gray-color">{{ user.data.createdAt }}</p>
        <p class="mt-4 leading-none text-red-500 uppercase">
          you need administrator authorization
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      user: 'auth/authUser'
    })
  },
  methods: {
    updateUser() {
      // const config = {
      //   headers: { Authorization: localStorage.getItem('token') }
      // }
      // debugger
      this.$store.dispatch('auth/updateNameEmailOfUser', {
        headers: { Authorization: localStorage.getItem('token') }
      })
    }
  }
}
</script>