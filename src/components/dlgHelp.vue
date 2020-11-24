<template>
  <!--     // Dialog box number 1 - Help - Main Menu // -->
  <v-dialog
    max-width="600px"
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
                <v-list-item class="my-3 rounded elevation-3">
                  <v-list-item-content @click="contactDialog = !contactDialog">
                    <h3>Kontakt Support</h3>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="my-3 rounded elevation-3">
                  <v-list-item-content @click="faqDialog = !faqDialog">
                    <h3>FAQ</h3>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-btn
              class="basic-btn basic-btn-blue"
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
              <h1>Support</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="5" justify="center" align="left">
              <v-list>
                <v-list-item-group>
                  <v-list-item>
                    <v-list-item-content>
                      <h3>Telefon:</h3>
                      (+47) 234 56 789
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <h3>Email:</h3>
                      eldift@support.no
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <h3>Åpningstider:</h3>
                      Man-Søn (7-22)
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>
            <v-col
              cols="2"
              d-sm-none
              justify="center"
              align="center"
              class="d-none d-sm-flex"
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
              <v-expansion-panels focusable>
                <v-expansion-panel v-for="faq in faqs" :key="faq.name">
                  <v-expansion-panel-header>
                    <h3>{{ faq.name }}</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{ faq.information }}
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
      faqDialog: false,
      faqs: [
        {
          name: "Hvordan lader jeg?",
          information:
            "Tenetur est ex quos, doloribus consectetur ipsa similique debitis! Doloremque, suscipit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium iste, delectus dolorem adipisci commodi aliquid. Deleniti illum, iure dolorem adipisci, in quisquam eius eveniet ducimus dolores eligendi, et autem!",
          icon: ""
        },
        {
          name: "Hvordan registrerer jeg bruker?",
          information:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi dolore nesciunt nisi voluptate libero veniam facilis, et doloribus voluptatem expedita, tempore quidem maxime perferendis. Voluptates culpa quam totam eligendi",
          icon: ""
        },
        {
          name: "Hvor laster jeg ned appen?",
          information:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor illo accusamus esse aliquam in iusto nulla, dolorem ut, sint tenetur est ex quos, doloribus consectetur ipsa similique debitis! Doloremque, suscipit!",
          icon: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
