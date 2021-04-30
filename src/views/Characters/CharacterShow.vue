<template>
  <div class="index">
    <!-- <h1>{{ message }}</h1> -->
    <!-- <h3>{{ "Brian's my hero" }}</h3> -->
    <div class="container">
      <!-- Jumbotron Header -->
      <header class="jumbotron my-4">
        <h1 class="display-3">Welcome back {{ currentUser.ufirstname }}!</h1>
        <h3>Here are your current characters:</h3>
        <!-- This is a button to _ -->
        <a href="/characters" class="btn btn-danger btn-lg">See all of your characters!</a>
        <a href="/character_create" class="btn btn-danger btn-lg">Create a new character!</a>
        <!-- target="_blank" -->
      </header>
    </div>
    <div class="container"></div>
    <div class="container">
      <!-- Completely change this to a simple theme display -->
      <div class="row">
        <!-- Check that NO broken -->
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card h-100">
            <!-- <img class="background" src="@/assets/Character_Avatars/Blue_Eyes_(Cristi-B).jpg" alt="" /> -->
            <!-- <img class="avatar" src="@/assets/Character_Avatars/Blue_Eyes_(Cristi-B).jpg" alt="" /> -->
            <img class="background" src="@/assets/Imgs/Character_Avatars/Blue_Eyes_(Cristi-B).jpg" />
            <!-- <img class="background" v-bind:src="character.avatar_img" alt="..." /> -->
            <div class="card-body">
              <h4 class="card-title">
                {{ theCharacter.cfirstname }} {{ theCharacter.cmiddlename }} {{ theCharacter.clastname }}
              </h4>
              <p class="card-text">
                {{ theCharacter.origin_story }}
              </p>
            </div>
            <div class="card-footer">
              <div></div>
            </div>
          </div>
        </div>
        <!-- Backup from the web -->
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-8 col-md-6 col-lg-4">
              <div class="card">
                <img class="card-img" src="@/assets/Imgs/Character_Avatars/Blue_Eyes_(Cristi-B).jpg" alt="Bologna" />
                <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
                  <h4 class="card-title">Bologna</h4>
                  <h6 class="card-subtitle mb-2">Emilia-Romagna Region, Italy</h6>
                  <p class="card-number1">
                    {{ theCharacter.strength }}
                  </p>
                  <div class="link d-flex">
                    <a href="#" class="card-link text-warning">Read More</a>
                    <a href="#" class="card-link text-warning">Book a Trip</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Target test from the web -->
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-8 col-md-6 col-lg-4">
              <div class="card">
                <!-- <img class="card-img" src="@/assets/Imgs/Character_Avatars/Blue_Eyes_(Cristi-B).jpg" alt="Bologna" /> -->
                <img class="card-img" src="@/assets/Imgs/Transparent_Overlays/Stats.png" alt="DnD" />
                <div class="card-img-overlay text-black d-flex flex-column justify-content-center">
                  <h4 class="card-title justify-content-center">Bologna</h4>
                  <h6 class="card-subtitle mb-2 justify-content-center">Emilia-Romagna Region, Italy</h6>
                  <p class="card-number1">
                    {{ theCharacter.strength }}
                  </p>
                  <div class="link d-flex justify-content-center">
                    <a href="#" class="card-link text-second">Read More</a>
                    <a href="#" class="card-link">Book a Trip</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div></div>
  </div>
</template>

<style>
.card {
  background: rgba(255, 255, 255, 0.1) !important;
  opacity: 1;
}
.cspec {
  background: rgba(255, 255, 255, 0.1) !important;
}
.card-img-overlay {
  background: rgba(255, 255, 255, 0.1) !important;
}
.card-img {
  background: rgba(255, 255, 255, 0.1) !important;
}
.card-number1 {
  font-size: 50px;
  color: rgb(8, 251, 40);
}

.background {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  height: 250px;
  border-radius: 25%;
}

.avatar {
  vertical-align: middle;
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 25%;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to your previously-saved characters page!",
      theCharacter: {},
      userid: "",
      cfirstname: "",
      cmiddlename: "",
      clastname: "",
      raceid: "",
      classid: "",
      alignmentid: "",
      languageid: "",
      inventoryid: "",
      strength: "",
      dexterity: "",
      constitution: "",
      intelligence: "",
      wisdom: "",
      charisma: "",
      healthmax: "",
      healthcurrent: "",
      healthtemp: "",
      speed: "",
      origin_story: "",
      currentUser: {},
    };
  },
  created: function () {
    console.log("Fetching this character's info automatically ...");
    console.log(this.$route.params.id);
    axios.get(`/api/characters/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.theCharacter = response.data;
    });
    console.log("Getting your profile info automatically ...");
    console.log(this.$route.params.id);
    // axios.get(`/api/users/current_user"${this.$route.params.id}`).then((response) => {
    axios.get("/api/users/current_user").then((response) => {
      console.log(response.data);
      this.currentUser = response.data;
    });
  },
  methods: {
    charactersShow: function (theCharacter) {
      console.log("CharactersShow action is executing ...");
      // Make a GET request to "/api/photos/" + this.$route.params.id
      axios.get(`/api/characters"${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.theCharacter = response.data;
      });
      console.log(theCharacter);
      // this.currentCharacter = theCharacter;
      // document.querySelector("#character-details").showModal();
      // console.log(this.currentCharacter);
    },
    characterUpdate: function (theCharacter) {
      console.log("Let's change stuff about that character!");
      console.log(theCharacter);
      var params = {
        userid: theCharacter.userid,
        cfirstname: theCharacter.cfirstname,
        cmiddlename: theCharacter.cmiddlename,
        clastname: theCharacter.clastname,
        raceid: theCharacter.raceid,
        classid: theCharacter.classid,
        alignmentid: theCharacter.alignmentid,
        languageid: theCharacter.languageid,
        inventoryid: theCharacter.inventoryid,
        strength: theCharacter.strength,
        dexterity: theCharacter.dexterity,
        constitution: theCharacter.constitution,
        intelligence: theCharacter.intelligence,
        wisdom: theCharacter.wisdom,
        charisma: theCharacter.charisma,
        healthmax: theCharacter.healthmax,
        healthcurrent: theCharacter.healthcurrent,
        healthtemp: theCharacter.healthtemp,
        speed: theCharacter.speed,
      };
      axios.patch("/api/characters/" + theCharacter.id, params).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>
