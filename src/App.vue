<template>
  <div class="wrapper">
    <Header @route="route" />
    <div class="main">
      <HomePage v-if="page === 'Home'" />
      <About v-if="page === 'About'" />
      <ContactUs v-if="page === 'Contact'" :userInfo="userInfo" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import HomePage from './views/HomePage.vue';
import About from './views/About.vue';
import ContactUs from './views/ContactUs.vue';
import { EventBus } from './event-bus.js';

export default {
  components: {
    Header,
    Footer,
    HomePage,
    About,
    ContactUs
  },
  data() {
    return {
      userInfo: {},
      page: "Home"
    }
  },
  mounted() {
    EventBus.$on('userInfo', userInfo => {
      this.userInfo = {...userInfo};
    }); 
  },
  methods: {
    route (e) {
      this.page = e;
    }
  }
}
</script>
