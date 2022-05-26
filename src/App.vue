<template>
  <div id="app">
    <Navigation />
    <Hero />
    <!-- <div class="sections-together"> -->
      <About />
      <Projects />
      <Contact />
    <!-- </div> -->
    <Footer />
  </div>
</template>

<script>
import Navigation from './Vue/pages/Navigation.vue'
import Hero from './Vue/pages/Hero.vue'
import About from './Vue/pages/About.vue'
import Projects from './Vue/pages/Projects.vue'
import Contact from './Vue/pages/Contact.vue'
import Footer from './Vue/pages/Footer.vue'


export default {
  name: 'App',
  components: {
    Navigation,
    Hero,
    About,
    Projects,
    Contact,
    Footer
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

@import "./style/scss/main.css";

</style>
