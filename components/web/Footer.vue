<template>
  <div
    style="
      background-color: #23242a;
      width: 100%;
      height: 300px;
      margin-top: 200px;
    "
  >
    <v-col>
      <v-row>
        <v-col cols="1" />
        <v-col cols="5">
          <v-row class="mt-8">
            <v-img src="/cidroy_logo_2.png" contain max-width="50" />
            <h1 class="subtitle-1 font-weight-light grey--text text-left ml-2">
              <strong> CIDROY </strong> <br />
              TECHNOLOGIES LLP
            </h1>
          </v-row>
          <h1 class="caption font-weight-light grey--text text-left mt-10">
            Cidroy was founded in the year 2017. The company was built on a
            belief that not only we will solve other people's problem but also
            introduce state of the art tech and management solutions to
            revolutionalize their own business. It all started when we decided
            to solve technical and management related problems in the community,
            ranging from small scale startups to giant companies.
          </h1>
        </v-col>
        <v-col cols="1">
          <h1 class="subtitle-1 font-weight-light grey--text text-left mt-13">
            Links
          </h1>
          <h1 class="subtitle-1 font-weight-light white--text text-left mt-10" @click="$vuetify.goTo('#about')">
            About
          </h1>
          <h1 class="subtitle-1 font-weight-light white--text text-left mt-4" @click="$vuetify.goTo('#service')">
            Service
          </h1>
        </v-col>
        <v-col cols="3" class="pl-10">
          <h1 class="subtitle-1 font-weight-light grey--text text-left mt-13">
            Social
          </h1>
          <v-row class="mt-10">
            <v-icon dark class="pa-2">mdi-facebook</v-icon>
            <v-icon dark class="pa-2">mdi-twitter</v-icon>
            <v-icon dark class="pa-2">mdi-instagram</v-icon>
            <v-icon dark class="pa-2">mdi-rss</v-icon>
          </v-row>
        </v-col>
        <v-col cols="2">
          <h1 class="subtitle-1 font-weight-light grey--text text-left mt-13">
            Contact Email
          </h1>
          <h1 class="subtitle-1 font-weight-light white--text text-left mt-4">
            sales@cidroy.com
          </h1>
        </v-col>
      </v-row>
      <v-divider dark class="mt-5" />
      <v-row align="center" justify="center">
        <v-col cols="6">
          <h1 class="subtitle-1 font-weight-light grey--text text-center mt-3">
            © 2021 Cidroy Technologies LLP. All Rights Reserved
          </h1>
        </v-col>
        <v-col cols="6">
          <h1 class="subtitle-1 font-weight-light white--text text-center mt-3">
            Terms of Service
          </h1>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>