<template>
  <div class="UserProfile">
    <h1>{{ message }}</h1>
    <!-- <h3>{{ "Brian's my hero" }}</h3> -->
    <h3>Here's your current profile info:</h3>
    <!-- <div v-for="character in characters" v-bind:key="character.index"> -->
    <!-- I think the above just shows all characters in the table on the page ... but we're showing input fields instead on this page anyway o.O -->
    <div>
      <p>
        First Name:
        <input type="text" v-model="uFirstName" />
      </p>
      <p>
        Last Name:
        <input type="text" v-model="uLastName" />
      </p>
      <p>
        E-mail:
        <input type="text" v-model="email" />
      </p>
      <p>
        Password:
        <input type="text" v-model="password" />
      </p>
      <p>
        Password Confirmation:
        <input type="text" v-model="password_confirmation" />
      </p>

      <p><button v-on:click="userUpdate">Update your profile!</button></p>
      <p><button v-on:click="userDestory">Delete your profile (Please be certain!)</button></p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome back ",
      currentUser: {},
      uFirstName: "First name",
      uLastName: "Last name",
      email: "E-mail",
      password: "Password",
      password_confirmation: "Password2",
      errors: [],
    };
  },
  created: function () {
    console.log("Getting your profile info automatically ...");
    this.userShow();
  },
  methods: {
    userShow: function (theUser) {
      console.log("Showing the User (userShow) ...");
      console.log(theUser);
      this.currentUser = theUser;
    },
    userUpdate: function (theUser) {
      var params = {
        uFirstName: theUser.uFirstName,
        uLastName: theUser.uLastName,
        email: theUser.email,
        password: theUser.password,
      };
      axios.patch("/api/users/" + theUser.id, params).then((response) => {
        console.log(response.data);
      });
    },
    userDestory: function (theUser) {
      console.log("The user was deleted !");
      console.log(theUser);
      axios.delete("http://localhost:3000/api/users/" + theUser.id).then((response) => {
        console.log(response.data);
        var index = this.users.indexOf(theUser);
        this.users.splice(index, 1);
      });
    },
  },
};
</script>
