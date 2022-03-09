<template>
  <div>
    <SegmentBlock />
  </div>
</template>

<script>
import SegmentBlock from './SegmentBlock.vue';

export default {
  components: {
    SegmentBlock,
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  background-color: #00ff00;
  height: 2000px; /* Tymczasowo */
  position: relative;
}
</style>
