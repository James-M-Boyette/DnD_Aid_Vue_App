<template>
  <div id="app">
    <!-- <div :style="image" class="test"> -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
    <!-- <div class="background-page" style="z-index: -10"> -->
    <!-- <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script> -->
    <!-- Google fonts-->
    <!-- <link
          href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        /> -->
    <!-- <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet" /> -->
    <!-- Core theme CSS (includes Bootstrap)-->
    <!-- <link href="css/styles.css" rel="stylesheet" /> -->
    <div class="banner">
      <!-- <img class="hero-image" src="~@/assets/Imgs/DnDAidLogo.png" alt="" /> -->
      <img class="hero-image" src="~@/assets/Imgs/DnDAidLogo.png" href="/home" />
      <!-- <button class="hero-image"></button> -->
    </div>
    <!-- This is A potential "first" / "header" bar w logo, social media etc -->
    <!-- <nav class="navbar fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img src="./assets/Logo1_(small).png" href="/" alt="" width="110" height="40" />
            </a>
          </div>
        </nav> -->
    <!-- This is a second, more basic header (not using bootstrap) -->
    <!-- <div class="container">
          <div class="page-header">
            <a class="page-header" style="background-color: #021218">
              <img src="./assets/Logo1_(small).png" href="/" alt="" width="110" height="40" />
            </a>
          </div>
        </div> -->
    <!-- This is the bootstrap navbar -->
    <!-- NOTE: STICKY TOP BEING USED ... IF YOU WANT A SECOND HEADER ABOVE -->
    <nav class="navbar sticky-top navbar-expand-lg">
      <div class="container-fluid">
        <!-- Brand (Logo Pic) + link -->
        <!-- <a class="navbar-brand" href="/">
              <img src="./assets/Logo1_(small).png" href="/home" alt="" width="110" height="40" />
            </a> -->

        <!-- Navbar Brand Logo -->
        <a class="navbar-brand button" href="/home">
          <img src="./assets/Logo1_(small).png" href="/home" alt="" width="110" height="40" />
        </a>
        <!-- test test -->
        <!-- <div class="dropdown">
              <a
                class="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div> -->
        <!-- Dropdown : Home -->
        <div class="dropdown dropdown-parent">
          <button
            class="btn btn-lg dropdown-toggle glyphicon glyphicon-off"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Home
          </button>
          <div class="dropdown-menu dropdown-child" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/home">Home</a>
            <a class="dropdown-item" href="/about">About</a>
          </div>
        </div>
        <!-- Dropdown : Users -->
        <div class="dropdown dropdown-parent">
          <button
            class="btn btn-lg dropdown-toggle glyphicon glyphicon-off"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Users
          </button>
          <div class="dropdown-menu dropdown-child" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/sign_up">Join!</a>
            <hr class="dropdown-divider" />
            <a class="dropdown-item" href="/login">Log In</a>
            <a class="dropdown-item" href="/user_profile">View Profile</a>
            <a class="dropdown-item" href="/user_profile">Edit Profile</a>
            <hr class="dropdown-divider" />
            <a class="dropdown-item" href="/logout">Log Out</a>
          </div>
        </div>
        <!-- Dropdown : Characters -->
        <div class="dropdown dropdown-parent">
          <button
            class="btn btn-lg dropdown-toggle glyphicon glyphicon-off"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Characters
          </button>
          <div class="dropdown-menu dropdown-child" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/characters">View Your Characters</a>
            <a class="dropdown-item" href="/character_create">Createa New Character</a>
          </div>
        </div>
        <!-- glyphicon glyphicon-user -->
        <!-- Dropdown : Campaigns -->
        <div class="dropdown dropdown-parent">
          <button
            class="btn btn-lg dropdown-toggle glyphicon glyphicon-off"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Campaigns
          </button>
          <div class="dropdown-menu dropdown-child" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/test">Create a Campaign!</a>
            <a class="dropdown-item" href="/test">Join, Resume, Leave</a>
          </div>
        </div>
        <!-- glyphicon glyphicon-tower -->
        <div class="dropdown dropdown-parent">
          <button
            class="btn btn-lg dropdown-toggle glyphicon glyphicon-off"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Parties
          </button>
          <div class="dropdown-menu dropdown-child" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/test">Create a Party!</a>
            <a class="dropdown-item" href="/test">Join, Resume, Leave</a>
          </div>
        </div>
        <!-- <a
              class="nav-link dropdown-toggle btn btn-lg glyphicon glyphicon-fullscreen"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Parties
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/test">Create a Party!</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="/test">Join, Resume, Leave</a></li>
            </ul> -->
        <!-- Dropdown : Encyclopedia -->
        <div class="dropdown dropdown-parent">
          <button
            class="btn btn-lg dropdown-toggle glyphicon glyphicon-off"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Encyclopedia
          </button>
          <div class="dropdown-menu dropdown-child" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="https://www.dndbeyond.com/spells" target="_blank">Spells</a>
            <a class="dropdown-item" href="https://www.dndbeyond.com/items" target="_blank">Items</a>
            <a class="dropdown-item" href="https://www.dndbeyond.com/classes" target="_blank">Classes</a>
            <a class="dropdown-item" href="https://www.dndbeyond.com/races" target="_blank">Races</a>
            <a class="dropdown-item" href="https://www.dndbeyond.com/feats" target="_blank">Feats</a>
            <a class="dropdown-item" href="https://www.dndbeyond.com/backgrounds" target="_blank">Backgrounds</a>
          </div>
        </div>

        <!-- This is keeping the alignment of the navbar menu items where I want them ... need to figure out how later -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul> -->
        </div>
        <!-- <li class="nav-item"> -->
        <div class="dropdown dropdown-parent">
          <button
            class="btn btn-lg dropdown-toggle glyphicon glyphicon-off"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dev Ops
          </button>
          <div class="dropdown-menu dropdown-child" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/test">Beware the Minefield</a>
            <a class="dropdown-item" href="/your_character">Character Show (working)</a>
            <a class="dropdown-item" href="/ideal">Character Sheet Ideal</a>
          </div>
        </div>
        <!-- User Sign-Up/Login -->
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a class="btn btn-info btn-lg" href="/sign_up">
              <span class="glyphicon glyphicon-upload"></span>
              <span class="single-space">_</span>
              <span>Sign-up</span>
            </a>
          </li>
          <li>
            <a class="btn btn-info btn-lg" href="/login">
              <span class="glyphicon glyphicon-log-in"></span>
              <span class="single-space">_</span>
              <span>Login</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- <div :style="image" class="test"></div> -->
    <router-view />
  </div>
  <!-- </div> -->
