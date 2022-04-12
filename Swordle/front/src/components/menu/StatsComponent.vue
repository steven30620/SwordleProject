<template>
  <div id="body">
    <button id="body--backArrow--logo" @click="BackPage">
      <i class="fa-solid fa-arrow-left fa-2x"></i>
    </button>
    <h1>Mes stats !</h1>
  </div>
</template>

<script>
export default {
  name: "StatsComponent",
  methods: {
    BackPage: function () {
      return this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
#body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  &--backArrow--logo {
    position: absolute;
    top: 50px;
    left: 50px;

    width: 50px;
    height: 50px;
  }
}
</style>
