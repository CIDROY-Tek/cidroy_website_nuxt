<template>
  <section id="mcontact">
    <v-row justify="center" style="margin-top: 150px">
      <div class="contactBG">
        <v-col cols="12">
          <v-row justify="center">
            <h1 class="display-2 font-weight-bold my-10 black--text">
              Contact Us
            </h1>
          </v-row>
          <v-row justify="center">
            <div class="seperator" />
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-row class="my-10 pl-5" align="center" justify="start">
                <v-col cols="1">
                  <v-img
                    src="/contact_vector_1.png"
                    min-width="30"
                    max-width="30"
                    contain
                  />
                </v-col>
                <v-col class="ml-10" cols="8">
                  <v-row justify="start">
                    <h1
                      class="title font-weight-light black--text text-center"
                    >
                      Nishant Singh
                    </h1>
                  </v-row>
                  <v-row justify="start">
                    <h1
                      class="title font-weight-light black--text text-center"
                    >
                      (+91) 9157999875
                    </h1>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="my-10 pl-5" align="center" justify="start">
                <v-col cols="1">
                  <v-img
                    src="/contact_vector_1.png"
                    min-width="30"
                    max-width="30"
                    contain
                  />
                </v-col>
                <v-col class="ml-10" cols="8">
                  <v-row justify="start">
                    <h1
                      class="title font-weight-light black--text text-center"
                    >
                      Akshay Kumar
                    </h1>
                  </v-row>
                  <v-row justify="start">
                    <h1
                      class="title font-weight-light black--text text-center"
                    >
                      (+91) 8806625112
                    </h1>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="my-10 pl-5" align="center" justify="start">
                <v-col cols="1">
                  <v-img
                    src="/contact_vector_1.png"
                    min-width="30"
                    max-width="30"
                    contain
                  />
                </v-col>
                <v-col class="ml-10" cols="8">
                  <v-row justify="start">
                    <h1
                      class="title font-weight-light black--text text-center"
                    >
                      A. M. J. Ramaraju
                    </h1>
                  </v-row>
                  <v-row justify="start">
                    <h1
                      class="title font-weight-light black--text text-center"
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
                  v-model="name"
                  color="red"
                  append-icon="mdi-account"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="8">
                <v-text-field
                  filled
                  label="Number"
                  v-model="number"
                  color="red"
                  append-icon="mdi-phone"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="8">
                <v-text-field
                  filled
                  label="Email"
                  v-model="email"
                  color="red"
                  append-icon="mdi-gmail"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="8">
                <v-textarea
                  filled
                  label="How Can I Help You"
                  v-model="message"
                  color="red"
                  append-icon="mdi-message"
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-btn large dark width="100%" color="red" @click="sendMail"> Send</v-btn>
              </v-col>
            </v-col>
          </v-row>
        </v-col>
      </div>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      timeout="3000"
      top
      :color="snackbar_color"
    >
      {{ snackbar_text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Okay </v-btn>
      </template>
    </v-snackbar>
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


<script>
import emailjs from "emailjs-com";
export default {
  data: () => ({
    name: null,
    number: null,
    email: null,
    message: null,
    snackbar: false,
    snackbar_text: "",
    snackbar_color: "success",
  }),
  mounted: function () {
    emailjs.init("user_de49AgyRcXIpyR1vMeVbF"); //Insert your User ID
  },
  methods: {
    async sendMail() {
      let templateParams = {
        req_name: this.name,
        req_number: this.number,
        req_email: this.email,
        req_message: this.message,
      };
      try {
        var mailResponse = await emailjs.send(
          "service_a459dac",
          "template_mrt3yr2",
          templateParams
        ); //use your Service ID and Template ID

        if (mailResponse.status == 200) {
          console.log("SUCCESS BUT TRIP")
          console.log("SUCCESS!", mailResponse.status, mailResponse.text);
          this.name = null;
          this.number = null;
          this.email = null;
          this.message = null;
          this.snackbar_text = "Message Sent Successfuly";
          this.snackbar_color = "success";
          this.snackbar = true;
        } else {
          console.log("FAILED...", mailResponse);
          this.snackbar_text = "Oops!!! Something went Wrong! \n Please Try Again Later!";
          this.snackbar_color = "danger";
          this.snackbar = true;
        }
      } catch (err) {
        console.log("MAIL SERVER FAILED...", err);
        this.snackbar_text = "Oops!!! Our Mail Servers seem down!";
        this.snackbar_color = "danger";
        this.snackbar = true;
      }
    },
  },
};
</script>
