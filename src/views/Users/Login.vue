<template>
  <div class="login">
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner rounded">
              <h2 class="section-heading mb-5">
                <form v-on:submit.prevent="submit()">
                  <h1>Login</h1>
                  <ul>
                    <li class="text-danger" v-for="error in errors" v-bind:key="error">
                      {{ error }}
                    </li>
                  </ul>
                  <div class="form-group">
                    <label>Email:</label>
                    <input type="email" class="form-control" v-model="email" />
                  </div>
                  <div class="form-group">
                    <label>Password:</label>
                    <input type="password" class="form-control" v-model="password" />
                  </div>
                  <!-- <input type="submit" class="btn btn-primary" value="Submit" /> -->
                  <button type="submit" class="btn btn-primary" value="Submit" />
                </form>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  // How does the Login page create state?
  // It establishes a function "submit" and emplys it at the end of the template as a primary button (btn)
  // This function 1) creates a temp variable named "params", 2) establishes two keys (email: password:), 3) refers to the data stored in 'data, variables' (w/ same names) - which were updated via v-mode, and 4) stores our local variable contents in the function variables
  // Next, using axios, this hash variable 'params' is sent to the route api/sessions, waits for a response, and updates the header with a jwt (+ "bearer" syntax) ... it also stores the jwt locally.
  // Finally, the user is sent on to the webpage "userProfile" ...
  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/user_profile");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
