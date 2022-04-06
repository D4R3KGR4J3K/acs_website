<template>
  <div class="container">
    <div class="blockHeader">
      <span class="title">Opinie</span>
    </div>
    <div class="buttonForList">
      <a class="prev" @click="opinionStore.nextPage(-1)">&#10094;</a>
      <a class="next" @click="opinionStore.nextPage(1)">&#10095;</a>
    </div>
    <div class="itemsList">
      <div
        class="itemOpinion"
        v-for="(item, index) in opinionStore.showOpinions"
        :key="index"
      >
        <div class="itemText">{{ item.text }}</div>
        <div class="itemInformation">
          <div class="itemStar" v-for="n in item.stars" :key="n">&#09733;</div>
          <div class="itemAuthor">~ {{ item.author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useOpinionsStore } from '@/stores/opinions';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {};
  },
  setup() {
    const opinionStore = useOpinionsStore();

    opinionStore.databaseConnect();

    return { opinionStore };
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
    font-size: 4.58vw;
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
  padding: calc(20px + 1.04vw) 0px;
  justify-content: space-around;
  align-items: center;
  & > .itemOpinion {
    display: flex;
    width: 36.46vw;
    height: max-content;
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
      margin-top: calc(20px - 0.52vw);

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
  margin-bottom: calc(20px + 1.04vw);

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
