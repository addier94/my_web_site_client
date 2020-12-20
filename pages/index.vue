<template>
  <div>
    <Header @scroll="scroll($event)" />
    <div class="max-w-screen-lg -mt-24 mx-auto">
      <Home ref="home" />
      <About ref="about" />
      <Contact ref="contact" />
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
  methods: {
    scroll(where) {
      this.$refs[where].$el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
