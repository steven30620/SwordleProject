<template>
  <div id="game">
    <div id="game--backArrow">
      <button id="game--backArrow--logo" @click="BackPage">
        <i class="fa-solid fa-arrow-left fa-2x"></i>
      </button>
      <button id="game--count" @click="randomWordSelection">
        <i class="fa-solid fa-calculator"></i>
      </button>
      <button id="game--compare" @click="compareWord">
        <i class="fa-solid fa-not-equal"></i>
      </button>
    </div>
    <div id="count">
      Mot aléatoire séléctionné = {{ RandomWord }} | Nombre de lettres =
      {{ WordLength }}
    </div>
    <table id="game--zone">
      <tr v-for="lines of this.Try" :key="lines">
        <td v-for="(i, letter) of RandomWord" :key="letter">
          <input v-model="Lettter" type="text" maxlength="1" placeholder="." />
        </td>
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
      Words: ["jonitoman", "coucou", "arthufr", "poterifffes", "patCreperie"],
      WordLength: 0,
      RandomWord: "",
      Try: 6,
      Letter: [],
    };
  },

  methods: {
    backPage: function () {
      return this.$router.push("/");
    },
    randomWordSelection: function () {
      let random = Math.floor(Math.random() * this.Words.length);
      console.log(random);
      this.RandomWord = this.Words[random];
      console.log(this.RandomWord);
      this.WordLength = this.RandomWord.length;
    },
    compareWord: function () {
      console.log(this.Letter);
    },
  },
};
</script>

<style lang="scss" scoped>
#game {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  &--count {
    width: 50px;
    height: 50px;
  }
}

td {
  width: 20px;
  margin: 0px;
  border: solid 1px black;
}
input {
  text-align: center;
  height: 100%;
  width: 60px;
  border: none;
  text-transform: uppercase;
  font-weight: 1000;
  cursor: default;
  &:focus {
    // caret-color: transparent;
  }
}
</style>
