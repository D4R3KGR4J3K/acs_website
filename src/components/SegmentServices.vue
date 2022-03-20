<template>
  <div class="container">
    <span class="title">Usługi</span>
    <label>
      <div class="search-container">
        <input
          type="text"
          placeholder="Wyszukaj Poprzedni Artykuł"
          name="search"
          v-model="searchResult"
        />
        <input type="image" src="https://img.icons8.com/search" alt="Search" />
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
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
  margin-left: calc(50% - 2.25em);
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
</style>
