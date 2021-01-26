<template>
  <div>
    <nuxt-link class="image-wrapper cursor-pointer" to="/" tag="div">
      <img
        class="absolute top-0 left-0 w-full h-full object-cover"
        :src="require(`~/assets/${project.src}`)"
      />

      <!-- src="@/assets/alfre.jpg" -->
      <!-- <img v-else :src="article.social_image" :alt="article.title" /> -->
    </nuxt-link>
    <div class="content">
      <div class="meta text-xs flex items-center mb-2">
        <nuxt-link to="/" class="mr-1">
          <img
            class="rounded-full w-10"
            src="https://avatars.githubusercontent.com/u/49920189?s=400&u=ae3e7878a0c9fec541aecb4f0a26cc69672861af&v=4"
          />
        </nuxt-link>
        <div>
          <nuxt-link to="/" class="user-name text-base">{{
            project.name
          }}</nuxt-link>
          <div class="scl flex" v-if="project.icon">
            <span
              class="flex items-center mr-4"
              v-if="project.icon.vue === 'vue'"
            >
              <vue-icon class="w-6 h-6" />
            </span>
            <span
              class="flex items-center mr-4"
              v-if="project.icon.nuxt === 'nuxt'"
            >
              <nuxt-icon class="w-6 h-6" />
            </span>
            <span
              class="flex items-center mr-4"
              v-if="project.icon.node === 'node'"
            >
              <node-icon class="w-10 h-10" />
            </span>
            <span
              class="flex items-center mr-4"
              v-if="project.icon.dev_to === 'dev_to'"
            >
              <dev-to-icon class="w-6 h-6" />
            </span>
          </div>
        </div>
      </div>
      <nuxt-link to="/">
        <h1 class="text-xl mb-2">{{ project.project }}</h1>
      </nuxt-link>
      <div class="tags flex justify-between flex-wrap">
        <a target="_blanck" :href="project.code" class="tag">
          <fa :icon="['fab', 'github']" /> Código
        </a>
        <a target="_blanck" :href="project.demo" class="tag">
          <fa :icon="['fas', 'external-link-alt']" /> demostración
        </a>
      </div>
    </div>
  </div>
</template>

<!-- credate script, specify props of course --->
<script>
import vueIcon from '@/assets/icons/vue.svg?inline'
import nuxtIcon from '@/assets/icons/nuxt.svg?inline'
import nodeIcon from '@/assets/icons/node.svg?inline'
import devToIcon from '@/assets/icons/dev-to.svg?inline'
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  components: {
    vueIcon,
    nuxtIcon,
    nodeIcon,
    devToIcon
  }
}
</script>

<style lang="scss" scope>
.user-name {
  transition: all 0.2s ease;
  &:hover {
    color: $primary-color;
  }
}
.image-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  background-color: $elevated-surface-color;
}
.content {
  padding: 1rem;
  h1 {
    letter-spacing: $-ls2;
  }
  .tags {
    .tag {
      @apply text-sm leading-none m-1 rounded-md p-2;
      font-weight: $bold-body-font-weight;
      box-shadow: $small-shadow;
      &:hover {
        color: $primary-color;
        background: $hovered-surface-color;
      }
    }
  }
  .meta {
    letter-spacing: $-ls2;
    .scl {
      svg {
        margin-right: 0.25rem;
      }
    }
  }
}

.v-popover {
  .trigger {
    display: block !important;
  }
}
</style>
