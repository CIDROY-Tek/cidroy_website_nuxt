<template>
  <section id="choose">
    <div class="chooseBg"></div>
    <div>
      <v-row style="margin-top: 250px">
        <v-col sm="2" class="d-none d-sm-flex"></v-col>
        <v-col cols="10">
          <h1 class="display-3 font-weight-bold my-8 black--text">
            Why choose us?
          </h1>
          <v-row class="mt-5">
            <v-col cols="4"
              ><v-img src="/choose_1.png" style="margin-top: 100px"
            /></v-col>
            <v-col cols="6" justify="space-between">
              <v-col class="pl-15">
                <h1 class="display-1 font-weight-bold my-6 black--text">
                  The Proof of Concept
                </h1>
                <h3 class="font-weight-light black--text my-5">
                  Unlike the present industry practices, Our approach towards
                  projects is different, once we get to know your requirements,
                  we provide you with a proof of concept document that specifies
                  how an idea can be brought to reality and you will only have
                  to pay if you are choosing us to develop the product.
                </h3>
              </v-col>
              <v-img src="/choose_2.png" style="margin-top: 100px"
            /></v-col>
          </v-row>

          <v-row class="mt-10" align="center">
            <v-col cols="5">
              <v-img src="/choose_4.png" />
            </v-col>
            <v-col cols="5" style="z-index: 10">
              <h3 class="display-1 font-weight-bold white--text my-10">
                Minimum Viable Product
              </h3>
              <h3 class="font-weight-light white--text my-10">
                For projects that are at a stage wherein a minimum viable
                product is required by the client for testing out the viability
                of the product in the market and also the product to market fit.
                For such prospects we come up with a fast forward MVP
                development plan that makes sure that the MVP is released at the
                earliest and at an affordable price point.
              </h3>
            </v-col>
          </v-row>

          <v-row class="mt-10" align="center">
            <v-col cols="5" style="z-index: 10">
              <h3 class="display-1 font-weight-bold white--text my-10">
                The best design for your business
              </h3>
              <h3 class="font-weight-light white--text my-10">
                We follow a well tested designing process for developing any
                application, let us know about your business and your customers
                and we will provide you with a design theme and ideas that fits
                your needs and pay only if you like the design theme and follow
                the full design process.
              </h3>
            </v-col>
            <v-col cols="5">
              <v-img src="/choose_3.png" />
            </v-col>
          </v-row>
        </v-col>
        <v-col sm="2" class="d-none d-sm-flex"></v-col>
      </v-row>
    </div>
  </section>
</template>

<style scoped>
.chooseBg {
  background-color: #1c344c;
  width: 100%;
  height: 1425px;
  z-index: 0;
  position: absolute;
  top: 4000px;
  left: 0;
  right: 0;
}
</style>