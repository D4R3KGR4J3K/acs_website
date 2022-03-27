<template>
  <div class="mainBodyStyle">
    <SegmentBlock />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SegmentBlock from './SegmentBlock.vue';

export default defineComponent({
  components: {
    SegmentBlock,
  },
});
</script>

<style lang="scss" scoped>
.mainBodyStyle {
  display: flex;
  flex-direction: column;
  background-color: #d99ac5;
  height: max-content;
  position: relative;
}
</style>
