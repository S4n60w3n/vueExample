<template>
  <div id="app">
    <div class="loaderWrap">
      <Loader :currentValue="0" :maxValue="100" />
      <Loader :currentValue="39" :maxValue="100" />
      <Loader :currentValue="13" :maxValue="37" />
      <Loader :currentValue="8" :maxValue="15" label="Label" />
    </div>
    <div class="loaderWrap">
      <Loader :currentValue="0" :maxValue="100" compact />
      <Loader :currentValue="42" :maxValue="100" compact />
      <Loader :currentValue="42" :maxValue="73" label="Label" compact />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Loader from "./components/Loader.vue";

export default Vue.extend({
  name: "App",
  components: {
    Loader
  }
});
</script>

<style>
#app {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 100px 15%;
  box-sizing: border-box;
}
.loaderWrap {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
