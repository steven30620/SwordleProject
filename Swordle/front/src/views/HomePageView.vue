<template>
  <div id="home">
    <div id="header">
      <SwordleHeader />
    </div>
    <div id="body">
      <div id="menu">
        <button
          id="playButton"
          @click="changeComponent('SwordleComponent')"
          :class="{
            selected: currentComponent === 'SwordleComponent',
          }"
        >
          Jouer !
        </button>
        <button
          id="statButton"
          @click="changeComponent('StatsComponent')"
          :class="{
            selected: currentComponent === 'StatsComponent',
          }"
        >
          Stats
        </button>
        <component
          :is="currentComponent"
          @signin="signin"
          @signup="signup"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import SwordleHeader from "../components/header/HeaderComponent.vue";
import SwordleComponent from "../components/game/SwordleComponent.vue";
import StatsComponent from "../components/menu/StatsComponent.vue";

export default {
  name: "HomeView",
  components: {
    SwordleHeader,
    SwordleComponent,
    StatsComponent,
  },
  data() {
    return {
      currentComponent: "SignUpFormComponent",
    };
  },
  methods: {
    changeComponent: function (component) {
      this.currentComponent = component;
    },
  },
};
</script>

<style lang="scss" scoped>
#home {
  min-width: 400px;
}

#menu {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}
button {
  font-size: 50px;
  margin: 20px;
}
</style>
