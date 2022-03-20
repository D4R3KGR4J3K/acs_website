<template>
  <div class="block">
    <SegmentGalery />
  </div>
  <div class="block">
    <SegmentInformation />
  </div>
  <div class="block">
    <SegmentArticle />
  </div>
  <div class="block">
    <SegmentServices />
  </div>
  <div class="block">
    <SegmentOpinions />
  </div>
  <div class="block">
    <SegmentContact />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SegmentGalery from './SegmentGalery.vue';
import SegmentInformation from './SegmentInformation.vue';
import SegmentArticle from './SegmentArticle.vue';
import SegmentServices from './SegmentServices.vue';
import SegmentOpinions from './SegmentOpinions.vue';
import SegmentContact from './SegmentContact.vue';

export default defineComponent({
  components: {
    SegmentGalery,
    SegmentInformation,
    SegmentArticle,
    SegmentServices,
    SegmentOpinions,
    SegmentContact,
  },
});
</script>

<style lang="scss" scoped>
.block {
  margin: 50px 100px 50px 100px;
  background-color: #dccde8;
  display: flex;
  height: 43vw;
  width: calc(100% - 200px - 100px);
  position: relative;
  padding: 50px;
  border-top-left-radius: 55px;
  border-bottom-left-radius: 55px;
  border-top-right-radius: 55px;
  border-bottom-right-radius: 55px;
}
</style>
