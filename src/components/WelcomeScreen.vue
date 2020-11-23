<template>
  <div class="welcomeScreen">
    <v-container fill-height my-10>
      <v-row>
        <v-col cols="12" justify="center" align="center">
          <h1 class="mainHeader">Velkommen!</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" justify="center" align="center">
          <div class="chargeAnimation">
            <v-img
              class="chargeImage"
              alt="Charge Icon"
              :src="require('@/assets/images/deco/electric-plugin.png')"
              contain
              max-width="300"
              transition="scale-transition"
            />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" justify="center" align="center">
          <h1 class="mainHeader heading-4">Koble til for å starte lading!</h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
export default {
  name: "WelcomeScreen",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "src/styles/style.scss";

h1 {
  font-size: 4em;
  color: $elblack;
  font-weight: 300;
  word-break: break-word;
}
</style>
