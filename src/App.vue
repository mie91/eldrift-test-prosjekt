<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-main>
      <Navigation />
      <StartScreen />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import StartScreen from "./components/StartScreen.vue";
import Navigation from "./components/layout/Navigation.vue";

export default Vue.extend({
  name: "App",

  components: {
    Navigation,
    StartScreen
  },

  data: () => ({
    //
  })
});
</script>

<style lang="scss">
@import "./styles/style.scss";

#app {
  font-family: $poppins;
  background: white;
  background: $soft-gradient;
}
</style>
