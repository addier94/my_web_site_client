<template>
  <div class="page-wrapper">
    <template v-if="$fetchState.pending && !articles.length">
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
      <div>
        <routing-articles />
      </div>
      <div class="article-cards-wrapper">
        <article-card-block
          v-for="(article, i) in articles"
          :key="article.id"
          v-observe-visibility="
            i === articles.length - 1 ? lazyLoadArticles : false
          "
          :article="article"
          class="article-card-block"
        />
      </div>
    </template>
    <template v-if="$fetchState.pending && articles.length">
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
  </div>
</template>

<script>
import ArticleCardBlock from '@/components/blocks/ArticleCardBlock'
import RoutingArticles from '@/components/blocks/RoutingArticles'
import InlineErrorBlock from '@/components/blocks/InlineErrorBlock'

export default {
  components: {
    ArticleCardBlock,
    InlineErrorBlock,
    RoutingArticles
  },
  async fetch() {
    const articles = await fetch(
      `https://dev.to/api/articles?page=${this.currentPage}`
    ).then((res) => res.json())

    this.articles = this.articles.concat(articles)
  },
  data() {
    return {
      currentPage: 1,
      articles: []
    }
  },
  methods: {
    lazyLoadArticles(isVisible) {
      if (isVisible) {
        if (this.currentPage < 15) {
          this.currentPage++
          this.$fetch()
        }
      }
    }
  },
  head() {
    return {
      title: 'New Nuxt.js articles'
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
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
