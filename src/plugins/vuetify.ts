import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        elgreen: "#69ca97",
        elblue: "#53B6B3",
        elgrey: "#DADFE2",
        elblack: "#292929",
        elred: "#EA3D2F",
        elyellow: "#E8CB27"
      }
    }
  }
});

export default vuetify;
