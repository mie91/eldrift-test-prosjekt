<template>
  <nav>
    <v-app-bar prominent app>
      <v-container>
        <v-row>
          <dlgLanguage />
          <v-spacer></v-spacer>
          <div class="toolbar-center">
            <h6>17.11.2020</h6>
            <v-img
              alt="Eldrift Logo"
              class="shrink toolbar-logo"
              contain
              :src="
                require('@/assets/images/logos/horisontal-original-medium.png')
              "
              transition="scale-transition"
              width="200"
            />
            <h5>14:32</h5>
            <v-app-bar-nav-icon
              medium
              class="elblue--text"
              @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
          </div>
          <v-spacer></v-spacer>
          <dlgHelp />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="elblue">
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon large color="elblack">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import dlgLanguage from "../dlgLanguage.vue";
import dlgHelp from "../dlgHelp.vue";

export default {
  components: {
    dlgLanguage,
    dlgHelp
  },

  name: "Toolbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-credit-card-outline", text: "Payment", route: "/payment" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "src/styles/style.scss";

/* .v-toolbar {
    width: 75%;
    margin: auto;
    border: solid white 2px;
    border-bottom-left-radius: 90px !important;
    border-bottom-right-radius: 90px !important;
} */

.v-app-bar {
  text-align: center;
}
.toolbar-logo {
  margin: auto;
}
.app-bar-btn {
  font-size: 18px;
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
