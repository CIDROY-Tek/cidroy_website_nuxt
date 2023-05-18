<template>
  <section id="service">
    <v-row align="center" justify="center">
      <v-col cols="12" align="center">
        <h3 class="display-2 font-weight-bold black--text px-5" style="margin-top: 100px">
          Services we provide to create strong business
        </h3>
      </v-col>
      <v-col cols="4" v-for="(n, index) in servicesList" :key="`n-${index}`" align="center" class="mt-10">
        <v-row style="width:100%;" class="justify-space-around">
          <!-- <v-hover v-slot="{ hover }"> -->
            <v-card class="ma-5" rounded elevation="5" width="275px" height="250px" color='white'>
              <v-card-title class="justify-center black--text"  v-html="n.header">
              </v-card-title>
              <v-spacer />
              <v-row class="mt-5">
                <v-col align="center">
                  <v-img contain width="75" height="75" :src="n.img_w" />
                </v-col>
              </v-row>
            </v-card>
          <!-- </v-hover> -->
        </v-row>
      </v-col>
      <v-row>
        <v-col cols="12" align="center">
          <h3 class="display-2 font-weight-bold black--text px-5" style="margin-top: 200px">
            Our Technological Stacks
          </h3>
        </v-col>
      </v-row>
      <div class="sepLine my-15" />
      <v-row class="align-center ">
        <v-col cols="2" v-for="(n, index) in imageList" :key="`n-${index}`" :src="n.link" align="center">
          <v-img width="100" height="100" contain :src="n.link"></v-img>
          <p class="black--text font-weight-bold">{{ n.name }}</p>
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
  background: linear-gradient(90deg,
      rgba(192, 204, 218, 0.1) 0%,
      rgba(192, 204, 218, 0.6) 50.38%,
      rgba(192, 204, 218, 0.1) 100%);
}
</style>

<script>
export default {
  data: () => ({
    model: null,
    imageList: [
      { link: "/stack_1.png", name: 'Nuxt.js' },
      { link: "/stack_2.jpg", name: 'Adonis.js' },
      { link: "/stack_3.png", name: 'MongoDB' },
      { link: "/stack_4.png", name: 'TypeScript' },
      { link: "/stack_5.png", name: 'Vue.js' },
      { link: "/stack_8.svg" , name: 'Node.js' },
      { link: "/stack_9.svg" , name: 'React.js'  },
      { link: "/stack_10.svg"  , name: 'Flutter' },
      { link: "/stack_12.png"  , name: 'Cypress' },
      { link: "/stack_14.png"  , name: 'NGINIX' },
      { link: "/stack_17.png"  , name: 'Jest' },
      { link: "/stack_19.png"  , name: 'AWS' },
      { link: "/stack_20.png"  , name: 'FireBase' },
      { link: "/stack_21.png"  , name: 'MySQL' },
    ],
    servicesList: [
      {
        header: "Architectural designing",
        // img_d: "/web-designw.png",
        img_w: "/web-design.png",
      },
      {
        header: "Mobile and Web App Dev",
        // img_d: "/dataw.png",
        img_w: "/cloud-computing.png",
      },
      {
        header: "Hire from top 1% talent",
        // img_d: "/cloud-computingw.png",
        img_w: "/data.png",
      },
    ],
  }),
};
</script>