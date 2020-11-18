<template>
  <div class="page-wrapper">
    <template v-if="$fetchState.pending && !queryTags.length">
      <content-placeholders rounded>
        <content-placeholders-heading />
        <content-placeholders-text :lines="50" />
      </content-placeholders>
    </template>
    <template v-else-if="$fetchState.error">
      <inline-error-block :error="$fetchState.error" />
    </template>
    <template v-else>
      <div class="flex flex-wrap">
        <input v-model="searchQuery" type="text" placeholder="search" />
        <tags-of-articles
          v-for="(tag, i) in queryTags"
          :key="tag.id"
          v-observe-visibility="
            i === queryTags.length - 1 ? lazyLoadTags : false
          "
          :tag="tag"
        />
      </div>
      <div class="">
        <content-placeholders rounded>
          <!-- <content-placeholders-heading /> -->
          <content-placeholders-text :lines="1" />
        </content-placeholders>
        <content-placeholders rounded>
          <!-- <content-placeholders-heading /> -->
          <content-placeholders-text :lines="1" />
        </content-placeholders>
        <content-placeholders rounded>
          <!-- <content-placeholders-heading /> -->
          <content-placeholders-text :lines="1" />
        </content-placeholders>
      </div>
    </template>
    <template v-if="$fetchState.pending && queryTags.length">
      <content-placeholders rounded>
        <content-placeholders-heading />
        <content-placeholders-text :lines="50" />
      </content-placeholders>
    </template>
  </div>
</template>

<script>
import tagsOfArticles from '@/components/blocks/TagsOfArticles'
import InlineErrorBlock from '@/components/blocks/InlineErrorBlock'

export default {
  components: {
    tagsOfArticles,
    InlineErrorBlock
  },
  computed: {
    queryTags() {
      if (this.searchQuery) {
        console.log('fuc', this.searchQuery)
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

    this.tags = this.tags.concat(tags)
  },
  data() {
    return {
      currentPage: 1,
      searchQuery: 'vue',
      tags: []
    }
  },
  methods: {
    lazyLoadTags(isVisible) {
      if (isVisible) {
        if (this.currentPage < 1) {
          this.currentPage++
          this.$fetch()
        }
      }
    }
  },
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
