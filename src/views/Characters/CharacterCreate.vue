<template>
  <div class="index">
    <h1>{{ message }}</h1>
    <!-- <h3>{{ "Brian's my hero" }}</h3> -->
    <h3>Let's get crackin' - here are your options:</h3>
    <!-- <div v-for="character in characters" v-bind:key="character.index"> -->
    <!-- I think the above just shows all characters in the table on the page ... but we're showing input fields instead on this page anyway o.O -->
    <div>
      <!-- <p>{{ newCharacterCFirstName }} {{ newCharacterCMiddleName }} {{ newCharacterCLastName }}</p> -->
      <section class="page-section cta char-create">
        <div class="container">
          <div class="row">
            <div class="col-xl-9 mx-auto">
              <div class="cta-inner text-center rounded">
                <h2 class="section-heading mb-5">
                  <span class="section-heading-upper">Character Details:</span>
                  <!-- <span class="section-heading-lower">(Click "")</span> -->
                </h2>
                <div class="list-unstyled mb-5 mx-auto rounded">
                  <p>
                    <span class="list-unstyled-item d-flex list-udetails-l">First Name:</span>
                    <input class="list-udetails-r" type="text" v-model="newCharacterCFirstName" />
                  </p>
                  <p>
                    <span class="list-udetails-l">Middle Name:</span>
                    <input class="list-udetails-r" type="text" v-model="newCharacterCMiddleName" />
                  </p>
                  <p>
                    Last Name:
                    <input type="text" v-model="newCharacterCLastName" />
                  </p>
                  <p>
                    raceid:
                    <input type="text" v-model="newCharacterRaceID" />
                  </p>
                  <p>
                    classid:
                    <input type="text" v-model="newCharacterClassID" />
                  </p>
                  <p>
                    alignmentid:
                    <input type="text" v-model="newCharacterAlignmentID" />
                  </p>
                  <p>
                    languageid:
                    <input type="text" v-model="newCharacterLanguageID" />
                  </p>
                  <p>
                    inventoryid:
                    <input type="text" v-model="newCharacterInventoryID" />
                  </p>
                  <p>
                    Strength:
                    <input type="text" v-model="newCharacterStrength" />
                  </p>
                  <p>
                    Dexterity:
                    <input type="text" v-model="newCharacterDexterity" />
                  </p>
                  <p>
                    Constitution:
                    <input type="text" v-model="newCharacterConstitution" />
                  </p>
                  <p>
                    Intelligence:
                    <input type="text" v-model="newCharacterIntelligence" />
                  </p>
                  <p>
                    Wisdom:
                    <input type="text" v-model="newCharacterWisdom" />
                  </p>
                  <p>
                    Charisma:
                    <input type="text" v-model="newCharacterCharisma" />
                  </p>
                  <p>
                    Current Health:
                    <input type="text" v-model="newCharacterHealthCurrent" />
                  </p>
                  <p>
                    Max Health:
                    <input type="text" v-model="newCharacterHealthMax" />
                  </p>
                  <p>
                    Temporary Health:
                    <input type="text" v-model="newCharacterHealthTemp" />
                  </p>
                  <p>
                    Speed:
                    <input type="text" v-model="newCharacterSpeed" />
                  </p>
                  <p><button v-on:click="characterCreate">Add (create) that new character!</button></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Bootstrap Modal Button -->
      <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#character-details"> -->
      <!-- More Info
      </button> -->
      <!-- Old Button for Modal -->
      <!-- <p><button v-on:click="charactersShow(character)">More Info</button></p> -->
      <!-- <img v-bind:src="character.image_url" /> -->
    </div>
    <!-- Bootstrap Modal -->
    <!-- <div class="modal fade" id="#character-details" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Further reading ...</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
              Image URL placeholder
              <input type v-model="characters.imgurl" />
            </p>
            <p>
              Name:
              {{ characters }}
            </p>
            <p>
              Abbreviation:
              {{ characters.abbreviation }}
            </p>
            <p>
              Description:
              {{ characters.desc }}
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Old Modal -->
    <!-- <dialog id="character-details">
      <form method="dialog">
        <h2>Further reading ...</h2>
        <p>
          Image URL placeholder
          <input type v-model="currentCharacter.imgurl" />
        </p>
        <p>
          Name:
          {{ currentCharacter.cfirstname }}
          {{ currentCharacter.cmiddlename }}
          {{ currentCharacter.clastname }}
        </p>
        <p>
          Abbreviation:
          {{ currentCharacter.abbreviation }}
        </p>
        <p>
          Description:
          {{ currentCharacter.desc }}
        </p>
      </form>
    </dialog> -->
    <div></div>
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
  text-align: left;
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
// Initial population of fields
export default {
  data: function () {
    return {
      message: "Welcome to the character creation page!",
      characters: {},
      newCharacterCFirstName: "First",
      newCharacterCMiddleName: "Middle or Nick-Name",
      newCharacterCLastName: "Last",
      newCharacterRaceID: "",
      newCharacterClassID: "",
      newCharacterAlignmentID: "",
      newCharacterLanguageID: "",
      newCharacterInventoryID: "",
      newCharacterStrength: "",
      newCharacterDexterity: "",
      newCharacterConstitution: "",
      newCharacterIntelligence: "",
      newCharacterWisdom: "",
      newCharacterCharisma: "",
      newCharacterHealthMax: "",
      newCharacterHealthCurrent: "",
      newCharacterHealthTemp: "",
      newCharacterSpeed: "",
      currentCharacter: [],
    };
  },
  created: function () {
    console.log("Fetching all the characters automatically ...");
    this.charactersIndex();
    // I got this right, except I console.logged it rather than running it as a method
  },
  methods: {
    charactersIndex: function () {
      console.log("charactersIndex action is executing ...");
      // axios.get("http://localhost:3000/api/characters/").then((response) => {
      axios.get("https://dnd-aid-back-end.herokuapp.com/api/characters/").then((response) => {
        // console.log("Here's the data from our personal database ...");
        // console.log(response.data);
        this.characters = response.data;
        // Our table data is entered into the hash of our var "characters"
        console.log("Here's what's in characters:");
        console.log(this.characters);
      });
      // Fetch DnD's table
      // axios.get("https://www.dnd5eapi.co/api/characters/").then((response) => {
      //   console.log("Here's the data from dnd5eapi ...");
      //   console.log(response.data);
      //   this.charactersTheirs = response.data;
      // });
    },
    characterShow: function (theCharacter) {
      console.log("CharacterShow action is executing ...");
      console.log(theCharacter);
      this.currentCharacter = theCharacter;
      // document.querySelector("#character-details").showModal();
      // console.log(this.currentCharacter);
    },
    characterCreate: function () {
      console.log("Creating a character ...");
      // make a post request to the api
      console.log(this.newCharacterCFirstName);
      var params = {
        cfirstname: this.newCharacterCFirstName,
        cmiddlename: this.newCharacterCMiddleName,
        clastname: this.newCharacterCLastName,
        raceid: this.newCharacterRaceID,
        classid: this.newCharacterClassID,
        alignmentid: this.newCharacterAlignmentID,
        languageid: this.newCharacterLanguageID,
        inventoryid: this.newCharacterInventoryID,
        strength: this.newCharacterStrength,
        dexterity: this.newCharacterDexterity,
        constitution: this.newCharacterConstitution,
        intelligence: this.newCharacterIntelligence,
        wisdom: this.newCharacterWisdom,
        charisma: this.newCharacterCharisma,
        healthmax: this.newCharacterHealthMax,
        healthcurrent: this.newCharacterHealthCurrent,
        healthtemp: this.newCharacterHealthTemp,
        speed: this.newCharacterSpeed,
      };
      // axios.post("http://localhost:3000/api/characters", params).then((response) => {
      axios.post("https://dnd-aid-back-end.herokuapp.com/api/characters", params).then((response) => {
        console.log(response.data);
        this.characters.push(response.data);
        this.newCharacterCFirstName = "";
        this.newCharacterCMiddleName = "";
        this.newCharacterCLastName = "";
        this.newCharacterRaceID = "";
        this.newCharacterClassID = "";
        this.newCharacterAlignmentID = "";
        this.newCharacterLanguageID = "";
        this.newCharacterInventoryID = "";
        this.newCharacterStrength = "";
        this.newCharacterDexterity = "";
        this.newCharacterConstitution = "";
        this.newCharacterIntelligence = "";
        this.newCharacterWisdom = "";
        this.newCharacterCharisma = "";
        this.newCharacterHealthMax = "";
        this.newCharacterHealthCurrent = "";
        this.newCharacterHealthTemp = "";
        this.newCharacterSpeed = "";
        // console.log(this.characters);
      });
    },
  },
};
</script>
