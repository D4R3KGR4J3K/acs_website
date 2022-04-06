<template>
  <div class="footerBodyStyle">
    <div class="blockModified">
      <div class="propTop"></div>
    </div>
    <FooterBlock />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterBlock from './FooterBlock.vue';

export default defineComponent({
  components: {
    FooterBlock,
  },
});
</script>

<style lang="scss" scoped>
.blockModified {
  display: flex;
  width: 100%;
  height: 10.4166666vw;
  position: relative;
  overflow: hidden;
}

.propTop {
  width: 200%;
  height: 700px;
  padding-top: 30px;
  position: absolute;
  left: -49.4791666vw;
  top: 2.60416666vw;
  background-color: black;
  -webkit-box-shadow: 0px 0px 21px 18px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 21px 18px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 21px 18px rgba(0, 0, 0, 1);
}

.propTop {
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}
.footerBodyStyle {
  display: flex;
  height: 200px;
  position: relative;
  flex-direction: column;
}
</style>
