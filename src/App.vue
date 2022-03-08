<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <loading/>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import loading from "./stories/loading/loading.vue";

export default {
  name: "App",
  components: {
    loading
  }
};
</script>

<style>
/* @import "./index.css"; */
/* @import "./assets/index.css"; */
</style>
