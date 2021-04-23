import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CharacterIndex from "../views/CharacterIndex.vue";
import CharacterCreate from "../views/CharacterCreate.vue";
import UserSignUp from "../views/UserSignUp.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Characters",
    name: "Characters",
    component: CharacterIndex,
  },
  {
    path: "/Character_Create",
    name: "Character Creation",
    component: CharacterCreate,
  },
  {
    path: "/SignUp",
    name: "User Sign-Up",
    component: UserSignUp,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
