<script setup lang="ts">
import HeaderBody from './components/HeaderBody.vue';
import SegmentBody from './components/SegmentBody.vue';
import FooterBody from './components/FooterBody.vue';
</script>

<template>
  <HeaderBody />
  <div class="blockModified">
    <div class="propTop"></div>
  </div>
  <SegmentBody />
  <div class="blockModified">
    <div class="propBottom"></div>
  </div>
  <div class="spacer"></div>
  <FooterBody />
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #14bdeb;
}

.spacer {
  width: 100%;
  height: 150px;
}

.blockModified {
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;
}

.propTop,
.propBottom {
  width: 120%;
  height: 700px;
  position: absolute;
  left: -10.4166667vw;
  background-color: #d99ac5;
  -webkit-box-shadow: 0px 0px 42px 6px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 42px 6px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 42px 6px rgba(0, 0, 0, 1);
}

.propTop {
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  top: 2.6041665vw;
}

.propBottom {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  bottom: 2.6041665vw;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

@font-face {
  font-family: 'Copperplate Gothic Bold';
  src: url('./assets/fonts/copperplate_gothic_bold_regular.woff2')
      format('woff2'),
    url('./assets/fonts/copperplate_gothic_bold_regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
</style>
