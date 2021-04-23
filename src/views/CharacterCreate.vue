<template>
  <div class="index">
    <h1>{{ message }}</h1>
    <!-- <h3>{{ "Brian's my hero" }}</h3> -->
    <h3>Let's get crackin' - here are your options:</h3>
    <!-- <div v-for="character in characters" v-bind:key="character.index"> -->
    <!-- I think the above just shows all characters in the table on the page ... but we're showing input fields instead on this page anyway o.O -->
    <div>
      <p>{{ newCharacterCFirstName }} {{ newCharacterCMiddleName }} {{ newCharacterCLastName }}</p>
      <!-- post "/alignments" -->
      <p>
        First Name:
        <input type="text" v-model="newCharacterCFirstName" />
      </p>
      <p>
        Middle Name:
        <input type="text" v-model="newCharacterCMiddleName" />
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

<style></style>

<script>
import axios from "axios";
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
      axios.get("http://localhost:3000/api/characters/").then((response) => {
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
      axios.post("http://localhost:3000/api/characters", params).then((response) => {
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
