<template
  ><header>
    <v-app-bar prominent>
      <v-container fluid>
        <v-row justify="center" align="center" class="navbar_main">
          <v-toolbar-items>
            <v-col>
              <div class="nav-btn">
                <v-icon class="nav-icon nav-icon-green" color="white" large>
                  mdi-flag
                </v-icon>
                Språk
              </div>
            </v-col>
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <v-spacer>
            <v-col class="text-center">
              <v-img
                alt="Eldrift Logo"
                class="shrink mr-2 toolbar-logo"
                contain
                :src="
                  require('@/assets/images/logos/horisontal-original-medium.png')
                "
                transition="scale-transition"
                width="200"
              />
            </v-col>
          </v-spacer>
          <v-toolbar-items>
            <v-col>
              <div class="nav-btn">
                <v-icon large class="nav-icon nav-icon-blue" color="white">
                  mdi-information-outline
                </v-icon>
                Hjelp
              </div>
            </v-col>
          </v-toolbar-items>
        </v-row>
      </v-container>
    </v-app-bar>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navigation",

  data: () => ({})
});
</script>

<style lang="scss">
@import "src/styles/style.scss";

.v-toolbar {
  width: 80%;
  margin: auto;
}

.v-toolbar__content {
  color: $elblack;
}

.nav-btn {
  @include basic-btn;
  display: inline;
}

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
