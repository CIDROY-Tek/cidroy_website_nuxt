<template>
  <section id="service">
    <v-row align="center" justify="center">
      <h3
        class="display-2 font-weight-bold black--text px-5"
        style="margin-top: 200px"
      >
        Services we provide to create strong business
      </h3>
      <v-slide-group v-model="model" class="pa-4 mt-10" show-arrows>
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
            style="position: absolute; top: 350px; left: 75px"
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
            style="position: absolute; top: 350px; left: 125px"
          >
            <v-icon>mdi-arrow-right</v-icon></v-btn
          >
        </template>
      </v-slide-group>
      <h3
        class="display-2 font-weight-bold black--text px-5"
        style="margin-top: 200px;"
      >
        Our Technological Stacks
      </h3>
      <div class="sepLine my-15" />
      <v-row class="align-center ml-15">
        <v-col
          cols="2"
          v-for="(n, index) in imageList"
          :key="`n-${index}`"
          :src="n.link"
        >
          <v-img width="100" height="100" contain :src="n.link" />
        </v-col>
      </v-row>
      <div class="sepLine my-15" />
    </v-row>
  </section>
</template>

<style scoped>
.photobanner {
  /* position: absolute; */
  /* top: 0px; */
  /* left: 0px; */
  overflow: hidden;
  white-space: nowrap;
  animation: bannermove 8s linear infinite;
}

.photobanner:hover {
  animation-play-state: paused;
}

.photobanner img {
  margin: 0 0.5em;
}

@keyframes bannermove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-50%, 0);
  }
}

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