<template>
  <div id="bodyMenu">
    <div id="body">
      <div id="menu">
        <button id="playButton" @click="LauchGame">Jouer !</button>
        <button id="statsButton" @click="ToStatsPage">Stats</button>
      </div>
    </div>
  </div>
</template>

<script>
import StatsComponent from "../../components/menu/StatsComponent.vue";
import SwordleComponent from "../../components/game/SwordleComponent.vue";

export default {
  name: "DisplayMenuComponent",
  component: {
    StatsComponent,
    SwordleComponent,
  },
  data() {
    return {};
  },
  methods: {
    LauchGame: function () {
      return this.$router.push("/swordle");
    },
    ToStatsPage: function () {
      return this.$router.push("/stats");
    },
  },
};
</script>

<style lang="scss" scoped>
#menu {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  min-width: 400px;
}
button {
  font-size: 50px;
  margin: 20px;
}
</style>
