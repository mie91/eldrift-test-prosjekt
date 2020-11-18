<template>
  <v-app>

      <Toolbar />
      <v-main mx-4 mb-4>
        <router-view></router-view>
      </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Toolbar from "./components/layout/Toolbar.vue";

export default Vue.extend({
  name: "App",

  components: {
    Toolbar
  },

  data: () => ({
    //
  })
});
</script>

<style lang="scss">
@import "./styles/style.scss";

#app {
  /*   font-family: $poppins;
  background: white; */
  background: $soft-gradient;
}
</style>
