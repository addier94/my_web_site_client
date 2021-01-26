<template>
  <div class="card card-tooltip">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <!-- TODO: Course Title -->
          <p class="title is-4">{{ title }}</p>
          <!-- TODO: Course Subtitle -->
          <p class="subtitle is-6">
            <i>{{ description }}</i>
          </p>
        </div>
      </div>

      <!-- TODO: Course Description -->
      <div class="content">{{ frontend }}</div>
      <div class="content">
        <ul class="wsl-list">
          <!-- TODO: Iterate wsl -->
          {{
            backend
          }}
        </ul>
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
  .title {
    font-size: 18px;
  }
}
</style>
