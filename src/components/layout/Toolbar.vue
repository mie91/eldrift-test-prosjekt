<template>
  <nav>
    <v-app-bar prominent flat app>
      <v-btn class="app-bar-btn" elevation="10">
        <v-icon x-large color="elgreen">mdi-flag</v-icon>
        <span>Språk</span>
      </v-btn>
      <v-spacer></v-spacer>
      <div class="toolbar-center">
        <v-app-bar-nav-icon
          medium
          class="elblue--text"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-img
          alt="Eldrift Logo"
          class="shrink toolbar-logo"
          contain
          :src="require('@/assets/images/logos/horisontal-original-medium.png')"
          transition="scale-transition"
          width="200"
        />
        <h3>14:32</h3>
      </div>
      <v-spacer></v-spacer>
      <v-btn class="app-bar-btn" elevation="10">
        <v-icon x-large color="elblue">mdi-information-outline</v-icon>
        <span>Hjelp</span>
      </v-btn>
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
            <v-icon color="elblack">{{ link.icon }}</v-icon>
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
export default {
  name: "Toolbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "src/styles/style.scss";

.v-toolbar {
  width: 75%;
  margin: auto;
  border: solid white 2px;
  border-bottom-left-radius: 90px !important;
  border-bottom-right-radius: 90px !important;
}

.toolbar-center {
  text-align: center;
}
.toolbar-logo {
  margin: auto;
}

.app-bar-btn {
  font-size: 18px;
}
</style>