</template>

<style>
/* From blog: */
/* All link/text styling INSIDE the NAVBAR class only applies to the navbar-BRAND class!
but OTHER styling such as background colours etc will apply to the whole navbar

All the links inside the <ul class=”navbar-nav mr-auto nav”> are styled by the nav element itself, trying to change these on the navbar will not work! */
#app {
  /* font-family entries list back-up fonts ... in case the user doesn't have the first. Worth find top 3 DnD-esque fonts that are popular and putting them here:  https://www.cssfontstack.com/*/
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111010;
  /* background-color: #e60e0e; */
  background-image: url("~@/assets/Imgs/Backgrounds/hexellence/hexellence_2X.png");
  background-repeat: repeat;
  /* background-size: cover; */

  /* The file needed to be in Cammel case to work ... also I didn't have the .jpg initially o.O */
  /* Also ... do we really want to random this? The Text we're showing on various pages, the brand styling ... at most, we should have all images with the same general Hue, value */
}
/* #background-market {
  background-image: url("~@/assets/Imgs/Backgrounds/BlackMarketEntranceHamsterfly.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100% 100%;
  background-attachment: local;
  position: relative;
  color: #ffffff;
  background-repeat: no-repeat;
} */
/* .test {
  background-image: url("~@/assets/Imgs/Backgrounds/hexellence/hexellence_2X.png");
  background-size: 25%;
  background-repeat: repeat;
  background-position: center;
  background-attachment: local;
} */
/* .background-page {
  background-position: center;
  background-attachment: local;
  background-repeat: repeat;
  position: relative;
  color: #ffffff;
  z-index: -10;
}
.background-page::before {
  content: "";
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  width: 100%;
  height: auto;
  position: fixed;
  color: #ffffff;
  background-image: url("~@/assets/Imgs/Backgrounds/hexellence/hexellence_2X.png");
  background-size: 25%;
  filter: brightness(50%);
} */
/* THIS CHANGES NAVBAR LINK COLORS */
#navbarDropdown,
#dropdownMenuLink,
#dropdownMenuButton {
  color: #ffffff !important;
  /* position: relative !important; */
}
/* #dropdownMenuLink {
  color: #ffffff;
} */

