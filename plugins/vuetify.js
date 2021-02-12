import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import options from "@/vuetify.options.js";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify, { ...options });

export default (ctx) => {
  const vuetify = new Vuetify(options);

  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
};
