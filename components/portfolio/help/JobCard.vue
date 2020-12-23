<template>
  <div>
    <nuxt-link class="image-wrapper cursor-pointer" to="/" tag="div">
      <img
        class="absolute top-0 left-0 w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1606851453139-1f6c1260f1ca?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />
      <!-- <img v-else :src="article.social_image" :alt="article.title" /> -->
    </nuxt-link>
    <div class="content">
      <div class="meta text-xs flex items-center mb-2">
        <nuxt-link to="/" class="mr-1">
          <img
            class="rounded-full w-10"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />
        </nuxt-link>
        <div>
          <nuxt-link to="/" class="user-name text-base"
            >Hellen hiltron</nuxt-link
          >
          <div class="scl flex">
            <span class="flex items-center mr-4"> 43 </span>
            <span class="flex items-center mr-4"> 75 </span>
          </div>
        </div>
      </div>
      <nuxt-link to="/">
        <h1 class="text-xl mb-2">esto es un titulo</h1>
      </nuxt-link>
      <div class="tags flex justify-between flex-wrap">
        <nuxt-link to="/" class="tag">
          <fa :icon="['fab', 'github']" /> Código
        </nuxt-link>
        <nuxt-link to="/" class="tag">
          <fa :icon="['fas', 'external-link-alt']" /> demostración
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<!-- credate script, specify props of course --->
<script>
export default {
  props: {
    course: {
      type: Object
      // required: true
    }
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
