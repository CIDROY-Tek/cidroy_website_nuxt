<template>
  <section id="mportfolio">
    <v-row align="center" justify="center" style="margin-top: 200px">
      <!-- <h3
        class="display-1 font-weight-bold black--text px-5"
        style="margin-top: 100px"
      >
        Trusted by Agencies <br />
        & Business Owners
      </h3>
      <v-slide-group v-model="model" class="pa-4 mt-10">
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
    </v-row>
    <div class="sepLine my-5" />
    <div id="container">
      <div class="photobanner">
        <img
          class="mx-10"
          width="100"
          height="100"
          v-for="(n, index) in imageList"
          :key="`n-${index}`"
          :src="n.link"
          style="object-fit: contain"
        />
      </div>
    </div>
    <div class="sepLine my-5" />
  </section>
</template>
<style scoped>
#container {
  height: 100px;
  position: relative;
  overflow: hidden;
}
.photobanner {
  position: absolute;
  top: 0px;
  left: 0px;
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
      { link: "/client_logo_2.png" },
      { link: "/client_logo_3.png" },
      { link: "/client_logo_4.png" },
      { link: "/client_logo_5.png" },
      { link: "/client_logo_6.png" },
      { link: "/client_logo_8.png" },
      { link: "/client_logo_9.png" },
    ],
    servicesList: [
      {
        header: "Design Innovation",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
      },
      {
        header: "Business Process Management",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
      },
      {
        header: "MVP Development",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
      },
      {
        header: "Design Innovation",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
      },
      {
        header: "Business Process Management",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
      },
      {
        header: "MVP Development",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat, viverra magna risus. ",
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