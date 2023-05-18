<template>
  <div>
    <div v-if="!showLoader">
      <Home />
      <Service  />
      <TestimonialSec />
      <DigitalAgencies/>
      <About />
      <Choose />
      <Portfolio />
      <Contact />
      <Footer />
      <v-btn fab dark fixed bottom right color="red" @click="toTop">
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </div>
    <loader v-if="showLoader" />
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
import Loader from "../../components/Loader.vue";
import TestimonialSec from '../../components/web/TestimonialSec.vue';
import DigitalAgencies from "../../components/web/digitalAgencies.vue";
export default {
  middleware: "switch",

  components: {
    Home,
    Service,
    About,
    Choose,
    Portfolio,
    Contact,
    Footer,
    Loader,
    TestimonialSec,
    DigitalAgencies
},
  data: () => ({
    showLoader: true,
  }),
  mounted: function () {
    this.showLoader = false;
  },
  methods: {
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>