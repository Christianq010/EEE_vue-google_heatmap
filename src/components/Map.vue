<template>
    <div class="map" v-if="points.length">
      <!-- {{this.signals}} -->
        <vue-google-heatmap 
          :initial-zoom="17"
            :lat="points[0].lat"
            :lng="points[0].lng"
            :points="points"
            :width="900"
            :height="350"/>
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
        { lat: 6.9155288, lng: 79.85155213 },
        { lat: 6.9051281, lng: 79.85150225 },
        { lat: 6.9053282, lng: 79.85157227 },
        { lat: 6.9000293, lng: 79.85450252 },
        { lat: 6.9051291, lng: 79.85200211 },
        { lat: 6.9040280, lng: 79.85355212 },
        { lat: 6.9053288, lng: 79.85210219 },
        { lat: 6.9057288, lng: 79.85310229 },
        { lat: 6.9171292, lng: 79.85110301 },
        { lat: 6.9251291, lng: 79.85280211 },
        { lat: 6.9090280, lng: 79.85355212 },
        { lat: 6.9103288, lng: 79.85910219 },
        { lat: 6.9577288, lng: 79.85810229 },
        { lat: 6.9111292, lng: 79.85810301 }
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

