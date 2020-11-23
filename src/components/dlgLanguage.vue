<template>
  <v-dialog max-width="500px" v-model="dialog">
      <template v-slot:activator="{ on }" class="nav-btn">
          <div v-on="on" >
              <v-icon  class="nav-icon nav-icon-green" color="white" large>
                  mdi-flag
                </v-icon>
               <p>Språk</p>
          </div>
                
              </template>
      <v-card>
      <v-card-title>
          <h2>Språkvalg</h2>
      </v-card-title>
      <v-btn class="accept-btn" elevation="10" text @click="dialog = false"> Ok</v-btn>
      </v-card>
  </v-dialog>
</template>

<script>
    export default {
        name: "dlgLanguage",
        data() {
            return {
                dialog: false,
            }
        },
    }
</script>

<style lang="scss">
.nav-icon {
  padding: 10px;
  border-radius: 50%;

  &-green {
    background-color: $elgreen;
  }

  &-blue {
    background-color: $elblue;
  }
}
</style>