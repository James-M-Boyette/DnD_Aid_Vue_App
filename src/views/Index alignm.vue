<template>
  <div class="index">
    <h1>{{ message }}</h1>
    <!-- <h3>{{ "Brian's my hero" }}</h3> -->
    <h3>Here they are!</h3>
    <div v-for="alignment in alignments" v-bind:key="alignment.index">
      <p>{{ alignment.name }}</p>
      <!-- Bootstrap Modal Button -->
      <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#alignment-details"> -->
      <!-- More Info
      </button> -->
      <!-- Old Button for Modal -->
      <p><button v-on:click="alignmentsShow(alignment)">More Info</button></p>
      <!-- <img v-bind:src="alignment.image_url" /> -->
    </div>
    <!-- Bootstrap Modal -->
    <!-- <div class="modal fade" id="#alignment-details" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Further reading ...</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
              Image URL placeholder
              <input type v-model="alignments.imgurl" />
            </p>
            <p>
              Name:
              {{ alignments }}
            </p>
            <p>
              Abbreviation:
              {{ alignments.abbreviation }}
            </p>
            <p>
              Description:
              {{ alignments.desc }}
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
    <dialog id="alignment-details">
      <form method="dialog">
        <h2>Further reading ...</h2>
        <p>
          Image URL placeholder
          <input type v-model="currentAlignment.imgurl" />
        </p>
        <p>
          Name:
          {{ currentAlignment.name }}
        </p>
        <p>
          Abbreviation:
          {{ currentAlignment.abbreviation }}
        </p>
        <p>
          Description:
          {{ currentAlignment.desc }}
        </p>
      </form>
    </dialog>
    <div></div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Let's use Vue to see some alignments!",
      alignments: {},
      // alignmentsTheirs: [],
      name: "",
      abbreviation: "",
      desc: "",
      imgurl: "",
      currentAlignment: [],
    };
  },
  created: function () {
    console.log("Fetching all the alignments automatically ...");
    this.alignmentsIndex();
    // I got this right, except I console.logged it rather than running it as a method
  },
  methods: {
    alignmentsIndex: function () {
      console.log("alignmentsIndex action is executing ...");
      axios.get("http://localhost:3000/api/alignments/").then((response) => {
        // console.log("Here's the data from our personal database ...");
        // console.log(response.data);
        this.alignments = response.data;
        // Our table data is entered into the hash of our var "alignments"
        console.log("Here's what's in alignments:");
        console.log(this.alignments);
      });
      // Fetch DnD's table
      // axios.get("https://www.dnd5eapi.co/api/alignments/").then((response) => {
      //   console.log("Here's the data from dnd5eapi ...");
      //   console.log(response.data);
      //   this.alignmentsTheirs = response.data;
      // });
    },
    alignmentsShow: function (theAlignment) {
      console.log("alignmentsShow action is executing ...");
      console.log(theAlignment);
      this.currentAlignment = theAlignment;
      document.querySelector("#alignment-details").showModal();
      console.log(this.currentAlignment);
    },
  },
};
</script>
