<template>
  <div class="contact">
    <h2 v-t="'contact.name'"></h2>
    <div class="contact-card">
      <!-- <img src="@/assets/alfre.png" alt="Pengu" /> -->
      <div class="contact-card--left"></div>
      <div class="contact-card--right">
        <div class="right__content">
          <h3 v-t="'contact.comunidad'"></h3>
          <i18n path="contact.comunidad_explicacion" tag="p">
            <template #estreamercoders>
              <a
                rel="noopener noreferrer"
                href="https://discord.gg/mucYjqJ"
                target="_blank"
                aria-label="discord link"
              >
                #EStremaerCoders
              </a>
            </template>
          </i18n>
          <div class="discord-icon">
            <a
              href="https://discord.gg/3nhN8TE"
              target="_blank"
              class="social-icon discord"
              rel="noopener noreferrer"
              aria-label="discord link"
            >
              <fa :icon="['fab', 'discord']"></fa>
            </a>
            <span class="discord-icon__hand">
              <fa :icon="['far', 'hand-pointer']"></fa>
            </span>
          </div>
          <i18n path="contact.yo_descripcion" tag="p">
            <template #mailto>
              <a href="mailto:alfredo@fernandezalfredo.com"
                >alfredo@fernandezalfredo.com</a
              >
            </template>
          </i18n>
        </div>
        <SocialIcons
          class-name="contact-card--bottom"
          :split="true"
          :discord="true"
        >
          <div class="discord-icon">
            <a
              href="https://discord.gg/3nhN8TE"
              target="_blank"
              class="social-icon discord"
              rel="noopener noreferrer"
              aria-label="discord link"
            >
              <fa :icon="['fab', 'discord']"></fa>
            </a>
            <span class="discord-icon__hand">
              <fa :icon="['far', 'hand-pointer']"></fa>
            </span>
          </div>
        </SocialIcons>
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
.contact {
  @apply overflow-hidden pt-20 mb-20;

  > h2 {
    @apply mb-8 text-center text-3xl;
  }
  &-card {
    @apply rounded-r-lg grid grid-flow-col relative bg-primary-dark;
    grid-template-columns: 0.2fr 1.8fr;
    > img {
      @apply absolute z-20 transition-all duration-700;
      width: 50px;
      height: 50px;
      left: calc(50% - 25px);
      transform: translateY(-50%);
    }

    &--left {
      @apply flex items-end justify-around transition-all duration-700 bg-gray-400;
      border-top-right-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;
      img {
        @apply relative;
        bottom: 5rem;
        max-width: 75%;
      }
    }

    &--bottom {
      @apply w-40 mx-auto grid gap-4 shadow-normal_shadow;

      > div {
        @apply grid grid-flow-col;

        .social-icon {
          @apply text-center;
        }
      }

      .discord-icon {
        @apply hidden;
      }
    }

    &--right {
      @apply py-8;

      .right__content {
        @apply p-4 text-on_surface_color;

        h3 {
          @apply text-xl;
        }

        p {
          @apply text-lg;

          &:nth-child(2) {
            @apply mb-4;
          }
        }

        .discord-icon {
          @apply flex items-center justify-center;
        }
      }

      &::after {
        content: '';
        @apply w-0 h-0 absolute bottom-0 right-0;
        border-bottom: 10rem solid $primary-color;
        border-left: 5rem solid transparent;
      }
    }

    .discord-icon {
      .social-icon {
        @apply text-4xl;

        &.discord {
          color: #2061c3;
        }
      }

      &__hand {
        @apply transform -rotate-45 text-on_surface_color;
      }
    }

    @media screen and (min-width: 768px) {
      &--right {
        @apply grid grid-cols-2;
        grid-template-columns: 1.5fr 0.5fr;

        .right__content {
          .discord-icon {
            @apply hidden;
          }
        }
      }

      &--bottom {
        @apply grid-flow-col w-24 h-64 m-0 grid-cols-2 self-end;
        grid-template-rows: 0.4fr 0.6fr;

        > div {
          @apply grid-flow-row;

          > a {
            @apply flex items-center justify-center;
          }
        }

        .discord-icon {
          @apply flex items-center justify-center col-span-2;
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

      .contact-card--left {
        transform: translateX(-90%);
      }
    }
  }
}
</style>
