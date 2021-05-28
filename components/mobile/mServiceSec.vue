<template>
  <section id="mservice">
    <v-row align="center" justify="center">
      <h1
        class="display-1 font-weight-bold black--text px-5"
        style="margin-top: 200px"
      >
        Services we provide <br />
        to create strong <br />
        business
      </h1>
      <v-slide-group
        v-model="model"
        class="mt-15"
        center-active
        show-arrows
        mobile-breakpoint="100"
      >
        <v-slide-item v-for="(n, index) in servicesList" :key="`n-${index}`">
          <v-hover v-slot="{ hover }">
            <v-card
              class="ma-5"
              rounded
              elevation="12"
              width="275px"
              height="250px"
              :color="hover ? '#1C344C' : 'white'"
            >
              <v-card-title
                class="justify-center"
                :class="hover ? 'white--text' : 'black--text'"
                v-html="n.header"
              >
              </v-card-title>
              <v-spacer />
              <v-row class="mt-5">
                <v-col align="center">
                  <v-img
                    contain
                    width="75"
                    height="75"
                    :src="hover ? n.img_d : n.img_w" /></v-col
              ></v-row>
            </v-card>
          </v-hover>
        </v-slide-item>

        <template v-slot:prev="{ on, attrs }">
          <v-btn
            fab
            icon
            color="red"
            v-bind="attrs"
            v-on="on"
            style="position: absolute; top: 325px; left: 75px"
          >
            <v-icon>mdi-arrow-left</v-icon></v-btn
          >
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn
            fab
            icon
            color="red"
            v-bind="attrs"
            v-on="on"
            style="position: absolute; top: 325px; left: 150px"
          >
            <v-icon>mdi-arrow-right</v-icon></v-btn
          >
        </template>
      </v-slide-group>
      <h3
        class="display-1 font-weight-bold text-center black--text px-5"
        style="margin-top: 200px; margin-bottom: 50px;"
      >
        Our Technological Stacks
      </h3>
      <div class="sepLine my-5" />
      <v-row class="align-center mx-3">
        <v-col
          cols="4"
          v-for="(n, index) in imageList"
          :key="`n-${index}`"
          :src="n.link"
        >
          <v-img width="100" height="100" contain :src="n.link" />
        </v-col>
      </v-row>
      <div class="sepLine my-5" />
    </v-row>
  </section>
</template>
<script>
export default {
  data: () => ({
    model: null,
    imageList: [
      { link: "/stack_1.png" },
      { link: "/stack_2.jpg" },
      { link: "/stack_3.png" },
      { link: "/stack_4.png" },
      { link: "/stack_5.png" },
      { link: "/stack_6.svg" },
      { link: "/stack_7.svg" },
      { link: "/stack_8.svg" },
      { link: "/stack_9.svg" },
      { link: "/stack_10.svg" },
      { link: "/stack_11.png" },
      { link: "/stack_12.png" },
      { link: "/stack_13.jpg" },
      { link: "/stack_14.png" },
      { link: "/stack_15.png" },
      { link: "/stack_16.png" },
      { link: "/stack_17.png" },
      { link: "/stack_18.png" },
      { link: "/stack_19.png" },
      { link: "/stack_20.png" },
      { link: "/stack_21.png" },
      { link: "/stack_23.png" },
      { link: "/stack_24.png" },
    ],
    servicesList: [
      {
        header: "Design Innovation",
        img_d: "/web-designw.png",
        img_w: "/web-design.png",
      },
      {
        header: "Application development, Re-Engineering & <br/> Maintenance",
        img_d: "/dataw.png",
        img_w: "/data.png",
      },
      {
        header: "Power your cloud",
        img_d: "/cloud-computingw.png",
        img_w: "/cloud-computing.png",
      },
    ],
  }),
};
</script>