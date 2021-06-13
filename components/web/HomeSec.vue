<template>
  <div>
    <!-- ------------------------ NAV BAR ------------------------ -->
    <v-app-bar dark color="transparent" dense elevation="0" id="navbar">
      <v-toolbar-title class="row pt-3"
        ><v-img class="ml-2" src="/cidroy_logo.png" contain max-width="40" />
        <!-- <v-img class="ml-2" src="/cidroy_name.png" contain max-width="100" /> -->
        <span class="ml-2 mt-1" style="font-size: 18px; line-height: 1"
          ><strong>CIDROY</strong><br />TECHNOLOGIES</span
        >
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text class="text-capitalize mt-2" @click="$vuetify.goTo('#hero')">
        Home
      </v-btn>
      <v-btn
        text
        class="text-capitalize mt-2"
        @click="$vuetify.goTo('#service')"
      >
        Service
      </v-btn>
      <v-btn text class="text-capitalize mt-2" @click="$vuetify.goTo('#about')">
        About
      </v-btn>
      <!-- <v-btn
        text
        class="text-capitalize mt-2"
        @click="$vuetify.goTo('#portfolio')"
      >
        Portfolio
      </v-btn> -->
      <v-btn
        text
        class="text-capitalize mt-2"
        @click="$vuetify.goTo('#contact')"
      >
        Contact
      </v-btn>
      <v-btn color="#EA2E49" class="text-capitalize mt-2"  @click="$vuetify.goTo('#contact')" > Get in Touch </v-btn>
    </v-app-bar>
    <!-- ------------------------ HOME PAGE ------------------------ -->
    <section id="hero">
      <div>
        <!-- <v-img class="rounded-bl-xl" src="/mainBG.png" height="820" /> -->
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-row align="center" justify="center" style="margin-top: 300px">
              <v-col cols="12" md="6" xl="8">
                <h1 class="font-weight-light white--text">
                  TRANSCENDING GROWTH
                </h1>
                <h1 class="display-1 font-weight-bold my-8 white--text">
                  <span class="text_1">Re-Inventing approach</span
                  ><span class="text_2">Re-Inventing solutions</span>
                </h1>
                <!-- <h1
                  class="display-3 font-weight-bold my-8 white--text anim_LTR"
                >
                  We provide Rapid <br />
                  Solutions for your <br />
                  business
                </h1> -->
                <v-btn
                  large
                  dark
                  @click="$vuetify.goTo('#contact')"
                  class="mt-5 red--text"
                  color="white"
                >
                  Get In Touch
                </v-btn>
              </v-col>
              <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down">
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div style="position: absolute; top: 100px; right: 0px">
        <div class="anim_RTL" v-if="pageLoaded">
          <!-- <v-row no-gutters>
            <v-card
              height="5"
              :width="imgSize_width"
              max-width="640"
              color="white"
            >
              <v-card
                height="5"
                :width="imgSize_width - 400"
                color="red"
                max-width="640"
              />
            </v-card>
          </v-row> -->
          <v-img src="/heroBG.png" width="800" contain />
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
  right: 0;
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
#navbar {
  z-index: 1;
}
#hero {
  width: 100%;
  height: 850px;
  z-index: 0;
  margin-top: -50px;
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
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes slide_RTL {
  0% {
    transform: translatex(100%);
  }
  100% {
    transform: translatex(0);
  }
}

.anim {
  mix-blend-mode: screen;
  animation: 2s ease-out 0s 1 slideInFromDown;
}

.anim_RTL {
  mix-blend-mode: screen;
  animation: 2s ease-out 0s 1 slide_RTL;
}
</style>

<script>
export default {
  data: () => ({
    pageLoaded: false,
    imgSize_width: 0,
  }),
  mounted: function () {
    this.pageLoaded = true;
    this.onResize();
  },
  methods: {
    onResize() {
      this.imgSize_width = parseInt(window.innerWidth / 2.25);
      console.log("RESIZE CALLED", this.imgSize_width);
      return this.imgSize_width;
    },
  },
};
</script>
