<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/DMU-logo.jpg" class="logo">
    <Map />
    <!-- <div v-for="signal in signals" v-bind:key="signal.timestamp">
      <p>{{signal.latitude}}</p>
    </div> -->
    <HelloWorld msg="Telecom Signal Strength Data App"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Map from "./components/Map.vue";
// import Firebase from "firebase";
// let config = {
//   apiKey: "AIzaSyDUDOGJNvWpaZ2BrIDJny4vgVfJl7cOG3U",
//   authDomain: "fieldtest-b5a57.firebaseapp.com",
//   databaseURL: "https://fieldtest-b5a57.firebaseio.com",
//   projectId: "fieldtest-b5a57",
//   storageBucket: "fieldtest-b5a57.appspot.com",
//   messagingSenderId: "390084766159"
// };

// let app = Firebase.initializeApp(config);
// let db = app.database();
// let signalRef = db.ref("database");

// JSON at "https://fieldtest-b5a57.firebaseio.com/database.json";

export default {
  name: "app",
  components: {
    HelloWorld,
    Map
  },
  // firebase: {
  //   signals: signalRef
  // },
  data() {
    return {
      newSignal: {
        latitude: "",
        longitude: "",
        signalStrength: ""
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width: 250px;
  height: 250px;
}
</style>
