<template>
  <div id="app">
    <!-- This is the original nav bar we made in class: basic links seperated by pipes -->
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/logout">Logout</router-link>
      |
      <router-link to="/Characters">Your Characters</router-link>
      |
      <router-link to="/Character_Create">Character Creation</router-link>
      |
      <router-link to="/SignUp">User Sign-Up</router-link>
      |
      <router-link to="/test">test of theme</router-link>
    </div>
    <br />
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
        <a class="navbar-brand" href="/">
          <img src="./assets/Logo1_(small).png" href="/home" alt="" width="110" height="40" />
        </a>
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
          <router-link to="/Characters">Your Characters</router-link>
          |
          <router-link to="/Character_Create">Character Creation</router-link>
          |
          <router-link to="/SignUp">User Sign-Up</router-link>
          |
          <router-link to="/test">test of theme</router-link> -->
        <!-- Hamberger, I think ... -->
        <button
          class="navbar-toggler"
          type="button"
          color="#ffffff"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Home (Link) -->
        <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/home">Home</a>
          </li>
        </ul> -->
        <!-- Home -->
        <!-- <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/home">Home</a>
          </li> -->

        <!-- Dropdown : Home -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Home
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/home">Home</a></li>
            <li><a class="dropdown-item" href="/about">About</a></li>
          </ul>
        </li>
        <!-- Dropdown : Users -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Users
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/SignUp">Join!</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="/userProfile">View Profile</a></li>
            <li><a class="dropdown-item" href="/userProfile">Edit Profile</a></li>
            <li><a class="dropdown-item" href="/login">Log In</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="/logout">Log Out</a></li>
          </ul>
        </li>

        <!-- Dropdown : Characters -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Characters
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/Characters">View Your Characters</a></li>
            <li><a class="dropdown-item" href="/Character_Create">Create New Character</a></li>
          </ul>
        </li>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form class="d-flex">
            <!-- Search + Button -->
            <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button> -->
          </form>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
/* From blog: */
/* All link/text styling INSIDE the NAVBAR class only applies to the navbar-BRAND class! 
but OTHER styling such as background colours etc will apply to the whole navbar

All the links inside the <ul class=”navbar-nav mr-auto nav”> are styled by the nav element itself, trying to change these on the navbar will not work! */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
.navbar {
  background: #021218;
}

/* This controls the look of all router links */
#nav a {
  font-weight: bold;
  color: #e60e0e;
  /* color: #ffffff; */
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
</style>
