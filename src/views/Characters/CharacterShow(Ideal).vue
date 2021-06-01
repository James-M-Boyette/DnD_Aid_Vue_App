<template>
  <div id="ideal">
    <div class="container">
      <div class="sheet-1">
        <!-- <img src="@/assets/Imgs/Backgrounds/Black_Market_Entrance_(Hamsterfly).jpg" /> -->
        <img class="sheet" height="720" src="~@/assets/Imgs/CharacterSheets/DyslexicPartial.png" />
        <span class="ml-auto list-udetails-r">Luke {{ theCharacter.cfirstname }}</span>
      </div>
    </div>
    <!-- <br />
    <div>_</div> -->
    <div class="container">
      <!-- <div class="sheet-2" height="1500" src="~@/assets/Imgs/CharacterSheets/Clean.jpeg" /> -->
      <img class="sheet" height="1500" src="~@/assets/Imgs/CharacterSheets/Clean.jpeg" />
      <!-- </div> -->
    </div>
  </div>
</template>

<style>
.sheet {
  size: 25%;
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
    // axios.get(`/api/characters/${this.$route.params.id}`).then((response) => {
    axios.get(`https://dnd-aid-back-end.herokuapp.com/api/characters/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.theCharacter = response.data;
    });
    console.log("Getting your profile info automatically ...");
    console.log(this.$route.params.id);
    // axios.get(`/api/users/current_user"${this.$route.params.id}`).then((response) => {
    // axios.get("/api/users/current_user").then((response) => {
    axios.get("https://dnd-aid-back-end.herokuapp.com/api/users/current_user").then((response) => {
      console.log(response.data);
      this.currentUser = response.data;
    });
  },
  methods: {
    charactersShow: function (theCharacter) {
      console.log("CharactersShow action is executing ...");
      // Make a GET request to "/api/photos/" + this.$route.params.id
      // axios.get(`/api/characters"${this.$route.params.id}`).then((response) => {
      axios.get(`https://dnd-aid-back-end.herokuapp.com/api/characters"${this.$route.params.id}`).then((response) => {
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
      // axios.patch("/api/characters/" + theCharacter.id, params).then((response) => {
      axios
        .patch("https://dnd-aid-back-end.herokuapp.com/api/characters/" + theCharacter.id, params)
        .then((response) => {
          console.log(response.data);
        });
    },
  },
};
</script>
