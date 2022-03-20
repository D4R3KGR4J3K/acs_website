<template>
  <div class="container">
    <span class="title">Artykuł</span>
    <div class="collection">
      <span class="authorArticle">Autor:<br />{{ articleAuthor }}</span>
      <label>
        <div class="search-container">
          <input
            type="text"
            placeholder="Wyszukaj Poprzedni Artykuł"
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
      <span class="dateArticle">Utworzono:<br />{{ articleDate }}</span>
    </div>
    <span class="textArticle">{{ articleText }}</span>
    <span class="articleTitleStyle">{{ articleTitle }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      articleTitle: 'sss',
      articleText: 'text',
      articleDate: null,
      articleAuthor: 'Darek Araczewski',
      searchResult: null,
    };
  },
});
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  position: relative;
  width: 100%;
  font-size: 5.5em;
  margin-left: calc(50% - 1.5em);
  height: max-content;
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
  height: 300px;
  width: 100%;
}

.articleTitleStyle {
  display: flex;
  position: relative;
  margin-top: 40px;
  font-size: 75px;
  text-align: center;
  width: 100%;
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
}

.hidden {
  display: none;
}

.show {
  display: flex;
}
</style>
