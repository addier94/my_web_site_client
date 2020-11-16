<template>
  <div class="username-articles-block">
    <template v-if="$fetchState.pending">
      <div class="article-cards-wrapper">
        <content-placeholders
          v-for="p in 30"
          :key="p"
          rounded
          class="article-card-block"
        >
          <content-placeholders-img />
          <content-placeholders-text :lines="3" />
        </content-placeholders>
      </div>
    </template>
    <template v-else-if="$fetchState.error">
      <inline-error-block :error="$fetchState.error" />
    </template>
    <template v-else>
      <div class="article-cards-wrapper">
        <article-card-block
          v-for="article in articles"
          :key="article.id"
          :article="article"
          class="article-card-block"
        />
      </div>
    </template>
  </div>
</template>

<script>
import ArticleCardBlock from '@/components/blocks/ArticleCardBlock'
import InlineErrorBlock from '@/components/blocks/InlineErrorBlock'

export default {
  components: {
    ArticleCardBlock,
    InlineErrorBlock
  },
  async fetch() {
    const res = await fetch(
      // eslint-disable-next-line
      `https://dev.to/api/articles?username=${this.$route.params.username}`
    )
    // eslint-disable-next-line
    this.articles = await res.json()
  },
  data() {
    return {
      articles: null
    }
  }
}
</script>

<style lang="scss" scoped>
.username-articles-block {
  max-width: $screen-xl;
  margin: auto;
  padding: 1rem;
  min-height: 100vh;
}
.article-cards-wrapper {
  @apply flex flex-wrap items-start;
  .article-card-block {
    width: calc(100% - 2 * 0.5rem);
    margin: 0.5rem;
    @media (min-width: $screen-sm) {
      width: calc(50% - 2 * 0.5rem);
    }
    @media (min-width: $screen-lg) {
      width: calc(33.33333% - 2 * 0.5rem);
    }
  }
}
</style>
