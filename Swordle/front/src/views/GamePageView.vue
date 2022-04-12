<template>
  <div id="gameZone">
    <SwordleComponent />
  </div>
</template>

<script>
import SwordleComponent from "../components/game/SwordleComponent.vue";
export default {
  name: "GamePage",
  components: {
    SwordleComponent,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
