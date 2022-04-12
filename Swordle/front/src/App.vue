<template>
  <div id="appVue">
    <div id="appVue--header">
      <SwordleHeader />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import SwordleHeader from "./components/header/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    SwordleHeader,
  },
};
</script>

<style lang="scss">
#appVue {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
