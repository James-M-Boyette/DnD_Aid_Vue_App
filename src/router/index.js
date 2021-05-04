import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CharacterIndex from "../views/Characters/CharacterIndex.vue";
// import CharacterShow from "../views/Characters/CharacterShow.vue";
import CharacterShow from "../views/Characters/CharacterShow(UP).vue";
// import CharacterShowUP from "../views/Characters/CharacterShow(UP).vue";
import CharacterShowIdeal from "../views/Characters/CharacterShow(Ideal).vue";
import CharacterCreate from "../views/Characters/CharacterCreate.vue";
import UserSignUp from "../views/Users/UserSignUp.vue";
import Login from "../views/Users/Login.vue";
import Logout from "../views/Users/Logout.vue";
import Test from "../views/Test.vue";
import UserProfile from "../views/Users/UserProfile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/characters",
    name: "Characters",
    component: CharacterIndex,
  },
  // {
  //   path: "/your_character/:id",
  //   name: "Character",
  //   component: CharacterShow,
  // },
  {
    path: "/your_character/:id",
    name: "Character",
    component: CharacterShow,
  },
  // {
  //   path: "/your_character/:id",
  //   name: "CharacterUP",
  //   component: CharacterShowUP,
  // },

  {
    path: "/ideal",
    name: "CharacterShow(Ideal)",
    component: CharacterShowIdeal,
  },
  {
    path: "/character_create",
    name: "Character Creation",
    component: CharacterCreate,
  },
  {
    path: "/sign_up",
    name: "User Sign-Up",
    component: UserSignUp,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/user_profile",
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
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
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
