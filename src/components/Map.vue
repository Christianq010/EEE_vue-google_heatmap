<template>
    <div class="map" v-if="points.length">
      <!-- {{this.points}} -->
        <vue-google-heatmap 
          :initial-zoom="16"
            :lat="points[0].lat"
            :lng="points[0].lng"
            :points="points"
            :width="900"
            :height="350"/>
        <!-- <p v-model="loop"> {{signals}} </p> -->
        <!-- <p> {{newArray}} </p> -->
    </div>
</template>
 
<script>
import Firebase from "firebase";
let config = {
  apiKey: "AIzaSyDUDOGJNvWpaZ2BrIDJny4vgVfJl7cOG3U",
  authDomain: "fieldtest-b5a57.firebaseapp.com",
  databaseURL: "https://fieldtest-b5a57.firebaseio.com",
  projectId: "fieldtest-b5a57",
  storageBucket: "fieldtest-b5a57.appspot.com",
  messagingSenderId: "390084766159"
};

let app = Firebase.initializeApp(config);
let db = app.database();
let signalRef = db.ref("database");

// JSON at "https://fieldtest-b5a57.firebaseio.com/database.json";

export default {
  firebase: {
    signals: signalRef
  },
  // methods: {
  //   loop() {

  //     console.log(this.$firebaseRefs.signals);
  //   }
  // },
  data() {
    // console.log(signalRef.database);
    return {
      dataPoints: [
        // { lat: this.$firebaseRefs.signals.latitude, lng: this.$firebaseRefs.signals.longitude },
      ],
      points: [
        { lat: 6.9055283, lng: 79.85210215 },
        // { lat: 6.9055564, lng: 79.440209 },
        // { lat: 6.9055905, lng: 79.44027 },
        // { lat: 6.9055956, lng: 79.440279 },
        // { lat: 6.90550224, lng: 79.43352 },
        // { lat: 6.90550155, lng: 79.434101 },
        // { lat: 6.9055016, lng: 79.43443 },
        // { lat: 6.9055068, lng: 79.434527 },
        // { lat: 6.90550738, lng: 79.434598 },
        // { lat: 6.90550938, lng: 79.43465 },
        // { lat: 6.90551024, lng: 79.434889 },
        // { lat: 6.90550955, lng: 79.435392 },
        // { lat: 6.90550886, lng: 79.435959 }
      ]
    };
  }
};
</script>

<style>
.map {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

