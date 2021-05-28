<template>
  <div>
    <Home />
    <Service style="margin-bottom: 100px" />
    <About />
    <Choose />
    <Portfolio />
    <Contact />
    <Footer />
    <v-btn fab dark fixed bottom right color="red" @click="toTop">
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
import Home from "~/components/web/HomeSec.vue";
import Service from "~/components/web/ServiceSec.vue";
import About from "~/components/web/AboutSec.vue";
import Choose from "~/components/web/ChooseSec.vue";
import Portfolio from "~/components/web/PortfolioSec.vue";
import Contact from "~/components/web/ContactUsSec.vue";
import Footer from "~/components/web/Footer.vue";
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