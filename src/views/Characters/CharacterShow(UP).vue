<template>
  <div class="UserProfile">
    <div class="p-header">Welcome back, {{ currentUser.ufirstname }}!</div>
    <!-- <h3>{{ "Brian's my hero" }}</h3> -->
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner text-center rounded">
              <h2 class="section-heading mb-5">
                <span class="section-heading-upper">Here's your current profile info:</span>
                <!-- <span class="section-heading-lower">(Click "")</span> -->
              </h2>
              <ul class="list-unstyled mb-5 mx-auto rounded">
                <li class="list-unstyled-item d-flex list-udetails-l">
                  First Name:
                  <span class="ml-auto list-udetails-r">{{ currentUser.ufirstname }}</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  <span>Last Name:</span>
                  <span class="ml-auto list-udetails-r">{{ currentUser.ulastname }}</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  E-mail:
                  <span class="ml-auto list-udetails-r">{{ currentUser.email }}</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  Password:
                  <span class="ml-auto list-udetails-r">( Even we don't know! )</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button class="update-button" v-on:click="userShow2">Update your profile!</button>
      <!-- The Update-Button's Modal -->
      <dialog id="user-details">
        <form method="dialog">
          <h2>Profile Update Options:</h2>
          <p class="l-text">
            First Name:
            <input class="pfl-mbox" type="text" v-model="currentUser.ufirstname" />
          </p>
          <p class="l-text">
            Last Name:
            <input class="pfl-mbox" type="text" v-model="currentUser.ulastname" />
          </p>
          <p class="l-text">
            E-mail:
            <input class="pfl-mbox" type="text" v-model="currentUser.email" />
          </p>
          <p class="l-text">
            Password:
            <input class="pfl-mbox" type="text" v-model="currentUser.password" />
          </p>
          <div>Input your password (old or new) before clicking 'Update'</div>
          <p></p>
          <!-- <p>
            Password Confirmation:
            <input type="text" v-model="currentUser.password_confirmation" />
          </p> -->
          <button v-on:click="userUpdate(currentUser)">Update</button>
          <button>Close</button>
        </form>
      </dialog>
      <button class="delete-button" v-on:click="userDestory">Delete your profile!</button>
    </section>
  </div>
</template>

<style>
section {
  display: block;
}
.section-heading {
  text-transform: uppercase;
}
.section-heading .section-heading-upper {
  display: block;
  font-size: 1rem;
  font-weight: 800;
}
.section-heading .section-heading-lower {
  display: block;
  font-size: 3rem;
  font-weight: 100;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.list-inline {
  padding-left: 0;
  list-style: none;
}
.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}
.mb-5,
.my-5 {
  margin-bottom: 3rem !important;
}
.ml-auto,
.mx-auto {
  margin-left: auto !important;
}
.d-flex {
  display: flex !important;
}
/* This is also controlling the background/outer border ... but more so */
.cta {
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin-right: 20rem;
  margin-left: 20rem;
  background-color: rgba(241, 235, 215, 0.9);
  border-style: double;
}
/* This is styling the inner background box */
.cta .cta-inner {
  position: relative;
  padding-top: 5rem;
  padding-bottom: 3rem;
  margin: 0.5rem;
  background-color: rgba(249, 249, 240, 0.7);
}
/* .cta .cta-inner:before {
  border-radius: 0.5rem;
  content: "";
  position: absolute;
  top: -0.5rem;
  bottom: -0.5rem;
  left: -0.5rem;
  right: -0.5rem;
  border: 0.25rem solid rgba(255, 255, 255, 0.85);
  z-index: -1;
} */
.list-udetails-l {
  font-size: 18px;
  padding-left: 5rem;
}
.list-udetails-r {
  font-size: 18px;
  padding-right: 5rem;
}
/* .list-hours .list-hours-item {
  border-bottom: 1px solid rgba(230, 167, 86, 0.5);
  padding-bottom: 0.25rem;
  margin-bottom: 1rem;
  font-style: italic;
} */
/* .list-hours .list-hours-item.today {
  font-weight: bold;
  color: #e6a756;
} */
@media (min-width: 992px) {
  .list-hours {
    width: 50%;
    font-size: 1.1rem;
  }
}
.l-text {
  text-align: left;
}
.pfl-mbox {
  /* text-align: right; */
  float: right;
}
.update-button {
  background-color: slategray;
  color: white;
}
.delete-button {
  background-color: red;
  color: white;
}
.p-header {
  font-size: 42px;
  color: #ffffff;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "#",
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
    // Get request for current_user's info
    axios.get("/api/users/current_user").then((response) => {
      console.log(response.data);
      // current_user's info is stored in var currentUser
      this.currentUser = response.data;
    });
  },
  methods: {
    // userShow: function (theUser) {
    //   console.log("Showing the User (userShow) ...");
    //   console.log(theUser);
    //   this.currentUser = theUser;
    // },
    userShow2: function () {
      console.log("User info is being forwarded to modal ...");
      document.querySelector("#user-details").showModal();
    },
    userUpdate: function (theUser) {
      console.log("Updating the user's info ...");
      console.log("Here's what's in theUser:");
      console.log(theUser);
      var params = {
        ufirstname: theUser.ufirstname,
        ulastname: theUser.ulastname,
        email: theUser.email,
        password: theUser.password,
      };
      console.log("Here's what's been stored in params ...");
      console.log(params);
      // axios.patch("/api/users/" + theUser.id, params).then((response) => {
      //   console.log(response.data);
      // });
      axios
        .patch("/api/users/current_user/", params)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
    userDestory: function () {
      console.log("Deleting user ...");
      axios.delete("http://localhost:3000/api/users/current_user/").then((response) => {
        console.log(response.data);
        // var index = this.users.indexOf(theUser);
        // this.users.splice(index, 1);
        console.log("The user was deleted !");
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("jwt");
        this.$router.push("/about");
      });
    },
    // Can still see characters and the basic user profile page, even once your profile is deleted
  },
};
</script>
