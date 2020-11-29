<template>
  <div v-if="!split" :class="className">
    <a
      v-for="icon in socialIcons"
      :key="icon.name"
      :href="icon.link"
      :class="`social-icon ${icon.name}`"
      rel="noopener noreferrer"
      target="_blank"
      :aria-label="`${icon.name} link`"
    >
      <fa :icon="['fab', icon.name]"></fa>
    </a>
  </div>
  <div v-else :class="className">
    <slot></slot>
    <div v-for="(iconWrap, key) in socialIcons" :key="key">
      <a
        v-for="icon in iconWrap"
        :key="icon.name"
        :href="icon.link"
        :class="`social-icon ${icon.name}`"
        rel="noopener noreferrer"
        target="_blank"
        :aria-label="`${icon.name} link`"
      >
        <fa :icon="['fab', icon.name]"></fa>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['className', 'split'],
  props: {
    className: {
      type: String,
      default: ''
    },
    split: Boolean
  },
  data() {
    return {
      icons: [
        {
          link: 'https://twitter.com/afreddier',
          name: 'twitter'
        },
        {
          link: 'https://www.facebook.com/afreddier',
          name: 'facebook'
        },
        {
          link: 'https://www.linkedin.com/in/afreddier',
          name: 'linkedin'
        },
        {
          link: 'https://github.com/afreddier',
          name: 'github'
        },
        {
          link: 'https://www.twitch.tv/afreddier',
          name: 'twitch'
        },
        {
          link: 'https://www.youtube.com/channel/UC36KnR-WXAlragZX5SZIEUA',
          name: 'youtube'
        }
      ]
    }
  },
  computed: {
    socialIcons() {
      if (this.split) {
        const half = this.icons.length / 2
        return [this.icons.slice(0, half), this.icons.slice(half, half * 2)]
      }
      return this.icons
    }
  }
}
</script>

<style lang="scss">
.social-icon {
  @apply text-2xl;
  svg {
    @apply transition-transform duration-75 ease-in;
  }
  &:hover {
    svg {
      @apply transform scale-125;
    }
  }
  &.twitter {
    color: #53a6e2;
  }
  &.facebook {
    color: #3d5fd8;
  }
  &.linkedin {
    color: #1e82cb;
  }
  &.github {
    color: #000000;
  }
  &.twitch {
    color: #89608f;
  }
  &.youtube {
    color: #e04343;
  }
}
</style>
