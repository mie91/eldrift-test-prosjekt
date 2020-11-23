<template>
  <v-dialog
    max-width="600px"
    v-model="dialog"
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on }" >
      <div v-on="on" class="nav-btn">
        <v-icon class="nav-icon nav-icon-blue" color="white" large>
          mdi-information-outline
        </v-icon>
        <p>Hjelp</p>
      </div>
    </template>
    <v-card class="pa-3">
      <v-container>
        <v-row>
          <v-col cols="12" justify="center" align="center">
            <h1>Hjelp</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "dlgHelp",
  data() {
    return {
      dialog: false,
    }
  }
};
</script>

<style lang="scss">


</style>
