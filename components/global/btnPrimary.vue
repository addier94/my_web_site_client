<template>
  <button
    @click.prevent="updateUser"
    class="btn-logout focus:outline-none block w-full p-2 rounded-lg shadow-small_shadow uppercase text-center font-bold hovered-surface-color"
  >
    <fa v-if="spinnerForNameAndEmail" icon="spinner" size="lg" pulse />
    {{ type }}
  </button>
</template>
<script>
export default {
  props: ['spinnerForNameAndEmail', 'type']
}
</script>

<style lang="stylus" scoped></style>