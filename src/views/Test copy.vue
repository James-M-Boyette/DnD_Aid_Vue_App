<template>
  <div class="home">
    <h3>The test theme for character index/user home</h3>
    <!-- <h5>Please feel free to look around</h5> -->
    <!-- <div></div> -->
    <!-- </div> -->
    <!-- <head> -->
    <!-- <meta charset="utf-8" /> -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap core CSS -->
    <!-- This is throwing an error in console: "Resource interpreted as Stylesheet but transferred with MIME type test/html" -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

    <!-- Custom styles for this template -->
    <!-- <link href="css/heroic-features.css" rel="stylesheet" /> -->
    <!-- </head> -->

    <!-- <body> -->
    <!-- Navigation -->
    <!-- This shows a black nav bar at top, -->
    <!-- "Start Bootstrap" and three-line menu icon - both clickable and do nothing -->
    <!-- When commented out ... my original App.vue links appear .. how to combine them? hmmm... -->
    <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Start Bootstrap</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->

    <!-- Page Content -->
    <div class="container">
      <!-- Jumbotron Header -->
      <header class="jumbotron my-4">
        <h1 class="display-3">Welcome back USERNAME !</h1>
        <p class="lead">Your characters are below ...</p>
        <!-- This is a button to _ -->
        <a href="/character_create" class="btn btn-primary btn-lg" target="”_blank”">Create a new character!</a>
      </header>
      <!-- Page Features -->
      <div class="row text-center">
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card h-100">
            <img class="character1" src="http://placehold.it/500x325" alt="Character" />
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Rounded Photo</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">See more ...</a>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card h-100">
            <!-- <img class="background" src="@/assets/Character_Avatars/Blue_Eyes_(Cristi-B).jpg" alt="" /> -->
            <!-- <img class="avatar" src="@/assets/Character_Avatars/Blue_Eyes_(Cristi-B).jpg" alt="" /> -->
            <img class="background" src="@/assets/Character_Avatars/Blue_Eyes_(Cristi-B).jpg" alt="" />
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">
                Some flavor text should go here ... maybe race class etc? Or an "intro" section the user writes when
                creating?
              </p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-danger">Stay a'while, n listen!</a>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card h-100">
            <img class="card-img-top" src="http://placehold.it/500x325" alt="" />
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.
              </p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-danger">See more ...</a>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card h-100">
            <img class="card-img-top" src="http://placehold.it/500x325" alt="" />
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Square Photo</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">More, you say?</a>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner text-center rounded">
              <h2 class="section-heading mb-5">
                <span class="section-heading-upper">Come On In</span>
                <span class="section-heading-lower">We're Open</span>
              </h2>
              <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                <li class="list-unstyled-item list-hours-item d-flex">
                  Sunday
                  <span class="ml-auto">Closed</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Monday
                  <span class="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Tuesday
                  <span class="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Wednesday
                  <span class="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Thursday
                  <span class="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Friday
                  <span class="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Saturday
                  <span class="ml-auto">9:00 AM to 5:00 PM</span>
                </li>
              </ul>
              <p class="address mb-5">
                <em>
                  <strong>1116 Orchard Street</strong>
                  <br />
                  Golden Valley, Minnesota
                </em>
              </p>
              <p class="mb-0">
                <small><em>Call Anytime</em></small>
                <br />
                (317) 585-8468
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- /.container -->

  <!-- Footer -->
  <!-- <footer class="py-5 bg-dark"> -->
  <!-- <div class="container">
    <p class="m-0 text-center text-white">Copyright &copy; Your Website 2020</p>
  </div> -->
  <!-- /.container -->
  <!-- </footer> -->

  <!-- Bootstrap core JavaScript -->
  <!-- <div v-for="character in characters" v-bind:key="character.index">
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
      <input type="text" v-model="character.healthcurrent" />
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
    Bootstrap Modal Button
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#character-details">
      More Info
    </button>
    Old Button for Modal
    <p><button v-on:click="charactersShow(character)">More Info</button></p>
    <img v-bind:src="character.image_url" />
  </div> -->
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
  <!-- </body> -->
  <!-- DON'T USE THIS ONCE THE SITE IS PRETTIER -->
  <!-- Router Links (depreciated) -->
  <!-- <router-link to="/">Home</router-link>
          |
          <router-link to="/about">About</router-link>
          |
          <router-link to="/login">Login</router-link>
          |
          <router-link to="/logout">Logout</router-link>
          |
          <router-link to="/character/:id">Your Characters</router-link>
          |
          <router-link to="/character_create">Character Creation</router-link>
          |
          <router-link to="/SignUp">User Sign-Up</router-link>
          |
          <router-link to="/test">test of theme</router-link> -->
</template>

<style>
.character1 {
  vertical-align: middle;
  width: 200px;
  height: 200px;
  border-radius: 25%;
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
// import axios from "axios";

export default {
  data: function () {
    return {};
  },
  created: function () {},
  methods: {},
};
</script>
