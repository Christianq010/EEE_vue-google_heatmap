<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Final year project for BEng in Electrical and Electronic Engineering
      <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. -->
    </p>
    <h3>Android app source code</h3>
    <ul>
      <!-- <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">GitHub</a></li> -->
      <li><a href="https://github.com/Christianq010/EEE__ssa_final_year_project" target="_blank" rel="noopener">GitHub</a></li>
    </ul>
    <h3>Vue Project</h3>
    <ul>
      <li><a href="https://github.com/Christianq010/EEE_vue-google_heatmap" target="_blank" rel="noopener">GitHub</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Deployed link</a></li>
    </ul>
    <h3>Christiaan Quyn</h3>
    <ul>
      <li><a href="https://chrisquyn.com" target="_blank" rel="noopener">Website</a></li>
      <li><a href="https://github.com/Christianq010" target="_blank" rel="noopener">GitHub</a></li>
      <li><a href="https://linkedin.com/in/christianq010" target="_blank" rel="noopener">LinkedIn</a></li>
      <li><a href="https://medium.com/@christianq010" target="_blank" rel="noopener">Medium</a></li>
      <li><a href="https://www.instagram.com/christiaanquyn/" target="_blank" rel="noopener">Instagram</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
