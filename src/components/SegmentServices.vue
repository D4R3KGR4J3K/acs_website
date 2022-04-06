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
        <span>Strona {{ itemStore.nowPage }}/{{ itemStore.totalPages }}</span>
      </div>
    </div>
    <div class="mainContent">
      <a class="prev" @click="itemStore.changeNowPage(-1)">&#10094;</a>
      <div class="contentItems">
        <div
          class="smallBlock"
          v-for="(item, index) in itemStore.items"
          :key="index"
        >
          <div class="smallTitle">
            {{ item.title }}
          </div>
          <img class="smallIMG" :src="item.img" alt="obrazek" />
          <div class="smallCena">{{ item.price }} PLN</div>
          <button @click="toggleModal()" class="smallButton">
            Więcej Informacji
          </button>
          <div id="myModal" class="modal">
            <div class="modal-content">
              <div class="modalTitle">
                <b>{{ item.title }}</b>
              </div>
              <div class="modalIMG">
                <img class="modalIMGProp" :src="item.img" alt="obrazek" />
              </div>
              <div class="modalDescription">
                <b>Opis:</b> {{ item.description }}
              </div>
              <div class="modalTime">
                <b>Średni czas wykonania danej usługi:</b> {{ item.time }} godz.
              </div>
              <div class="modalPrice">{{ item.price }} PLN</div>
              <div class="modalButton">
                <button @click="closeModal()" class="modalButtonProp">
                  Zakończ podgląd
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="next" @click="itemStore.changeNowPage(1)">&#10095;</a>
    </div>
  </div>
</template>

<script lang="ts">
import { useItemsStore } from '@/stores/items';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      searchResult: null,
      openedModal: false,
    };
  },
  setup() {
    let typingTimer: number | undefined;
    let typeInterval = 500; // Half a second
    let searchInput = document.getElementById('search');

    searchInput?.addEventListener('keyup', () => {
      clearTimeout(typingTimer);
      //typingTimer = setTimeout(liveSearch, typeInterval);
    });

    const itemStore = useItemsStore();

    itemStore.databaseConnect();

    return { itemStore };
  },
  methods: {
    showModal() {
      this.openedModal = true;
      const modal = document.getElementById('myModal');
      if (modal == null) return;
      modal.style.display = 'flex';
      setTimeout(() => document.addEventListener('click', this.hideModal), 0);
    },
    hideModal(event?: MouseEvent) {
      this.openedModal = false;
      const modal = document.getElementById('myModal');
      if (modal == null) return;
      if (event?.target == modal) {
        modal.style.display = 'none';
        document.removeEventListener('click', this.hideModal);
      }
    },
    closeModal() {
      this.openedModal = false;
      const modal = document.getElementById('myModal');
      if (modal == null) return;
      modal.style.display = 'none';
      document.removeEventListener('click', this.hideModal);
    },
    toggleModal() {
      if (this.openedModal) {
        return this.hideModal();
      }
      return this.showModal();
    },
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
  margin: calc(5px - 0.78vw);
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
  width: 50%;
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
      height: 19.53125vw;
      width: 16.9270833vw;
      padding: calc(15px + 1.30208333vw);
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

.modal {
  display: none;
  position: fixed;
  z-index: 50;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  & > .modal-content {
    background-color: #dccde8;
    flex-direction: column;
    margin: 12.5% auto;
    border: 1px solid #888;
    width: max-content;
    padding: 40px;
    border-top-left-radius: 55px;
    border-bottom-left-radius: 55px;
    border-top-right-radius: 55px;
    border-bottom-right-radius: 55px;
    -webkit-box-shadow: 0px 0px 42px 6px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 42px 6px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 42px 6px rgba(0, 0, 0, 1);
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }

    & > .modalTitle {
      display: flex;
      width: 100%;
      justify-content: center;
      font-size: 37px;
    }

    & > .modalIMG {
      display: flex;
      width: 100%;
      justify-content: center;

      & > .modalIMGProp {
        display: flex;
      }
    }

    & > .modalDescription {
      display: flex;
      width: 100%;
      justify-content: center;
      font-size: 18px;
    }

    & > .modalTime {
      display: flex;
      width: 100%;
      justify-content: center;
      font-size: 18px;
    }

    & > .modalPrice {
      display: flex;
      width: 100%;
      justify-content: center;
      font-size: 40px;
    }

    & > .modalButton {
      display: flex;
      width: 100%;
      justify-content: center;
      & > .modalButtonProp {
        display: flex;
        padding: 10px 60px;
        font-size: 1vw;
        background-color: #d99ac5;
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
