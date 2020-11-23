<template>
  <v-container>
    <v-row class="center text-center">
      <v-col class="col-sm-12" align="center">
        <div class="button-collection">
          <v-btn class="test-btn" color="elgreen white--text" small
            >Bekreft</v-btn
          >
          <v-btn class="test-btn" color="elblue" medium>Informasjon</v-btn>
          <v-btn class="test-btn" color="elyellow white--text" large
            >Advarsel</v-btn
          >
          <v-btn class="test-btn" color="elred" x-large>Avbryt</v-btn>
        </div>
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

.test-btn {
  margin: 10px;
  margin-top: 20%;
}
</style>
