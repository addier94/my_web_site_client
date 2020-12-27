<template>
  <div>
    <div class="register px-5 py-10 max-w-lg m-auto">
      <div class="login-container px-8 pt-6 pb-10 w-full">
        <h5 class="font-bold text-xl mb-3">New Password please</h5>
        <div class="mb-4">
          <input
            type="text"
            class="bg-info px-2 py-2 outline-none rounded w-full"
            placeholder="New Password"
          />
          <p class="text-red-700 italic leading-tight text-xs mt-1">
            The password should be at least twelve characters long. To make it
            stronger, use upper and lower case letters, numbers, and symbols
            like
          </p>
        </div>
        <!-- <button class="button focus:outline-none">
          Send
        </button> -->
        <button class="button focus:outline-none">
          <fa icon="spinner" size="lg" pulse />
          Sending
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
.register {
  font-family: 'Open Sans', sans-serif;
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
