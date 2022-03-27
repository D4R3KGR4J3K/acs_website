<template>
  <div class="container">
    <div class="block">
      <div class="text">© 20XX - 20XX Created by DarkServise</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 150px;
  width: 100%;
  position: relative;
}
.block {
  display: flex;
  width: 100%;
  height: 100px;
  background-color: black;
  justify-content: center;
}

.text {
  display: flex;
  width: max-content;
  height: max-content;
  color: white;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.5vw;
  margin-top: 5px;
}
</style>
