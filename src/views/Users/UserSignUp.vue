<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>First Name:</label>
        <input type="text" class="form-control" v-model="newUFirstName" />
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <input type="text" class="form-control" v-model="newULastName" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
        <small class="text-danger" v-if="password.length && password.length < 2">Your password is too short</small>
        <small v-if="password.length >= 2 && password.length <= 10">
          You have {{ 10 - password.length }} remaining characters in your password
        </small>
        <small class="text-danger" v-if="password.length > 10">Your password is too long</small>
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="passwordConfirmation" />
        <small v-if="passwordConfirmation !== password">Passwords must match</small>
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newUFirstName: "Your first name",
      newULastName: "Your last name",
      email: "Your email",
      // username: "Your username",
      password: "Your new password",
      passwordConfirmation: "Please re-type your password",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        ufirstname: this.newUFirstName,
        ulastname: this.newULastName,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
