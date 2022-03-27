<template>
  <div class="headerBodyStyle">
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
.headerBodyStyle {
  display: flex;
  height: 150px; /* Tymczasowo */
  position: relative;
}
</style>
