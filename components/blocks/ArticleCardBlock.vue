<template>
  <article>
    <nuxt-link
      class="image-wrapper cursor-pointer"
      :to="{
        name: 'username-article',
        params: { username: article.user.username, article: article.id }
      }"
      tag="div"
    >
      <div class="absolute top-0 right-0 z-10 text-white">
        <span class="time-publish-post">
          <span class="font-medium">{{ getPublishMonth }}</span>
          <span class="font-bold tracking-tighter">{{ getPublishDate }}</span>
        </span>
      </div>
      <img
        v-if="article.cover_image"
        :src="article.cover_image"
        :alt="article.title"
      />
      <img v-else :src="article.social_image" :alt="article.title" />
    </nuxt-link>
    <div class="content">
      <div class="meta text-xs flex items-center mb-2">
        <nuxt-link
          :to="{
            name: 'username',
            params: { username: article.user.username }
          }"
          class="mr-1"
        >
          <img class="rounded-full w-10" :src="article.user.profile_image_90" />
        </nuxt-link>
        <div>
          <nuxt-link
            :to="{
              name: 'username',
              params: { username: article.user.username }
            }"
            class="user-name text-base"
            >{{ article.user.name }}</nuxt-link
          >
          <div class="scl flex">
            <span class="flex items-center mr-4">
              <heart-icon />
              {{ article.positive_reactions_count }}
            </span>
            <span class="flex items-center mr-4">
              <comments-icon />
              {{ article.comments_count }}
            </span>
          </div>
        </div>
      </div>
      <nuxt-link
        :to="{
          name: 'username-article',
          params: { username: article.user.username, article: article.id }
        }"
      >
        <h1>{{ article.title }}</h1>
      </nuxt-link>
      <div class="tags">
        <nuxt-link
          v-for="tag in article.tag_list"
          :key="tag"
          :to="{ name: 't-tag', params: { tag } }"
          class="tag"
        >
          #{{ tag }}
        </nuxt-link>
      </div>
    </div>
  </article>
</template>

<script>
import HeartIcon from '@/assets/icons/heart.svg?inline'
import CommentsIcon from '@/assets/icons/comments.svg?inline'

export default {
  components: {
    HeartIcon,
    CommentsIcon
  },
  props: {
    article: {
      type: Object,
      default: null
    }
  },
  computed: {
    getPublishMonth() {
      return this.article.readable_publish_date.split(' ')[0]
    },
    getPublishDate() {
      // make question if exist  date in edited_at
      if (this.article.edited_at !== null) {
        const date = new Date(this.article.edited_at)
        return `${date.getMonth()}/${date.getFullYear().toString().slice(2)}`
      } else {
        return this.article.readable_publish_date.slice(3)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  border-radius: 1rem;
  overflow: hidden;
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
  .user-name {
    transition: all 0.2s ease;
    &:hover {
      color: $primary-color;
    }
  }
  .time-publish-post {
    background: $primary-color;
    min-width: 70px;
    border-radius: 0 10px 0 90%;
    padding: 8px 0 28px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1rem;
    span:nth-child(odd) {
      font-size: 0.6rem;
    }
    span:nth-child(2n) {
      font-size: 1rem;
    }
  }
  .image-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    background-color: $elevated-surface-color;
    img {
      @apply absolute top-0 left-0 w-full h-full object-cover;
    }
  }
  .content {
    padding: 1rem;
    h1 {
      font-size: $text-xl;
      letter-spacing: $-ls2;
      margin-bottom: 0.5rem;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      .tag {
        font-size: $text-sm;
        font-weight: $bold-body-font-weight;
        line-height: 1;
        padding: 0.5rem 0.5rem;
        // margin: 0 0.5rem 0.5rem 0;
        border-radius: 0.25rem;
        box-shadow: $small-shadow;
        &:hover {
          background: $hovered-surface-color;
        }
        &:active {
          background: transparent;
          box-shadow: $small-inner-shadow;
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
}
</style>
