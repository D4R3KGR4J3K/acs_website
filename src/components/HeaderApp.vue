<template>
  <header>
    <img class="textImg" src="../assets/img/logo.png" alt="logo.png" />
    <div class="navCollection">
      <div class="navItem">Informacje</div>
      <div class="navItem">Artykuł</div>
      <div class="navItem">Usługi</div>
      <div class="navItem">Opinie</div>
      <div class="navItem">Kontakt</div>
    </div>
    <img class="textLogo" src="../assets/img/text.png" alt="text.png" />
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
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;

  .textImg,
  .textLogo {
    display: flex;
    position: relative;
    height: 150px;
  }

  > .navCollection {
    display: flex;
    position: relative;
    justify-content: space-around;
    width: 50%;
    align-items: center;
    & > .navItem {
      display: flex;
      width: max-content;
      height: max-content;
      font-size: 1.5vw;
      font-family: 'Encode Sans', sans-serif;
      color: #ddcee9;
      text-shadow: rgb(0, 0, 0) 3px 0px 0px,
        rgb(0, 0, 0) 2.83487px 0.981584px 0px,
        rgb(0, 0, 0) 2.35766px 1.85511px 0px,
        rgb(0, 0, 0) 1.62091px 2.52441px 0px,
        rgb(0, 0, 0) 0.705713px 2.91581px 0px,
        rgb(0, 0, 0) -0.287171px 2.98622px 0px,
        rgb(0, 0, 0) -1.24844px 2.72789px 0px,
        rgb(0, 0, 0) -2.07227px 2.16926px 0px,
        rgb(0, 0, 0) -2.66798px 1.37182px 0px,
        rgb(0, 0, 0) -2.96998px 0.42336px 0px,
        rgb(0, 0, 0) -2.94502px -0.571704px 0px,
        rgb(0, 0, 0) -2.59586px -1.50383px 0px,
        rgb(0, 0, 0) -1.96093px -2.27041px 0px,
        rgb(0, 0, 0) -1.11013px -2.78704px 0px,
        rgb(0, 0, 0) -0.137119px -2.99686px 0px,
        rgb(0, 0, 0) 0.850987px -2.87677px 0px,
        rgb(0, 0, 0) 1.74541px -2.43999px 0px,
        rgb(0, 0, 0) 2.44769px -1.73459px 0px,
        rgb(0, 0, 0) 2.88051px -0.838247px 0px;
    }
  }

  .textImg {
    margin-left: 1.5vw;
  }

  .textLogo {
    margin-right: 1.5vw;
  }
}
</style>
