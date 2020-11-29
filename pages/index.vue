<template>
  <div>
    <Header :active="header.active" @scroll="scroll($event)" />
    <div class="max-w-screen-lg -mt-24 mx-auto">
      <Home
        ref="home"
        :active="header.active === 'home'"
        @visible="changeActive"
      />
      <About
        ref="about"
        :active="header.active === 'about'"
        @visible="changeActive"
      />
      <Contact
        ref="contact"
        :active="header.active === 'contact'"
        @visible="changeActive"
      />
    </div>
    <Footer @scroll="scroll($event)" />
  </div>
</template>

<script>
import Header from '@/components/portfolio/Header.vue'
import Home from '@/components/portfolio/Home.vue'
import Footer from '@/components/portfolio/Footer.vue'

import About from '@/components/portfolio/About.vue'
import Contact from '@/components/portfolio/Contact.vue'
export default {
  name: 'App',
  components: {
    Header,
    Home,
    About,
    Contact,
    Footer
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
