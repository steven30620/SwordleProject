<template>
  <div id="game">
    <div id="game--backArrow">
      <button id="game--backArrow--logo" @click="BackPage">
        <i class="fa-solid fa-arrow-left fa-2x"></i>
      </button>
    </div>
    <table id="game--zone">
      <tr>
        <td>t</td>
        <td>e</td>
        <td>s</td>
        <td>t</td>
        <td>e</td>
        <td>r</td>
      </tr>
      <tr>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
      </tr>
      <tr>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
      </tr>
      <tr>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
      </tr>
      <tr>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
      </tr>
      <tr>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
        <td>.</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "SwordleComponent",
  data() {
    return {
      InGame: true,
      DisplayBackArrow: false,
    };
  },

  methods: {
    BackPage: function () {
      return this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
#game {
  display: flex;
  justify-content: center;
  &--zone {
    margin-top: 70px;
    border-spacing: 0px;
    height: 400px;
    width: 400px;
  }
  &--backArrow {
    position: absolute;
    top: 50px;
    left: 50px;
    &--logo {
      width: 50px;
      height: 50px;
    }
  }
}

td {
  width: 20px;
  margin: 0px;
  border: solid 1px black;
  text-transform: uppercase;
  font-weight: 1000;
}
</style>
