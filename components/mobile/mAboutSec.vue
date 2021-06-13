<template>
  <section id="mabout" v-intersect="onIntersect">
    <v-row justify="center">
      <div class="about mx-5" style="margin-top: 100px">
        <div>
          <v-row>
            <v-col cols="1" class="d-none d-sm-flex"></v-col>
            <v-col cols="11">
              <v-col sm="8">
                <h1 class="display-1 font-weight-bold my-8 black--text">
                  ABOUT US
                </h1></v-col
              >
              <v-col sm="8">
                <h2 class="font-weight-light black--text">
                  At Cidroy, we live the philosophy of connected world and
                  connected experiences. We help top organizations stay
                  competitive, win new markets & leveraging the full potential
                  of the latest disruptive technologies thereby thriving on the
                  change that is powered by an intelligent connect between
                  technology and humans. <br />
                  <br />
                  <strong>
                    We are fast in curating, smart in managing & subtle in
                    delivering your precious digital idea.</strong
                  >
                </h2>
              </v-col>
              <v-row class="mt-15">
                <v-col cols="12" sm="3"
                  ><h2
                    class="
                      text-center
                      display-1
                      font-weight-bold
                      my-2
                      black--text
                    "
                  >
                    {{ countryCount }} Countries
                  </h2>
                  <h4
                    class="text-center headline font-weight-light black--text"
                  >
                    Operating around <br />
                    the world
                  </h4></v-col
                >
                <v-col cols="12" sm="3"
                  ><h2
                    class="
                      text-center
                      display-1
                      font-weight-bold
                      my-2
                      black--text
                    "
                  >
                    {{ projectCount }}+
                  </h2>
                  <h4
                    class="text-center headline font-weight-light black--text"
                  >
                    Projects delivered
                  </h4></v-col
                >
                <v-col cols="12" sm="3"
                  ><h2
                    class="
                      text-center
                      display-1
                      font-weight-bold
                      my-2
                      black--text
                    "
                  >
                    {{ consultantCount }}+
                  </h2>
                  <h4
                    class="text-center headline font-weight-light black--text"
                  >
                    Consultants around <br />
                    the world
                  </h4></v-col
                >
                <v-col cols="12" sm="3"
                  ><h2
                    class="
                      text-center
                      display-1
                      font-weight-bold
                      my-2
                      black--text
                    "
                  >
                    {{ clientCount }}+
                  </h2>
                  <h4
                    class="text-center headline font-weight-light black--text"
                  >
                    Consultants around <br />
                    the world
                  </h4></v-col
                >
              </v-row>
            </v-col></v-row
          >
        </div>
      </div>
    </v-row>
  </section>
</template>

<style scoped>
.about {
  background-image: url("/aboutBG.png");
  background-size: contain;
  width: 80%;
  height: 700px;
}
</style>



<script>
export default {
  data: () => ({
    countryCount: 0,
    projectCount: 0,
    consultantCount: 0,
    clientCount: 0,
    startCount: false,
  }),
  mounted: function () {
    // this.setProjectCount();
  },
  methods: {
    onIntersect(entries, observer) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      console.log("ENTERIES", entries);
      if (entries[0].isIntersecting) {
        console.log("AYA BC")
        this.setHover();
        this.startCount = true;
      }
    },
    setHover() {
      if (this.startCount == false) {
        this.setCountries();
        this.setProjectCount();
        this.setConsultant();
        this.setClient();
        this.startCount = true;
      }
    },
    setCountries() {
      this.countryCount = this.countryCount + 1;
      if (this.countryCount < 3) {
        setTimeout(this.setCountries, 200);
      }
    },
    setProjectCount() {
      this.projectCount = this.projectCount + 1;
      if (this.projectCount < 20) {
        setTimeout(this.setProjectCount, 150);
      }
    },
    setConsultant() {
      this.consultantCount = this.consultantCount + 1;
      if (this.consultantCount < 15) {
        setTimeout(this.setConsultant, 150);
      }
    },
    setClient() {
      this.clientCount = this.clientCount + 1;
      if (this.clientCount < 10) {
        setTimeout(this.setClient, 150);
      }
    },
  },
};
</script>