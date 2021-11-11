import Vue from "vue";
import VueRouter from "vue-router";
import TheLunch from "../views/TheLunch.vue";
import THeLotto from "../views/TheLotto.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/lunch",
    name: "TheLunch",
    component: TheLunch,
  },
  {
    path: "/lotto",
    name: "TheLotto",
    component: THeLotto,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
