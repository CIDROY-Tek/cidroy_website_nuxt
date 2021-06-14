<template>
  <div>
    <v-app-bar dark color="transparent" dense elevation="0" id="mnavbar">
      <v-toolbar-title class="row pt-3"
        ><v-img class="ml-2" src="/cidroy_logo.png" contain max-width="40" />
        <span class="ml-2 mt-1" style="font-size: 18px; line-height: 1"
          ><strong>CIDROY</strong><br />TECHNOLOGIES</span
        >
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        class="mt-5"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
      style="top: 0 !important; background-color: #000000bb"
    >
      <v-row class="mt-5 mb-15" justify="end"
        ><v-btn class="headline mr-2" dark text @click="drawer = !drawer"
          >X</v-btn
        ></v-row
      >
      <v-row class="my-15" justify="center"
        ><v-btn class="headline" dark text @click="sendTo('#mservice')"
          >Services</v-btn
        ></v-row
      >
      <v-row class="my-15" justify="center"
        ><v-btn class="headline" dark text @click="sendTo('#mabout')"
          >About</v-btn
        ></v-row
      >
      <v-row class="my-15" justify="center"
        ><v-btn class="headline" dark text @click="sendTo('#mcontact')"
          >Contact Us</v-btn
        ></v-row
      >
    </v-navigation-drawer>
    <section id="hero">
      <v-row class="pl-5" style="padding-top: 100px">
        <v-col cols="12">
          <h1 class="font-weight-light white--text">TRANSCENDING GROWTH</h1>
        </v-col>
        <v-col cols="12">
          <h1 class="heading font-weight-bold my-8 white--text">
            <span class="text_1">Re-Inventing approach</span
            ><span class="text_2">Re-Inventing solutions</span>
          </h1>
        </v-col>
        <v-col cols="12">
          <v-btn
            large
            dark
            @click="$vuetify.goTo('#mcontact')"
            class="mt-2 red--text"
            color="white"
          >
            Get In Touch
          </v-btn>
        </v-col>
      </v-row>
      <div style="position: absolute; top: 350px; right: 0px">
        <div class="anim" v-if="pageLoaded">
          <!-- <v-row no-gutters>
            <v-card
              height="3"
              :width="imgSize_width"
              max-width="300"
              color="white"
            >
              <v-card
                height="3"
                :width="imgSize_width - imgSize_width / 1.2"
                color="red"
              />
            </v-card>
          </v-row> -->
          <v-img src="/heroBG.png" max-width="500" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.text_1 {
  animation: text1;
}

.text_2 {
  animation: text2;
}

.text_1,
.text_2 {
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  animation-duration: 15s;
  animation-timing-function: steps(25, end);
  animation-iteration-count: infinite;
}

.text_1::after,
.text_2::after {
  content: "|";
  position: absolute;
  right: -5;
  animation: caret infinite;
  animation-duration: 1s;
  animation-timing-function: steps(1, end);
}

@keyframes text2 {
  0%,
  50%,
  100% {
    width: 0;
  }

  60%,
  90% {
    width: 90%;
  }
}

@keyframes text1 {
  0%,
  50%,
  100% {
    width: 0;
  }
  10%,
  40% {
    width: 90%;
  }
}

@keyframes caret {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>

<style scoped>
#hero {
  width: 100%;
  height: 100vh;
  margin-top: -50px;
  z-index: 0;
  background: linear-gradient(
    180deg,
    #000000 9.38%,
    #1e0609 35.94%,
    #400d14 57.81%,
    #ea2e49 100%
  );
}
@keyframes slideInFromDown {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
.anim {
  mix-blend-mode: screen;
  animation: 2s ease-out 0s 1 slideInFromDown;
}
</style>


<script>
export default {
  data: () => ({
    pageLoaded: false,
    imgSize_width: 0,
    drawer: false,
    group: null,
  }),
  mounted: function () {
    this.pageLoaded = true;
    this.onResize();
  },
  methods: {
    sendTo(v) {
      this.drawer = !this.drawer;
      this.$vuetify.goTo(v);
    },
    onResize() {
      this.imgSize_width = parseInt(window.innerWidth / 1);
      console.log("RESIZE CALLED", this.imgSize_width);
      return this.imgSize_width;
    },
  },
};
</script>