<template>
  <div>
    <Header />
    <div class="max-w-screen-lg -mt-24 mx-auto">
      <Home />
      <About />
    </div>
    <!-- <Contact /> -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from '@/components/portfolio/Header.vue'
import Home from '@/components/portfolio/Home.vue'
// import Footer from '@/components/portfolio/Footer.vue'

import About from '@/components/portfolio/About.vue'
// import Contact from '@/components/portfolio/Contact.vue'
export default {
  name: 'App',
  components: {
    Header,
    Home,
    About
    // Footer,
    // Contact
  },
  data() {
    return {
      header: {
        active: 'home',
        intersectionRatios: {
          home: 1,
          about: 0,
          contact: 0
        }
      }
    }
  },
  methods: {
    changeActive({ from, visible, intersectionRatio }) {
      this.header.intersectionRatios[from] = visible ? intersectionRatio : 0
      const key = Object.keys(this.header.intersectionRatios).reduce(
        (prev, current) => {
          return this.header.intersectionRatios[prev] >
            this.header.intersectionRatios[current]
            ? prev
            : current
        }
      )
      this.header.active = key
    },
    scroll(where) {
      this.$refs[where].$el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
