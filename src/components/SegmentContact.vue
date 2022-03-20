<template>
  <div class="container">
    <span class="title">Kontakt</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
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
</style>
