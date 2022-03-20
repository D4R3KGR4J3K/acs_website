<template>
  <div>
    <HeaderApp />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderApp from './HeaderApp.vue';

export default defineComponent({
  components: {
    HeaderApp,
  },
});
</script>

<style lang="scss" scoped>
div {
  display: flex;
  background-color: #d99ac5;
  height: 150px; /* Tymczasowo */
  position: relative;
}
</style>
