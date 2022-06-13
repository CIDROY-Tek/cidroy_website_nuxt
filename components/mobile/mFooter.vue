<template>
  <div style="background-color: #23242a; width: 100%; margin-top: 200px">
    <v-col>
      <v-row>
        <v-col cols="12">
          <v-row class="mt-3 px-5" justify="start">
            <v-img src="/cidroy_logo_2.png" contain max-width="70" />
            <h1 class="title font-weight-light grey--text text-left ml-2">
              <strong> CIDROY </strong> <br />
              TECHNOLOGIES LLP
            </h1>
            <h1 class="subtitle-1 font-weight-light grey--text text-left mt-5">
              Cidroy was founded in the year 2017. The company was built on a
              belief that not only we will solve other people's problem but also
              introduce state of the art tech and management solutions to
              revolutionalize their own business. It all started when we decided
              to solve technical and management related problems in the
              community, ranging from small scale startups to giant companies.
            </h1>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="px-3">
        <v-col cols="6">
          <h1 class="subtitle-1 font-weight-bold grey--text text-left mt-5">
            Links
          </h1>
          <h1
            class="subtitle-1 font-weight-bold white--text text-left mt-2"
            @click="$vuetify.goTo('#mabout')"
          >
            About
          </h1>
          <h1
            class="subtitle-1 font-weight-bold white--text text-left mt-2"
            @click="$vuetify.goTo('#mservice')"
          >
            Service
          </h1>
        </v-col>
        <v-col cols="6">
          <h1 class="subtitle-1 font-weight-bold grey--text text-left mt-5">
            Contact Email
          </h1>
          <a
            class="subtitle-1 font-weight-bold white--text text-left mt-2"
            href="mailto:mail@cidroy.com"
          >
            mail@cidroy.com
          </a>
        </v-col>
      </v-row>
      <v-row class="px-3">
        <v-col cols="12">
          <h1 class="subtitle-1 font-weight-bold grey--text text-left mt-3">
            Address
          </h1>
          <v-row class="mt-2" justify="start">
            <a class="caption font-weight-light white--text text-left px-3">
              Cubicle No. 24, The Fatorda Salesian Society, Don Bosco Fatorda,
              Margao, South Goa - 403602, INDIA
            </a>
          </v-row>
        </v-col>
      </v-row>
      <v-divider class="mt-5" dark />
      <v-row class="px-3">
        <v-col cols="8">
          <h1 class="subtitle-2 font-weight-bold grey--text text-left mt-5">
            © 2021 Cidroy Technologies LLP.<br />
            All Rights Reserved
          </h1>
        </v-col>
        <v-col cols="4"
          ><h1 class="subtitle-2 font-weight-bold white--text text-center mt-5">
            Terms of Service
          </h1>
        </v-col>
      </v-row>

      <!-- <v-col cols="1">
          <h1 class="subtitle-1 font-weight-light grey--text text-left mt-13">
            Links
          </h1>
          <h1 class="subtitle-1 font-weight-light white--text text-left mt-10">
            About
          </h1>
          <h1 class="subtitle-1 font-weight-light white--text text-left mt-4">
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
        </v-col> -->
      <!-- <v-divider dark class="mt-5" />
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
      </v-row> -->
    </v-col>
  </div>
</template>