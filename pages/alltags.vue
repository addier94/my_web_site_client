<template>
  <div class="page-wrapper">
    <template v-if="$fetchState.pending && !tags.length">
      <content-placeholders rounded>
        <content-placeholders-heading />
        <content-placeholders-text :lines="70" />
      </content-placeholders>
    </template>
    <template v-else-if="$fetchState.error">
      <inline-error-block :error="$fetchState.error" />
    </template>
    <template v-else>
      <div class="flex flex-wrap justify-between mb-2 items-center">
        <input
          v-model="searchQuery"
          class="px-3 py-1 rounded-md outline-none mb-1 w-56"
          type="text"
          placeholder="search"
        />
        <routing-articles />
      </div>
      <div class="flex flex-wrap">
        <tags-of-articles v-for="tag in queryTags" :key="tag.id" :tag="tag" />
      </div>
    </template>
  </div>
</template>

<script>
import tagsOfArticles from '@/components/blocks/TagsOfArticles'
import RoutingArticles from '@/components/blocks/RoutingArticles'
import InlineErrorBlock from '@/components/blocks/InlineErrorBlock'

export default {
  components: {
    tagsOfArticles,
    InlineErrorBlock,
    RoutingArticles
  },
  computed: {
    queryTags() {
      if (this.searchQuery) {
        return this.tags.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(' ')
            .every((v) => item.name.toLowerCase().includes(v))
        })
      } else {
        return this.tags
      }
    }
  },
  async fetch() {
    const tags = await fetch(
      `https://dev.to/api/tags?per_page=1000`
    ).then((res) => res.json())

    this.tags = tags
  },
  data() {
    return {
      currentPage: 1,
      searchQuery: '',
      tags: []
    }
  },
  methods: {},
  head() {
    return {
      title: 'New Tags'
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
</style>
