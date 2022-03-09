<template>
  <div>
    <HeaderApp />
  </div>
</template>

<script>
import HeaderApp from './HeaderApp.vue';

export default {
  components: {
    HeaderApp,
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  background-color: #ff0000;
  height: 150px; /* Tymczasowo */
  position: relative;
}
</style>
