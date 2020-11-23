<template>

<!--     // Dialog box number 1 - Help - Main Menu // -->
  <v-dialog
    max-width="800px"
    v-model="helpMenuDialog"
    transition="dialog-bottom-transition"
    overlay-color="elblack"
    overlay-opacity="0.8"
  >
    <template v-slot:activator="{ on }">
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
            <v-list rounded>
              <v-list-item-group>
                <v-list-item class="my-3 rounded elgreen elevation-3">
                  <v-list-item-content @click="contactDialog = !contactDialog">
                    <h3>Kontakt Support</h3>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="my-3 rounded elblue elevation-3">
                  <v-list-item-content @click="faqDialog = !faqDialog">
                    <h3>FAQ</h3>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-btn
              class="basic-btn basic-btn-green"
              x-large
              elevation="10"
              text
              @click="helpMenuDialog = false"
            >
              Tilbake</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>

<!--     // Dialog box number 2 - Contact Information // -->

    <v-dialog v-model="contactDialog" max-width="600px">
      <v-card class="pa-3">
        <v-container>
          <v-row>
            <v-col cols="12" justify="center" align="center">
              <h1>Kontakt Support</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="5" justify="center">
              <h3>
                Kontakt Informasjon
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                inventore aliquam nobis facilis! Molestias explicabo debitis, a
                optio voluptatum, aspernatur alias ipsam ducimus laudantium
                quidem quisquam quo suscipit placeat inventore.
              </p>
            </v-col>
            <v-col cols="2" justify="center" align="center"
              ><v-divider vertical></v-divider
            ></v-col>

            <v-col cols="12" sm="5" justify="center" align="center">
                <v-chip class="my-3 pa-9" large color="elblue">
                    <v-icon x-large white left>mdi-ev-station </v-icon>
                    <span>Lader ID: <b>432</b></span>
                </v-chip>
                <v-chip class="my-3 pa-9" large color="elred">
                    <v-icon x-large white left>mdi-alert-circle </v-icon>
                    <span>Feilkode ID: <b>4</b></span>
                </v-chip>
            
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" justify="center" align="center">
              <v-btn
                class="basic-btn basic-btn-blue"
                x-large
                elevation="10"
                text
                @click="contactDialog = false"
              >
                Tilbake</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>

    <!--     // Dialog box number 3 - FAQ Menu // -->
    <v-dialog v-model="faqDialog" max-width="600px">
      <v-card class="pa-3">
        <v-container>
          <v-row>
            <v-col cols="12" justify="center" align="center">
              <h1>FAQ</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" justify="center">
                <v-expansion-panels accordion focusable>
                    <v-expansion-panel :key="i">
                        <v-expansion-panel-header>
                        <h3 >Spørsmål 1</h3>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel :key="i">
                        <v-expansion-panel-header>
                       <h3>Spørsmål 2</h3>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque corrupti voluptatum perspiciatis, voluptatibus et nulla nihil quia at, adipisci molestias maxime porro. Similique, libero dolorum. Suscipit quam officia iure cum?
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel :key="i">
                        <v-expansion-panel-header>
                        <h3>Spørsmål 3</h3>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur totam tempore provident, natus ea dolor, assumenda quos ad dolorem error quaerat magni explicabo ratione recusandae veritatis nihil labore maiores.
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" justify="center" align="center">
              <v-btn
                class="basic-btn basic-btn-blue"
                x-large
                elevation="10"
                text
                @click="faqDialog = false"
              >
                Tilbake</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>

<script>
export default {
  name: "dlgHelp",
  data() {
    return {
      helpMenuDialog: false,
      contactDialog: false,
      faqDialog: false
    };
  }
};
</script>

<style lang="scss"></style>
