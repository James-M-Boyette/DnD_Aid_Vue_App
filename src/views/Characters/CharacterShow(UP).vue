<template>
  <div class="UserProfile">
    <div class="p-header">
      Welcome back, {{ theCharacter.cfirstname }} {{ theCharacter.cmiddlename }} {{ theCharacter.clastname }}
    </div>
    <!-- <h3>{{ "Brian's my hero" }}</h3> -->
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner text-center rounded">
              <h2 class="section-heading mb-5">
                <span class="section-heading-upper">Here's your character's info:</span>
                <!-- <span class="section-heading-lower">(Click "")</span> -->
              </h2>
              <ul class="list-unstyled mb-5 mx-auto rounded">
                <li class="list-unstyled-item d-flex list-udetails-l">
                  First Name:
                  <span class="ml-auto list-udetails-r">{{ theCharacter.cfirstname }}</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  Middle Name:
                  <span class="ml-auto list-udetails-r">{{ theCharacter.cmiddlename }}</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  Last Name:
                  <span class="ml-auto list-udetails-r">{{ theCharacter.clastname }}</span>
                </li>
                <div style="display: block"></div>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  Origin Story:
                  <span class="ml-auto list-udetails-r">{{ theCharacter.origin_story }}</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  <!-- Race (ID):
                  <span class="ml-auto list-udetails-r">{{ theCharacter.raceid }}</span> -->
                  Race :
                  <span class="ml-auto list-udetails-r">Human, Dessert</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  <!-- Class (ID):
                  <span class="ml-auto list-udetails-r">{{ theCharacter.classid }}</span> -->
                  Class :
                  <span class="ml-auto list-udetails-r">Cleric</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  <!-- Alignment (ID):
                  <span class="ml-auto list-udetails-r">{{ theCharacter.alignmentid }}</span> -->
                  Alignment :
                  <span class="ml-auto list-udetails-r">True Good</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  <!-- Language (ID):
                  <span class="ml-auto list-udetails-r">{{ theCharacter.languageid }}</span> -->
                  Language:
                  <span class="ml-auto list-udetails-r">Common</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  <!-- Inventory (ID):
                  <span class="ml-auto list-udetails-r">{{ theCharacter.inventoryid }}</span> -->
                  Inventory:
                  <span class="ml-auto list-udetails-r">Cloak, Short Staff, Golden Rod (companion)</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  Strength:
                  <span class="ml-auto list-udetails-r">{{ theCharacter.strength }}</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  Dexterity:
                  <span class="ml-auto list-udetails-r">{{ theCharacter.dexterity }}</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  Constitution:
                  <span class="ml-auto list-udetails-r">{{ theCharacter.constitution }}</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  Intelligence:
                  <span class="ml-auto list-udetails-r">{{ theCharacter.intelligence }}</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  Wisdom:
                  <span class="ml-auto list-udetails-r">{{ theCharacter.wisdom }}</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  Max Health:
                  <span class="ml-auto list-udetails-r">{{ theCharacter.healthmax }}</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  Current Health:
                  <span class="ml-auto list-udetails-r">{{ theCharacter.healthcurrent }}</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  Temporary Health:
                  <span class="ml-auto list-udetails-r">{{ theCharacter.healthtemp }}</span>
                </li>
                <li class="list-unstyled-item d-flex list-udetails-l">
                  Speed:
                  <span class="ml-auto list-udetails-r">{{ theCharacter.speed }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
hr.style-one {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
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
