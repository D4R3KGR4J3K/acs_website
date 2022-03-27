<template>
  <div class="container">
    <div class="blockHeader">
      <span class="title">Artykuł</span>
    </div>
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
    <div class="contentArticle">
      <span class="textArticle">{{ articleText }}</span>
      <span class="articleTitleStyle">{{ articleTitle }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useArticleStore } from '@/stores/articles';

export default defineComponent({
  data() {
    return {
      articleTitle: '',
      articleText: '',
      articleDate: '',
      articleAuthor: 'Darek Araczewski',
      searchResult: null,
    };
  },
  setup() {
    const actions = useArticleStore();

    actions.databaseConnect();
  },
  mounted() {
    const actions = useArticleStore();

    this.articleTitle = actions.articles[0].articleTitle;
    this.articleText = actions.articles[0].articleText;
    this.articleDate = actions.articles[0].articleDate;
    this.articleAuthor = actions.articles[0].articleAuthor;
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
