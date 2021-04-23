<template>
  <div class="index">
    <h1>{{ message }}</h1>
    <!-- <h3>{{ "Brian's my hero" }}</h3> -->
    <h3>Here are your current characters:</h3>
    <div v-for="character in characters" v-bind:key="character.index">
      <p>{{ character.cfirstname }} {{ character.cmiddlename }} {{ character.clastname }}</p>
      <p>
        First Name:
        <input type="text" v-model="character.cfirstname" />
      </p>
      <p>
        Middle Name:
        <input type="text" v-model="character.cmiddlename" />
      </p>
      <p>
        Last Name:
        <input type="text" v-model="character.clastname" />
      </p>
      <p>
        RaceID:
        <input type="text" v-model="character.raceid" />
      </p>
      <p>
        ClassID:
        <input type="text" v-model="character.classid" />
      </p>
      <p>
        AlignmentID:
        <input type="text" v-model="character.alignmentid" />
      </p>
      <p>
        LanguageID:
        <input type="text" v-model="character.languageid" />
      </p>
      <p>
        InventoryID:
        <input type="text" v-model="character.inventoryid" />
      </p>
      <p>
        Strength:
        <input type="text" v-model="character.strength" />
      </p>
      <p>
        Dexterity:
        <input type="text" v-model="character.dexterity" />
      </p>
      <p>
        Constitution:
        <input type="text" v-model="character.constitution" />
      </p>
      <p>
        Intelligence:
        <input type="text" v-model="character.intelligence" />
      </p>
      <p>
        Wisdom:
        <input type="text" v-model="character.wisdom" />
      </p>
      <p>
        Charisma:
        <input type="text" v-model="character.charisma" />
      </p>
      <p>
        Current Health:
        <input type="text" v-model="character.cfirstname" />
      </p>
      <p>
        Max Health:
        <input type="text" v-model="character.healthmax" />
      </p>
      <p>
        Temporary Health:
        <input type="text" v-model="character.healthtemp" />
      </p>
      <p>
        Speed:
        <input type="text" v-model="character.speed" />
      </p>
      <p></p>
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
