<template>
  <div class="card card-tooltip">
    <div class="card-content">
      <div class="media tracking-tighter">
        <div class="media-content">
          <!-- TODO: Course Title -->
          <p class="title text-primary-color uppercase leading-none mb-2">
            {{ title }}
          </p>
          <!-- TODO: Course Subtitle -->
          <p class="border-l-4 border-purple-800 pl-1 mb-3 leading-none">
            {{ description }}
          </p>
        </div>
      </div>

      <!-- TODO: Course Description -->
      <div
        class="ml-2 mb-3 border-l-4 rounded-xl border-green-400 px-2 leading-none"
      >
        {{ frontend }}
      </div>
      <div
        class="ml-2 border-l-4 rounded-xl border-green-400 px-2 leading-none"
      >
        {{ backend }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { required: false, type: String },
    description: { required: false, type: String },
    frontend: { required: false, type: String },
    backend: { required: false, type: String }
  }
}
</script>
<style scoped lang="scss">
.card-tooltip {
  max-width: 350px;
}
</style>
