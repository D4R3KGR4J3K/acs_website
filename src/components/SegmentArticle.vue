<template>
  <div class="container">
    <div class="blockHeader">
      <span class="title">Artykuł</span>
    </div>
    <div class="collection">
      <span class="authorArticle">Autor:<br />{{ actions.articleAuthor }}</span>
      <label>
        <div class="search-container">
          <input
            type="text"
            placeholder="Wyszukaj Poprzedni Artykuł"
            name="search"
            list="itemsList"
            v-model="searchResult"
          />
          <datalist id="itemsList">
            <option
              :value="item.articleTitle"
              v-for="(item, index) in actions.articlesName"
              :key="index"
            ></option>
          </datalist>
        </div>
      </label>
      <span class="dateArticle">Utworzono:<br />{{ actions.articleDate }}</span>
    </div>
    <div class="contentArticle">
      <span class="textArticle">{{ actions.articleText }}</span>
      <span class="articleTitleStyle">{{ actions.articleTitle }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useArticleStore } from '@/stores/articles';

export default defineComponent({
  data() {
    return {
      searchResult: null,
    };
  },
  setup() {
    const actions = useArticleStore();

    actions.databaseConnect();

    return { actions };
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

.contentArticle {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
}

.authorArticle {
  display: flex;
  position: relative;
  text-align: center;
  width: 25vh;
  margin-top: 8px;
  margin-left: 12vh;
  margin-right: 2vh;
  font-size: 20px;
}

.dateArticle {
  display: flex;
  position: relative;
  text-align: center;
  width: 25vh;
  margin-top: 8px;
  margin-left: 10vh;
  margin-right: 2vh;
  font-size: 20px;
}

.textArticle {
  display: flex;
  position: relative;
  text-align: center;
  margin-top: 65px;
  font-size: 50px;
  height: 400px;
  width: max-content;
}

.articleTitleStyle {
  display: flex;
  position: relative;
  margin-top: 40px;
  font-size: 75px;
  text-align: center;
  width: max-content;
}

.collection {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  & > label > .search-container {
    height: max-content;
    display: flex;
    position: relative;
    background-color: #d99ac5;
    padding: 15px;
    width: 75vh;
    border-top-left-radius: 55px;
    border-bottom-left-radius: 55px;
    border-top-right-radius: 55px;
    border-bottom-right-radius: 55px;

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
}

.hidden {
  display: none;
}

.show {
  display: flex;
}
</style>
