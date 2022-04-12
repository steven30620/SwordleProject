<template>
  <div id="bodyStats">
    <StatsComponent />
  </div>
</template>

<script>
import StatsComponent from "../components/menu/StatsComponent.vue";
export default {
  name: "GamePage",
  components: {
    StatsComponent,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
