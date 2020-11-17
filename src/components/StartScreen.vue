<template>
  <v-container>
    <v-row class="center text-center">
      <v-col class="main-logo col-sm-12" align="center">
        <v-img
          class="logo"
          contain
          src="..\assets\images\logos\vertikal-original-medium.png"
          max-width="350px"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "StartScreen",

  data: () => ({})
});
</script>

<style lang="scss">
@import "../styles/style.scss";

.main-logo {
  margin-top: 20%;
}
</style>
