<template>
  <v-container>
    <v-row class="center text-center">
      <v-col class="col-sm-12" align="center">
        <v-btn class="accept-btn" color="elgreen" rounded medium>Bekreft</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "StartScreen",

  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style lang="scss">
@import "../styles/style.scss";

.accept-btn {
  @include basic-btn-green;
}
</style>
