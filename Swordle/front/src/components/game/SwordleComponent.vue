<template>
  <table id="game">
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
</template>

<script>
export default {
  name: "SwordleComponent",
};
</script>

<style lang="scss" scoped>
#game {
  margin-top: 70px;
  border-spacing: 0px;
  height: 400px;
  width: 400px;
}
td {
  width: 20px;
  margin: 0px;
  border: solid 1px black;
  text-transform: uppercase;
  font-weight: 1000;
}
</style>
