import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Movieapp/Movieapp.vue";
import Moviedetail from "./components/Movieapp/Movie-detail.vue";
import Login from "./components/Movieapp/Formhandling.vue";
import Buttontransitions from "./components/Movieapp/Buttontransitions.vue";
import Notfound from "./components/Movieapp/Notfound.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Moviedetail",
    path: "/moviedetail/:id",
    component: Moviedetail,
  },

  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "Buttontransitions",
    path: "/Buttontransitions",
    component: Buttontransitions,
  },

  {
    name: "Notfound",
    path: "/:catchAll(.*)",
    component: Notfound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
