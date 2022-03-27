<template>
  <div class="container">
    <div class="blockHeader">
      <span class="title">Opinie</span>
    </div>
    <div class="buttonForList">
      <a class="prev">&#10094;</a>
      <a class="next">&#10095;</a>
    </div>
    <div class="itemsList">
      <div class="itemOpinion">
        s
        <div class="itemText">{{ text }}</div>
        <div class="itemInformation">
          <div class="itemStar" v-for="n in stars" :key="n">&#09733;</div>
          <div class="itemAuthor">~ {{ author }}</div>
        </div>
      </div>
      <div class="itemOpinion">
        s
        <div class="itemText">{{ text }}</div>
        <div class="itemInformation">
          <div class="itemStar" v-for="n in stars" :key="n">&#09733;</div>
          <div class="itemAuthor">~ {{ author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      text: '"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repellat eligendi est, laborum reic"',
      stars: 5,
      author: 'Adam Mirek',
    };
  },
});
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

.itemsList {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 40px 0px;
  justify-content: space-around;
  align-items: center;
  & > .itemOpinion {
    display: flex;
    width: 700px;
    height: 500px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > .itemText {
      display: flex;
      font-size: 3vw;
      text-align: center;
    }

    & > .itemInformation {
      display: flex;
      font-size: 3vw;
      margin-top: 20px;

      & > .itemStar {
        font-size: 3vw;
        color: #da9ac6;
      }

      & > .itemAuthor {
        padding: 10px;
        font-style: italic;
      }
    }
  }
}

.buttonForList {
  display: flex;
  position: relative;
  width: 100%;
  height: 100px;
  margin-bottom: 40px;

  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    /*top: 40%;*/
    width: auto;
    padding: 16px 32px 24px 32px;
    margin-top: -30px;
    color: #000000b1;
    font-weight: bold;
    font-size: 100px;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
  }
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
}
</style>
