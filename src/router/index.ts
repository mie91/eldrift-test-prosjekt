import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Projects from "../views/Projects.vue";
import Payment from "../views/Payment.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects
  },
  {
    path: "/payment",
    name: "payment",
    component: Payment
  }
];

const router = new VueRouter({
  routes
});

export default router;
