<template>
  <v-app-bar color="white" flat>
    <v-toolbar-title>Page title</v-toolbar-title>
  </v-app-bar>
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

.v-toolbar__content {
  color: $elblue;
}
</style>
