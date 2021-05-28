<template>
  <div>
    <Home />
    <Service style="margin-bottom: 100px" />
    <About />
    <Choose />
    <Portfolio />
    <Contact />
    <Footer />
    <!-- <v-btn fab dark fixed bottom right color="red" @click="toTop">
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn> -->
  </div>
</template>

<script>
import Home from "~/components/mobile/mHomeSec.vue";
import Service from "~/components/mobile/mServiceSec.vue";
import About from "~/components/mobile/mAboutSec.vue";
import Choose from "~/components/mobile/mChooseSec.vue";
import Portfolio from "~/components/mobile/mPortfolioSec.vue";
import Contact from "~/components/mobile/mContactUsSec.vue";
import Footer from "~/components/mobile/mFooter.vue";
export default {
  components: {
    Home,
    Service,
    About,
    Choose,
    Portfolio,
    Contact,
    Footer,
  },
  methods: {
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>