<template>
  <div class="container">
    <div class="blockHeader">
      <span class="title">Informacje</span>
    </div>
    <div class="containerPanels">
      <div class="leftPanel">
        <div class="buttonBlock">
          <div class="buttonGroup" @click="toggle()">
            <label>
              <button class="dropbtn">
                <span class="noselect">Informacje o Założycielu</span>
              </button>
              <input
                type="image"
                src="https://img.icons8.com/material/96/000000/circled-chevron-down--v1.png"
                alt="Search"
                class="noselect"
              />
            </label>
            <div id="myDropdown" class="dropdown-content">
              <a>Informacje o Założycielu</a>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="showElement" id="info">
            <span class="creator"> Andrzej Kotarowski </span>
            <br />
            <br />
            <br />
            <br />
            <span class="text">
              Główny założyciel firmy. Pozwolił rozwiną się firmie na bardzo
              wyskoki poziom.
            </span>
            <br />
            <br />
            <span class="text">
              Posiada wykształcenie magisterskie z zakresu infromatyki.
            </span>
            <br />
            <br />
            <br />
            <br />
            <span class="text"><b>Wiek:</b> 45 lat</span>
            <span class="text"><b>Stan Cywilny:</b> Żonaty</span>
          </div>
        </div>
      </div>
      <div class="rightPanel">
        <div class="showElement">
          <img src="../assets/img/ceo.jpg" alt="prezes" />
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
      opened: false,
    };
  },
  methods: {
    show() {
      this.opened = true;
      let element = document.getElementById('myDropdown');
      if (element == null) return;
      if (element.classList.contains('hiddenElement'))
        element.classList.toggle('hiddenElement');
      element.classList.toggle('show');
      setTimeout(() => document.addEventListener('click', this.hide), 0);
    },
    hide() {
      this.opened = false;
      let element = document.getElementById('myDropdown');
      if (element == null) return;
      if (element.classList.contains('show')) element.classList.toggle('show');
      element.classList.toggle('hiddenElement');
      document.removeEventListener('click', this.hide);
    },
    toggle() {
      if (this.opened) {
        return this.hide();
      }
      return this.show();
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  position: relative;
  height: calc(100% - 40px);
  width: 100%;
  margin: 20px;
  padding: 0;
  overflow: hidden;

  & > .containerPanels {
    display: flex;
    flex-direction: row;
    position: relative;
    height: 100%;
  }
}
.buttonBlock {
  display: flex;
  height: max-content;
  width: 100%;
  justify-content: center;
  margin: 50px 5px;
}

label {
  width: 100%;
}

.buttonGroup {
  height: max-content;
  display: flex;
  position: relative;
  width: 75%;
  background-color: #d99ac5;
  padding: 15px;
  border-top-left-radius: 55px;
  border-bottom-left-radius: 55px;
  border-top-right-radius: 55px;
  border-bottom-right-radius: 55px;

  & > label > .dropbtn {
    display: flex;
    float: left;
    width: calc(100% - 32px);
    text-align: center;
    padding: 6px;
    color: black;
    border: none;
    font-size: 17px;
    background-color: #00000000;
  }

  & > label > input[type='image'] {
    display: flex;
    float: right;
    max-height: 32px;
    font-size: 80px;
    border: none;
    cursor: default;

    &::-webkit-input-placeholder {
      font-style: italic;
    }

    &:hover {
      cursor: default;
    }
  }

  &:hover,
  &:focus {
    background-color: #ad6f9a;
  }
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #d99ac5;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  min-width: 100%;
  top: 3.2vw;
  left: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  & > a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  & > a:hover {
    background-color: #ad6f9a;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
}
.leftPanel,
.rightPanel {
  display: flex;
  position: relative;
  width: 50%;
  height: 100%;
  flex-direction: column;
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
/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {
  display: block;
}

.content {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
}

.hiddenElement {
  display: none;
}

.showElement {
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  & > .text {
    font-size: 20px;
  }

  & > .creator {
    font-size: 60px;
  }

  & > img {
    padding: 45px 45px 45px 90px;
  }
}
</style>
