<template>
  <div class="block">
    <SegmentGalery id="galery" />
  </div>
  <div class="block">
    <SegmentInformation id="information" />
  </div>
  <div class="block">
    <SegmentArticle id="article" />
  </div>
  <div class="block">
    <SegmentServices id="services" />
  </div>
  <div class="block">
    <SegmentOpinions id="options" />
  </div>
  <div class="block">
    <SegmentContact id="contact" />
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
@import "../assets/style/block";

.block {
  margin: calc(15px + 1.8229vw) calc(30px + 3.6458vw);
  background-color: #dccde8;
  display: flex;
  height: 43vw;
  width: calc(100% - (calc(30px + 3.6458vw) * 2) - (calc(15px + 1.8229vw) * 2));
  position: relative;
  padding: calc(15px + 1.8229vw);
  border-top-left-radius: 55px;
  border-bottom-left-radius: 55px;
  border-top-right-radius: 55px;
  border-bottom-right-radius: 55px;
  -webkit-box-shadow: 0px 0px 42px 6px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 42px 6px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 42px 6px rgba(0, 0, 0, 1);
}
</style>