#nav {
  padding: 30px;
  font-weight: bold;
  color: #b8535b;
}

/* Changing the font-weight here changed the font-weight of links inside the navbar */
#navbar-nav {
  /* padding: 30px; */
  /* font-weight: bold; */
  font-family: Georgia;
  color: #e61acb;
}

/* This controls the background color of the navbar, AS WELL as all link/text styling inside the navbar BRAND class ... so if you want the brand to not be a logo, but instead, text - this is where you'd set it to bold, neon green, comic sands etc*/
/* It also, apparently, controls the color of the dots and icons */
.navbar {
  /* background: #021218; */
  background: #00090b;
  color: #ffffff;
}

/* This controls the look of all router links */
#nav a {
  font-weight: bold;
  color: #e60e0e;
  /* color: #ffffff; */
}

.navbar-brand {
  float: left;
  height: 50px !important;
  padding: 6px 15px !important;
  font-size: 18px !important;
  line-height: 30px !important;
}

#nav-item {
  font-family: Georgia;
  font-weight: bold;
  color: #bb2aa3;
}

/* This controls what happens when you hover over a link etc */
/* navbar-brand inherits the main link colour ... must find this*/
#navbar a:hover {
  color: #ccdce1;
}

/* This controls what color n background etc the current page's link (router link) shows ... so the rest are controlled, instead, by nav a*/
#nav a.router-link-exact-active {
  /* color: #42b983; */
  color: #ffffff;
  background: #e60e0e;
}
#navbar-toggler {
  font-size: 20px;
  color: #fff;
}
.navbar-link {
  font-size: 20px;
  color: #fff;
}
.a:hover {
  background-color: #ffffff;
}
.btn-lg:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btun-primary {
  color: #ffffff;
  background-color: #001014;
  border-color: #00090b;
}
.display-3 {
  color: #ffffff;
}
.my-4 {
  color: #ffffff;
}
.btn-info {
  color: #fff;
  /* background-color: #5bc0de;
  border-color: #46b8da; */
  background-color: #00090b !important;
  border-color: #00090b !important;
}
.char-create {
  color: #00090b;
}
.single-space {
  color: rgba(255, 255, 255, 0);
}
.dropdown-menu {
  position: absolute !important;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  color: #ffffff !important;
  background-color: #00090b !important;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
}
.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  /* color: #212529; */
  color: #ffffff !important;
  /* font-size: 20px !important; */
  font-size: 18px !important;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.banner {
  padding: 50px;
  /* size: 100%; */
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: 100% 100%; */
  /* background-size: cover; */
  /* height: 100%;
  width: contain; */
  position: relative;
  /* background: #1abc9c; */
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("~@/assets/Imgs/Banners/BlackHex50bluer.png"); */
  /* background-image: url("~@/assets/Imgs/Banners/BlackHex50.png"); */
  /* filter: saturate(200%); */
  /* filter: hue-rotate(20deg); */
  color: white;
  font-size: 30px;
}
.banner::before {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("~@/assets/Imgs/Banners/BlackHex50.png");
  background-size: cover;
  filter: saturate(100%);
  filter: hue-rotate(10deg);
  filter: contrast(100%);
  filter: brightness(75%);
}
/* .hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("~@/assets/Imgs/DnDAidLogo.png");

  height: 40%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
} */
.hero-image {
  /* max-width: 100%; */
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 33%;
  height: auto;
  filter: saturate(100%) !important;
  filter: hue-rotate(0%) !important;
  /* size: 25%; */
}

/* Place text in the middle of the image */
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
