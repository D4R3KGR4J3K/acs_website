<template>
  <div class="container">
    <div class="blockHeader">
      <span class="title">Usługi</span>
    </div>
    <div class="searchbar">
      <label>
        <div class="search-container">
          <input
            type="text"
            placeholder="Wyszukaj Usługę"
            name="search"
            v-model="searchResult"
          />
          <input
            type="image"
            src="https://img.icons8.com/search"
            alt="Search"
          />
        </div>
      </label>
      <div class="infobar">
        <span>Strona {{ nowPage }}/{{ totalPages }}</span>
      </div>
    </div>
    <div class="mainContent">
      <a class="prev">&#10094;</a>
      <div class="contentItems">
        <div class="smallBlock">
          <div class="smallTitle">Przykład</div>
          <img class="smallIMG" src="../assets/img/item1.jpg" alt="obrazek" />
          <div class="smallCena">20.23 PLN</div>
          <button class="smallButton">Więcej Informacji</button>
        </div>
        <div class="smallBlock">
          <div class="smallTitle">Przykład</div>
          <img class="smallIMG" src="../assets/img/item1.jpg" alt="obrazek" />
          <div class="smallCena">20.23 PLN</div>
          <button class="smallButton">Więcej Informacji</button>
        </div>
        <div class="smallBlock">
          <div class="smallTitle">Przykład</div>
          <img class="smallIMG" src="../assets/img/item1.jpg" alt="obrazek" />
          <div class="smallCena">20.23 PLN</div>
          <button class="smallButton">Więcej Informacji</button>
        </div>
      </div>
      <a class="next">&#10095;</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      searchResult: null,
      totalPages: 0,
      totalItems: 0,
      nowPage: 0,
    };
  },
});
</script>

<style lang="scss" scoped>
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
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

.searchbar {
  display: flex;
  position: relative;
  height: max-content;
  margin-top: 20px;
  width: 100%;
  justify-content: flex-end;
}

.infobar {
  display: flex;
  position: relative;
  height: 100%;
  font-size: 2em;
  width: max-content;
  align-items: center;
  margin-left: 12vw;
  margin-right: 5%;

  & > div {
    display: flex;
    position: relative;
    height: max-content;
  }
}

.search-container {
  height: max-content;
  display: flex;
  position: relative;
  width: 75vh;
  background-color: #d99ac5;
  padding: 15px;
  border-top-left-radius: 55px;
  border-bottom-left-radius: 55px;
  border-top-right-radius: 55px;
  border-bottom-right-radius: 55px;

  & > input[type='image'] {
    display: flex;
    float: left;
    padding: 6px 15px;
    max-height: 20px;
    font-size: 17px;
    border: none;
    cursor: default;
  }

  & > input[type='text'] {
    display: flex;
    float: left;
    width: 100%;
    padding: 6px;
    border: none;
    font-size: 17px;
    background-color: #00000000;

    &::-webkit-input-placeholder {
      font-style: italic;
    }

    &:focus {
      outline: none;
    }

    &:hover {
      cursor: default;
    }
  }
}

.mainContent {
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  & > .contentItems {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    margin-left: 5%;
    margin-right: 5%;
    align-items: center;
    & > .smallBlock {
      display: flex;
      height: 375px;
      width: 325px;
      padding: 40px;
      background-color: #d99ac5;
      border-top-left-radius: 55px;
      border-bottom-left-radius: 55px;
      border-top-right-radius: 55px;
      border-bottom-right-radius: 55px;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      & > .smallTitle {
        display: flex;
        font-size: 1.5vw;
        margin-bottom: 15px;
      }

      & > .smallIMG {
        display: flex;
        width: 70%;
      }

      & > .smallCena {
        display: flex;
        font-size: 1.5vw;
        margin: 15px 0;
      }

      & > .smallButton {
        display: flex;
        padding: 10px 60px;
        font-size: 1vw;
        background-color: #dccde8;
        border-top-left-radius: 55px;
        border-bottom-left-radius: 55px;
        border-top-right-radius: 55px;
        border-bottom-right-radius: 55px;
        border: none;
        cursor: pointer;
      }
    }
  }
}
</style>
