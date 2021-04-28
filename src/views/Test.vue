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
        <a href="/Character_Create" class="btn btn-primary btn-lg" target="”_blank”">Create a new character!</a>
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

  <!-- </body> -->
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
