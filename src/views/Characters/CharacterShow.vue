<template>
  <div class="index">
    <!-- <h1>{{ message }}</h1> -->
    <!-- <h3>{{ "Brian's my hero" }}</h3> -->
    <div class="container">
      <!-- Jumbotron Header -->
      <header class="jumbotron my-4">
        <h1 class="display-3">Welcome back USERNAME !</h1>
        <h3>Here are your current characters:</h3>
        <!-- This is a button to _ -->
        <a href="/Character_Create" class="btn btn-primary btn-lg" target="”_blank”">Create a new character!</a>
      </header>
    </div>
    <div class="container">
      <div class="row">
        <div v-for="character in characters" v-bind:key="character.index">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <!-- <img class="background" src="@/assets/Character_Avatars/Blue_Eyes_(Cristi-B).jpg" alt="" /> -->
              <!-- <img class="avatar" src="@/assets/Character_Avatars/Blue_Eyes_(Cristi-B).jpg" alt="" /> -->
              <img class="background" src="@/assets/Character_Avatars/Blue_Eyes_(Cristi-B).jpg" alt="" />
              <!-- <img class="background" v-bind:src="character.avatar_img" alt="..." /> -->
              <div class="card-body">
                <h4 class="card-title">
                  {{ character.cfirstname }} {{ character.cmiddlename }} {{ character.clastname }}
                </h4>
                <p class="card-text">
                  {{ character.origin_story }}
                </p>
              </div>
              <div class="card-footer">
                <a href="#" class="btn btn-danger">Stay a'while, n listen!</a>
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
      characters: {},
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
      currentCharacter: [],
    };
  },
  created: function () {
    console.log("Fetching all the characters automatically ...");
    this.charactersShow();
    // I got this right, except I console.logged it rather than running it as a method
  },
  methods: {
    charactersShow: function (theCharacter) {
      console.log("CharactersShow action is executing ...");
      console.log(theCharacter);
      this.currentCharacter = theCharacter;
      // document.querySelector("#character-details").showModal();
      // console.log(this.currentCharacter);
    },
    // characterUpdate: function (theCharacter) {
    //   console.log("Let's change stuff about that character!");
    //   console.log(theCharacter);
    //   var params = {
    //     userid: @theCharacter.userid,
    //     cfirstname: @theCharacter.cfirstname,
    //     cmiddlename: @theCharacter.cmiddlename,
    //     clastname: @theCharacter.clastname,
    //     raceid: @theCharacter.raceid,
    //     classid: @theCharacter.classid,
    //     alignmentid: @theCharacter.alignmentid,
    //     languageid: @theCharacter.languageid,
    //     inventoryid: @theCharacter.inventoryid,
    //     strength: @theCharacter.strength,
    //     dexterity: @theCharacter.dexterity,
    //     constitution: @theCharacter.constitution,
    //     intelligence: @theCharacter.intelligence,
    //     wisdom: @theCharacter.wisdom,
    //     charisma: @theCharacter.charisma,
    //     healthmax: @theCharacter.healthmax,
    //     healthcurrent: @theCharacter.healthcurrent,
    //     healthtemp: @theCharacter.healthtemp,
    //     speed: @theCharacter.speed
    //   },
    //   axios.patch("/api/recipes/" + theProduct.id, params).then((response) => {
    //     console.log(response.data);
    //   }),
  },
};
</script>
