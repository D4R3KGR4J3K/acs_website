<template>
  <div class="container">
    <span class="title">Informacje</span>
    <div class="containerPanels">
      <div class="leftPanel">
        <div class="dropdown">
          <button @click="openList()" class="dropbtn">Dropdown</button>
          <div id="myDropdown" class="dropdown-content">
            <a>Link 1</a>
            <a>Link 2</a>
            <a>Link 3</a>
          </div>
        </div>
        <div class="content">
          <div class="showElement">
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

window.onclick = function (event: any) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

export default defineComponent({
  methods: {
    openList() {
      let element = document.getElementById('myDropdown');
      if (element != null) element.classList.toggle('show');
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

/* Dropdown Button */
.dropbtn {
  background-color: #3498db;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover,
.dropbtn:focus {
  background-color: #2980b9;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  height: max-content;
  margin-left: calc(50% - 50px);
  margin-top: 50px;
  margin-bottom: 40px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  & > a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  & > a:hover {
    background-color: #ddd;
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

.title {
  display: flex;
  position: relative;
  width: 100%;
  font-size: 5.5em;
  margin-left: calc(50% - 2.25em);
  height: max-content;
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
