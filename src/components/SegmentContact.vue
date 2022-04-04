<template>
  <div class="container">
    <div class="blockHeader">
      <span class="title">Kontakt</span>
    </div>
    <div class="contentBlock">
      <div class="textBlock">
        <span class="styleText">
          <b>Email:</b> kontakt@amairoservice.com<br />
          <b>Tel.</b> 84 93 89 933<br />
          <br />
          <b>Biuro Obsługi Klienta:</b><br />
          <b>Tel.</b> 84 93 89 933 <b>wew.</b> 1<br />
          <b>Reklamacje:</b><br />
          <b>Tel.</b> 84 93 89 933 <b>wew.</b> 2<br />
          <b>Informacje odnośnie usług:</b><br />
          <b>Tel.</b> 84 93 89 933 <b>wew.</b> 3<br />
          <br />
          <i><b>Kontakt w sprawie biznesu:</b></i>
          <br />
          <b>Email:</b> bis@amairoservice.com<br />
          <b>Tel.</b> 84 93 89 933 <b>wew.</b> 15
        </span>
      </div>
      <div class="imgBlock">
        <img src="../assets/img/logotext.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
.blockHeader {
  display: flex;
  position: relative;
  width: 100%;
  height: max-content;
  justify-content: center;

  & > .title {
    display: flex;
    position: relative;
    width: max-content;
    font-size: 5.5em;
    height: max-content;
  }
}

.contentBlock {
  display: flex;
  width: 100%;
  height: 100%;

  & > .imgBlock {
    display: flex;
    width: calc(50% - (40px * 2));
    padding: 40px;
    height: calc(100% - (40px * 2));
    align-items: center;

    & > img {
      display: flex;
      height: calc(70% - (40px * 2));
    }
  }

  & > .textBlock {
    display: flex;
    width: calc(50% - (80px * 2));
    padding: 40px 80px;
    height: calc(100% - (40px * 2));

    & > .styleText {
      font-size: 2vw;
      text-align: center;
    }
  }
}

.container {
  display: flex;
  flex-direction: column;
  position: relative;
  height: calc(100% - 40px);
  width: 100%;
  margin: 20px;
  padding: 0;
  overflow: hidden;
}
</style>
