<template>
  <div class="">
    <div class="mx-4 pb-3 rounded-2xl bg-elevated-surface-color lg:flex">
      <div class="md:flex sm:p-8 sm:flex items-center sm:justify-between">
        <div class="px-24 py-10 sm:w-1/3 sm:p-0">
          <img
            class="w-full"
            src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png"
          />
        </div>
        <form class="mx-6 sm:mx-0">
          <div class="input mb-3">
            <input
              class="px-2 py-1 rounded-md w-full outline-none bg-surface-color"
              type="text"
            />
          </div>
          <div class="input mb-3">
            <input
              class="px-2 py-1 rounded-md w-full outline-none bg-surface-color"
              type="email"
            />
          </div>
          <div class="input mb-6">
            <input
              class="px-2 py-1 rounded-md w-full outline-none bg-surface-color"
              type="password"
            />
          </div>
          <button
            class="btn-logout focus:outline-none block w-full p-2 rounded-lg shadow-small_shadow uppercase text-center font-bold hovered-surface-color"
          >
            Save
          </button>
          <div class="leading-5 my-6 sm:mb-0">
            <p class="font-bold uppercase text-xl">carlos alfredo</p>
            <p class="text-gray-color">carlos@gamil.com</p>
          </div>
        </form>
      </div>
      <div class="mx-6 lg:p-8 lg:mx-0">
        <h5 class="uppercase">Role del usuario</h5>
        <p class="text-gray-color">23/28/2039</p>
      </div>
    </div>
  </div>
</template>