<template>
  <v-app>
    <div class="d-flex align-center justify-center" style="height: 100vh">
      <v-col align="center">
        <v-progress-circular
          :size="70"
          color="red"
          indeterminate
        ></v-progress-circular>
        <div
          class="title text-uppercase text-center"
          v-text="'Please Wait'"
        ></div
      ></v-col>
    </div>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.v-progress-circular {
  margin: 1rem;
}
</style>