<template>
  <section id="contact">
    <v-row justify="center" style="margin-top: 150px">
      <div class="contactBG">
        <v-col cols="12">
          <v-row justify="center">
            <h1 class="display-3 font-weight-bold my-10 black--text">
              Contact Us
            </h1>
          </v-row>
          <v-row justify="center">
            <div class="seperator" />
          </v-row>
          <v-row justify="center" class="mx-15 px-15 mb-15">
            <v-img contain src="/contact_1.png" />
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-row class="my-10 pl-10" align="center" justify="end">
                <v-col cols="1">
                  <v-img
                    src="/contact_vector_1.png"
                    min-width="30"
                    max-width="30"
                    contain
                  />
                </v-col>
                <v-col cols="8">
                  <v-row justify="start">
                    <h1
                      class="title font-weight-light black--text text-center mx-5"
                    >
                      Nishant Singh
                    </h1>
                  </v-row>
                  <v-row justify="start">
                    <h1
                      class="title font-weight-light black--text text-center mx-5"
                    >
                      (+91) 7620314834
                    </h1>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="my-10 pl-10" align="center" justify="end">
                <v-col cols="1">
                  <v-img
                    src="/contact_vector_1.png"
                    min-width="30"
                    max-width="30"
                    contain
                  />
                </v-col>
                <v-col cols="8">
                  <v-row justify="start">
                    <h1
                      class="title font-weight-light black--text text-center mx-5"
                    >
                      Akshay Kumar
                    </h1>
                  </v-row>
                  <v-row justify="start">
                    <h1
                      class="title font-weight-light black--text text-center mx-5"
                    >
                      (+91) 8806625112
                    </h1>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="my-10 pl-10" align="center" justify="end">
                <v-col cols="1">
                  <v-img
                    src="/contact_vector_1.png"
                    min-width="30"
                    max-width="30"
                    contain
                  />
                </v-col>
                <v-col cols="8">
                  <v-row justify="start">
                    <h1
                      class="title font-weight-light black--text text-center mx-5"
                    >
                      A. M. J. Ramaraju
                    </h1>
                  </v-row>
                  <v-row justify="start">
                    <h1
                      class="title font-weight-light black--text text-center mx-5"
                    >
                      (+91) 9404708389
                    </h1>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="6">
              <v-col cols="12" sm="8">
                <v-text-field
                  filled
                  label="Name"
                  color="red"
                  append-icon="mdi-account"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="8">
                <v-text-field
                  filled
                  label="Number"
                  color="red"
                  append-icon="mdi-phone"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="8">
                <v-textarea
                  filled
                  label="How Can I Help You"
                  color="red"
                  append-icon="mdi-message"
                ></v-textarea>
              </v-col>
              <!-- <v-col cols="12" sm="8">
                <v-text-field
                  filled
                  label="NaHow Can I Help Youme"
                  color="red"
                  append-icon="mdi-map-marker"
                ></v-text-field>
              </v-col> -->
              <v-col cols="12" sm="8">
                <v-btn large dark color="red"> Send</v-btn>
              </v-col>
            </v-col>
          </v-row>
        </v-col>
      </div>
    </v-row>
  </section>
</template>

<style scoped>
.contactBG {
  width: 80%;
  height: 1200px;
  background: #ffffff;
  box-shadow: 0px 29px 0px -14px #ea2e49, 0px 52px 0px -24px #a9162b,
    0px 0px 50px -1px rgba(82, 82, 82, 0.1);
  border-radius: 40px;
}
.seperator {
  width: 15%;
  height: 3px;
  background-color: red;
}
</style>