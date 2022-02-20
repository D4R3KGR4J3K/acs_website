<template>
  <header>
    <img src="../assets/logo.png" alt="SVG Logo" />
    <div>
      <span>Informacje</span>
      <span>Artykuł</span>
      <span>Usługi</span>
      <span>Opinie</span>
      <span>Kontakt</span>
    </div>
    <img src="../assets/text.png" alt="SVG Logo Text" />
  </header>
</template>

<style lang="scss" scoped>
// header {
//   width: 100vw;
//   height: 50px;
//   background: red;
//   border-radius: 100%;
//   border-top-left-radius: 0;
//   border-top-right-radius: 0;
// }
header {
  > img {
    display: block;
    position: relative;
    float: left;
    width: 200px;
    height: 100px;
  }

  > div {
    display: block;
    position: relative;
    left: calc(50vh - 258px);
    float: left;
  }

  :last-child {
    float: right;
  }
}
</style>
