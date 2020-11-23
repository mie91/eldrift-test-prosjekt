<template>
<!--     // Dialog box number 1 - Languages - Main Menu // -->
  <v-dialog
    max-width="800px"
    v-model="dialog"
    transition="dialog-bottom-transition"
    overlay-color="elblack"
    overlay-opacity="0.8"
  >
    <template v-slot:activator="{ on }">
      <div v-on="on" class="nav-btn">
        <v-icon class="nav-icon nav-icon-green" color="white" large>
          mdi-flag
        </v-icon>
        <p>Språk</p>
      </div>
    </template>
    <v-card class="pa-3">
      <v-container>
        <v-row>
          <v-col cols="12" justify="center" align="center">
            <h1>Velg Språk</h1>
            <v-list rounded>
              <v-list-item-group v-model="selectedLanguage" color="elgreen">
                <v-list-item
                  class="my-3 rounded elgrey elevation-3"
                  v-for="language in languages"
                  :key="language.type"
                  @click="dialog = false"
                >
                  <v-list-item-content
                    :class="`language ${language.available}`"
                  >
                    <h3>{{ language.type }}</h3>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-btn
              class="basic-btn basic-btn-green"
              x-large
              elevation="10"
              text
              @click="dialog = false"
            >
              Tilbake</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "dlgLanguage",
  data() {
    return {
      dialog: false,
      selectedLanguage: 1,
      languages: [
        {
          type: "Norwegian",
          available: "available",
          icon: ""
        },
        {
          type: "English",
          available: "unavailable",
          icon: ""
        },
        {
          type: "Spanish",
          available: "unavailable",
          icon: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.language.unavailable {
  color: rgba(29, 29, 29, 0.3);
  cursor:not-allowed;
}
</style>
