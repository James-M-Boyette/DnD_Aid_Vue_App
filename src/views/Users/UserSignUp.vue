<template>
  <div class="signup">
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner rounded">
              <h2 class="section-heading mb-5">
                <div class="test">
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
                      <small class="text-danger" v-if="password.length && password.length < 2">
                        Your password is too short
                      </small>
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
                    <!-- <button class="submit-button" type="submit" value="Submit">Submit !</button> -->
                    <input type="submit" class="btn btn-primary" value="Submit" />
                  </form>
                </div>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.test {
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.container,
.container-fluid,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.page-section {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.cta {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: rgba(230, 167, 86, 0.9);
}
.cta .cta-inner {
  position: relative;
  padding: 3rem;
  margin: 0.5rem;
  background-color: rgba(255, 255, 255, 0.85);
}
.cta .cta-inner:before {
  border-radius: 0.5rem;
  content: "";
  position: absolute;
  top: -0.5rem;
  bottom: -0.5rem;
  left: -0.5rem;
  right: -0.5rem;
  border: 0.25rem solid rgba(255, 255, 255, 0.85);
  z-index: -1;
}
</style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newUFirstName: "Your first name",
      newULastName: "Your last name",
      email: "Your email",
      // username: "Your username",
      // password: "Your new password",
      // passwordConfirmation: "Please re-type your password",
      password: "password",
      passwordConfirmation: "password",
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
        // .post("/api/users", params)
        .post("https://dnd-aid-back-end.herokuapp.com/api/users", params)
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
