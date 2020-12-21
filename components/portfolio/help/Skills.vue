<template>
  <div class="skills">
    <button
      v-for="icon in icons"
      :key="icon.icon"
      v-tooltip.bottom-start="{
        content: $t(icon.icon),
        trigger: 'hover click focus'
      }"
      :class="icon.icon"
      class="skills__icon"
      :aria-label="`${$tc('about.habilidades', 1)} ${icon.icon}`"
    >
      <fa :icon="['fab', icon.icon]"></fa>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          icon: 'html5',
          color: '#CE6809'
        },
        {
          icon: 'css3-alt',
          color: '#E14D4D'
        },
        {
          icon: 'linux',
          color: '#000000'
        },
        {
          icon: 'sass',
          color: '#D62383'
        },
        {
          icon: 'js',
          color: '#EFCE58'
        },
        {
          icon: 'vuejs',
          color: '#0F7B27'
        },
        {
          icon: 'node-js',
          color: '#35A132'
        },
        {
          icon: 'npm',
          color: '#D22020'
        },
        {
          icon: 'git-alt',
          color: '#CD3B1A'
        },
        {
          icon: 'php',
          color: '#8993BE'
        },
        {
          icon: 'trello',
          color: '#3D458B'
        },
        {
          icon: 'python',
          color: '#024B6A'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.skills {
  @apply relative mx-auto w-64 z-30 grid grid-flow-row grid-cols-3 grid-rows-4 gap-6 shadow-normal_shadow py-4;
  &__icon {
    @apply text-4xl flex items-center justify-center;
    &:focus {
      @apply outline-none;
    }
    &.html5 {
      &:focus,
      &:hover {
        color: #ce6809;
      }
    }
    &.css3-alt {
      &:focus,
      &:hover {
        color: #e14d4d;
      }
    }
    &.sass {
      &:focus,
      &:hover {
        color: #d62383;
      }
    }
    &.js {
      &:focus,
      &:hover {
        color: #efce58;
      }
    }
    &.vuejs {
      &:focus,
      &:hover {
        color: #0f7b27;
      }
    }
    &.node-js {
      &:focus,
      &:hover {
        color: #35a132;
      }
    }
    &.npm {
      &:focus,
      &:hover {
        color: #d22020;
      }
    }
    &.git-alt {
      &:focus,
      &:hover {
        color: #cd3b1a;
      }
    }
    &.php {
      &:focus,
      &:hover {
        color: #8993be;
      }
    }
    &.trello {
      &:focus,
      &:hover {
        color: #3d458b;
      }
    }
    &.linux {
      &:focus,
      &:hover {
        color: #000000;
      }
    }
    &.python {
      &:focus,
      &:hover {
        color: #024b6a;
      }
    }
  }
}
.tooltip {
  @apply block z-50 max-w-sm;
  .tooltip-inner {
    @apply bg-black text-primary_dark rounded-md p-4;
  }
  .tooltip-arrow {
    @apply w-0 h-0 absolute border border-black border-solid z-10;
  }
  &[x-placement^='bottom'] {
    @apply mt-2;
    .tooltip-arrow {
      @apply border-8 border-t-0 mt-0 mb-0;
      border-left-color: transparent;
      border-right-color: transparent;
      border-top-color: transparent;
      top: -8px;
      left: calc(50% - 4px);
    }
  }
  &[aria-hidden='true'] {
    @apply invisible opacity-0 transition-all ease-in duration-75;
  }
  &[aria-hidden='false'] {
    @apply visible opacity-100 transition-opacity ease-in duration-75;
  }
}
</style>
