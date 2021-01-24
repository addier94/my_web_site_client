<template>
  <div class="home mb-20">
    <h2 class="mb-8 text-center text-3xl">{{ $t('home.name') }}</h2>
    <div
      class="home-card shadow-small_shadow rounded-2xl grid grid-cols-1 md:grid-cols-2 relative bg-elevated-surface-color"
    >
      <transition appear name="home-card--left">
        <div class="home-card--left">
          <img
            class="shadow-normal_shadow relative w-full rounded-2xl md:bottom-0 md:max-h-full"
            src="@/assets/alfre.jpg"
            alt="Logo"
          />
        </div>
      </transition>
      <div class="home-card--right">
        <div class="right__content">
          <h3 v-t="'about.frase'"></h3>
          <p>{{ $t('home.io') }}</p>
          <h3>Alfredo</h3>
          <p>{{ $t('home.alfredo') }}</p>
        </div>
        <transition appear name="home-card--bottom">
          <SocialIcons class-name="home-card--bottom"></SocialIcons>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcons from '@/components/portfolio/help/SocialIcons.vue'
export default {
  components: {
    SocialIcons
  }
}
</script>

<style lang="scss" scoped>
.home {
  @apply pt-24;
  // overflow: hidden;
  &-card {
    // grid-template-columns: 0.5fr 1.5fr;

    &--left {
      @apply flex flex-col rounded-l-lg my-3 mx-3;
      &-enter-active {
        animation: goLeft 1s;
      }

      @keyframes goLeft {
        from {
          clip-path: polygon(0 0, 0% 0%, 0% 100%, 0% 100%);
        }

        to {
          clip-path: polygon(0 0, 80% 0%, 100% 100%, 0% 100%);
        }
      }
    }

    &--bottom {
      @apply absolute w-full left-0 bottom-0 h-10 bg-gray-400 flex items-center justify-evenly pr-6;

      &::after {
        content: '';
        @apply w-0 h-0 absolute top-0;
        border-top: 2.5rem solid $elevated-surface-color;
        border-left: 1.75rem solid transparent;
        right: 0;
      }

      .social-icon {
        @apply w-10 h-10 text-center;
      }

      &-enter-active {
        animation: goBottom 0.5s;
        animation-delay: 1s;
      }

      @keyframes goBottom {
        0% {
          @apply h-10;
        }

        50% {
          @apply h-5;
        }

        100% {
          @apply h-10;
        }
      }
    }

    &--right {
      .right__content {
        @apply pl-2 pt-10 pr-4 pb-20 text-gray_color;

        h3 {
          @apply text-2xl;
        }

        p {
          @apply text-lg;

          &:nth-child(2) {
            @apply mb-4;
          }
        }
      }
    }

    @media screen and (min-width: 768px) {
      &--right {
        @apply relative;
      }

      &--bottom {
        @apply px-2;
        width: 25rem;
        left: calc(50% - 12.5rem);

        &::before {
          content: '';
          @apply w-0 h-0 absolute;
          border-top: 2.5rem solid $elevated-surface-color;
          border-right: 1.75rem solid transparent;
          left: 0;
        }
      }
    }

    &.active {
      > img {
        width: 50px;
        height: 50px;
      }
    }

    &.inactive {
      > img {
        width: 0;
        height: 0;
        left: calc(50%);
      }
    }
  }
}
</style>
