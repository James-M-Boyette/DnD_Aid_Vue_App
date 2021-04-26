import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CharacterIndex from "../views/Characters/CharacterIndex.vue";
import CharacterCreate from "../views/Characters/CharacterCreate.vue";
import UserSignUp from "../views/Users/UserSignUp.vue";
import Login from "../views/Users/Login.vue";
import Logout from "../views/Users/Logout.vue";
import Test from "../views/Test.vue";
import UserProfile from "../views/Users/UserProfile.vue";

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
    path: "/userProfile",
    name: "profile",
    component: UserProfile,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Test",
    name: "test",
    component: Test,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
