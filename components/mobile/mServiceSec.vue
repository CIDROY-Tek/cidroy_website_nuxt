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
      <v-slide-group v-model="model" class="mt-15" center-active show-arrows>
        <v-slide-item
          v-for="(n, index) in servicesList"
          :key="`n-${index}`"
        >
            <v-card
              class="ma-5"
              rounded
              elevation="2"
              width="275px"
              height="250px"
              color='white'
              style="box-shadow: 10px 10px 50px 3px rgba(39, 92, 141, 0.1);"
            >
              <v-card-title
                class="justify-center black--text"
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
                    :src=" n.img_w" />
                    </v-col
              ></v-row>
            </v-card>
        </v-slide-item>
        <template v-slot:prev="{ on, attrs }">
          <v-avatar  
            v-bind="attrs"
            v-on="on"
            @click="setIcon_Prev"
            style="position: absolute; top: 325px; left: 75px" size="36">
            <v-icon :color="current_Card == 0 ? 'grey' : 'red'">mdi-arrow-left</v-icon>
          </v-avatar>
        </template>

        <!-- <template v-slot:prev="{ on, attrs }">
         
          <v-btn
          text
            fab
            icon
            :color="current_Card == 0 ? 'grey' : 'red'"
            v-bind="attrs"
            v-on="on"
            @click="setIcon_Prev"
            style="position: absolute; top: 325px; left: 75px"
          >
            <v-icon>mdi-arrow-left</v-icon></v-btn
          >
        </template> -->
        <template v-slot:next="{ on, attrs }">
          <!-- <v-btn
            fab
            icon
            :color="current_Card == 2 ? 'grey' : 'red'"
            v-bind="attrs"
            v-on="on"
            @click="setIcon_Next"
            style="position: absolute; top: 325px; left: 150px"
          >
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn> -->
          <v-avatar 
            v-bind="attrs"
            v-on="on"
            @click="setIcon_Next"
            style="position: absolute; top: 325px; left: 150px" size="36">
            <v-icon  :disabled="current_Card == 2 "  :color="current_Card == 2 ? 'grey' : 'red'">mdi-arrow-right</v-icon>
          </v-avatar>
        </template>
      </v-slide-group>
      <h3
        class="display-1 font-weight-bold text-center black--text px-5"
        style="margin-top: 200px; margin-bottom: 50px"
      >
        Our Technological Stacks
      </h3>
      <div class="sepLine my-5" />
      <v-row class="align-center mx-3 px-5">
        <v-col
          cols="4"
          v-for="(n, index) in imageList"
          :key="`n-${index}`"
          :src="n.link"
          align="center"
        >
          <v-img width="75" height="75" contain :src="n.link" ></v-img>
          <p class="black--text font-weight-bold">{{ n.name }}</p>
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
    current_Card: 0,
    imageList: [
    { link: "/stack_1.png", name: 'Nuxt.js' },
    { link: "/stack_2.jpg", name: 'Adonis.js' },
    { link: "/stack_3.png", name: 'MongoDB' },
    { link: "/stack_4.png", name: 'TypeScript' },
    { link: "/stack_5.png", name: 'Vue.js' },
    { link: "/stack_8.svg", name: 'Node.js' },
    { link: "/stack_9.svg", name: 'React.js'  },
    { link: "/stack_10.svg", name: 'Flutter' },
    { link: "/stack_12.png", name: 'Cypress' },
    { link: "/stack_14.png", name: 'NGINIX' },
    { link: "/stack_17.png", name: 'Jest' },
    { link: "/stack_19.png", name: 'AWS' },
    { link: "/stack_20.png", name: 'FireBase' },
    { link: "/stack_21.png", name: 'MySQL' },
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
  methods: {
    setIcon_Next() {
      // this.current_Card = this.cycle[this.current_Card]
console.log('=============>next',this.current_Card)
      switch (this.current_Card) {
        case 0:
          this.current_Card = 1;
          break;

        case 1:
          this.current_Card = 2;
          break;

        case 2:
          // this.current_Card = 0;
          return
          // break;

        default:
          break;
      }
    },
    setIcon_Prev() {
console.log('=============>prev',this.current_Card)

      switch (this.current_Card) {
        case 0:
          // this.current_Card = 2;
          return
          // break;

        case 1:
          this.current_Card = 0;
          break;

        case 2:
          this.current_Card = 1;
          break;

        default:
          break;
      }
    },
  },
};
</script>