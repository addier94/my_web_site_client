<template>
  <div class="job mb-20">
    <h2 class="mb-8 text-center text-3xl">Alguno de mis trabajos</h2>

    <div class="article-cards-wrapper flex flex-wrap items-start">
      <article>
        <v-popover offset="16" trigger="hover" placement="right-start">
          <job-card />
          <template slot="popover">
            <job-card-tooltip
              title="course.title"
              subtitle="course.category.name"
              description="course.subtitle"
              wsl="course.wsl"
            />
          </template>
        </v-popover>
      </article>
      <article>
        <v-popover offset="16" trigger="hover" placement="right-start">
          <job-card />
          <template slot="popover">
            <job-card-tooltip
              title="course.title"
              subtitle="course.category.name"
              description="course.subtitle"
              wsl="course.wsl"
            />
          </template>
        </v-popover>
      </article>
      <article>
        <v-popover offset="16" trigger="hover" placement="right-start">
          <job-card />
          <template slot="popover">
            <job-card-tooltip
              title="course.title"
              subtitle="course.category.name"
              description="course.subtitle"
              wsl="course.wsl"
            />
          </template>
        </v-popover>
      </article>
      <article>
        <v-popover offset="16" trigger="hover" placement="right-start">
          <job-card />
          <template slot="popover">
            <job-card-tooltip
              title="course.title"
              subtitle="course.category.name"
              description="course.subtitle"
              wsl="course.wsl"
            />
          </template>
        </v-popover>
      </article>
    </div>
  </div>
</template>

<script>
import JobCard from '@/components/portfolio/help/JobCard.vue'
import JobCardTooltip from '@/components/portfolio/help/JobCardTooltip.vue'
export default {
  components: {
    JobCard,
    JobCardTooltip
  },
  data() {
    return {
      title: 'titulo es',
      subtitle: 'es sub titulo',
      description: 'esto es una descripcion',
      wsl: 'esto es un curso wsl'
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  @apply bg-primary-dark rounded-2xl overflow-hidden;
  box-shadow: $shadow;
  &:hover {
    box-shadow: $small-shadow;
    h1 {
      transition: all 0.2s ease;
      &:hover {
        color: $primary-color;
      }
    }
  }
  width: calc(100% - 2 * 0.5rem);
  margin: 0.5rem;
  @media (min-width: $screen-sm) {
    width: calc(50% - 2 * 0.5rem);
  }
}
//   width: calc(100% - 2 * 0.5rem);
//   margin: 0.5rem;
//   @media (min-width: $screen-sm) {
//     width: calc(50% - 2 * 0.5rem);
//   }
//   @media (min-width: $screen-lg) {
//     width: calc(33.33333% - 2 * 0.5rem);
//   }
// }
</style>
