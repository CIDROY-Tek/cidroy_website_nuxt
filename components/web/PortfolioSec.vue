<template>
  <section id="portfolio">
    <!-- <v-row align="center" justify="center">
      <h3
        class="display-3 font-weight-bold black--text px-5"
        style="margin-top: 100px"
      >
        Trusted by Agencies <br />
        & Business Owners
      </h3>
    </v-row> -->
    <!-- <v-slide-group v-model="model" class="pa-4 mt-10">
      <v-slide-item v-for="(n, index) in servicesList" :key="`n-${index}`">
        <v-card
          class="mx-10 pa-5 my-15"
          rounded
          elevation="12"
          width="350px"
          height="450px"
          color="white"
        >
          <v-row justify="center" class="mt-10">
            <v-avatar height="100" width="100" color="#0f0f0f"
              ><v-img src="/v.png" /></v-avatar
          ></v-row>
          <v-row justify="center">
            <h2 class="display-1 font-weight-light my-2">
              <strong> Name </strong>
            </h2></v-row
          >
          <v-row justify="center">
            <h5 class="error--text font-weight-light">CEO Company</h5></v-row
          >
          <v-row justify="center" class="mt-5 pa-5">
            <h3 class="font-weight-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
              volutpat, viverra magna risus aliquam massa. Ac aliquam ac
              volutpat, viverra magna risus.
            </h3></v-row
          >
        </v-card>
      </v-slide-item>

      <template v-slot:prev="{ on, attrs }">
        <v-btn color="red" dark v-bind="attrs" v-on="on">
          <v-icon>mdi-arrow-left</v-icon></v-btn
        >
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn color="red" dark v-bind="attrs" v-on="on">
          <v-icon>mdi-arrow-right</v-icon></v-btn
        >
      </template>
    </v-slide-group> -->

    <!-- <div class="sepLine my-5" />
    <div>
      <VueSlickCarousel
        :arrows="false"
        :dots="false"
        :infinite="true"
        :slidesToShow="4"
        :slidesToScroll="1"
        :autoplay="true"
        :speed="2000"
        :autoplaySpeed="2000"
      >
        <v-img
          width="250"
          height="250"
          contain
          class="mx-10"
          v-for="(n, index) in imageList"
          :key="`n-${index}`"
          :src="n.link"
        />
      </VueSlickCarousel>
    </div>
    <div class="sepLine my-5" /> -->

    <v-row>
      <v-col cols="12" align="center">
        <h3
          class="display-2 font-weight-bold black--text px-5"
          style="margin-top: 300px"
        >
          Our Clients
        </h3></v-col
      ></v-row
    >
    <div class="sepLine my-15" />
    <v-row class="align-center ml-15">
      <v-col
        cols="3"
        v-for="(n, index) in imageList_new"
        :key="`n-${index}`"
        :src="n.link"
      >
        <v-img width="200" height="200" contain :src="n.link" />
      </v-col>
    </v-row>
    <div class="sepLine my-15" />
  </section>
</template>
<style scoped>
.sepLine {
  width: 100%;
  height: 2px;
  /* background-color: red; */
  background: linear-gradient(
    90deg,
    rgba(192, 204, 218, 0.1) 0%,
    rgba(192, 204, 218, 0.6) 50.38%,
    rgba(192, 204, 218, 0.1) 100%
  );
}
</style>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  data: () => ({
    model: null,
    imageList: [
      { link: "/client_logo_2.png" },
      { link: "/client_logo_3.png" },
      { link: "/client_logo_4.png" },
      { link: "/client_logo_5.png" },
      { link: "/client_logo_6.png" },
      { link: "/client_logo_8.png" },
      { link: "/client_logo_9.png" },
    ],
    imageList_new: [
      { link: "/new_logos/Logo_New_15.png" },
      { link: "/new_logos/Logo_New_13.png" },
      { link: "/new_logos/Logo_New_2.png" },
      { link: "/new_logos/Logo_New_14.png" },
      // { link: "/new_logos/Logo_New_3.tif" }, MRD
      { link: "/new_logos/Logo_New_10.png" },
      { link: "/new_logos/Logo_New_8.png" },
      { link: "/new_logos/Logo_New_12.png" },
      { link: "/new_logos/Logo_New_1.jpeg" },
      { link: "/new_logos/Logo_New_16.png" },
      { link: "/new_logos/Logo_New_4.png" },
      { link: "/new_logos/Logo_New_5.png" },
      { link: "/new_logos/Logo_New_6.png" },
      { link: "/new_logos/Logo_New_7.png" },
      { link: "/new_logos/Logo_New_9.png" },
      { link: "/new_logos/Logo_New_11.png" },
    ],
    servicesList: [
      {
        header: "Design Innovation",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
      },
      {
        header: "Business Process Management",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
      },
      {
        header: "MVP Development",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
      },
      {
        header: "Design Innovation",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
      },
      {
        header: "Business Process Management",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
      },
      {
        header: "MVP Development",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
      },
    ],
  }),
  methods: {
    chbg() {
      document.getElementById("b").style.backgroundColor = color;
    },
  },
};
</script>