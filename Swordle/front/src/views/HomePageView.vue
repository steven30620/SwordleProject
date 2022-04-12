<template>
  <div id="home">
    <div id="menu">
      <DisplayMenuComponent />
    </div>
  </div>
</template>

<script>
import DisplayMenuComponent from "../components/menu/DisplayMenuComponent.vue";

export default {
  name: "HomeView",
  components: {
    DisplayMenuComponent,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
