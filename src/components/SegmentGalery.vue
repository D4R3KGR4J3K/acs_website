<template>
  <div class="container">
    <!-- Full-width images with number text -->
    <div class="mySlides">
      <img src="../assets/img/service.jpg" style="width: 100%" />
    </div>

    <div class="mySlides">
      <img src="../assets/img/service.jpg" style="width: 100%" />
    </div>

    <div class="mySlides">
      <img src="../assets/img/service.jpg" style="width: 100%" />
    </div>

    <div class="mySlides">
      <img src="../assets/img/service.jpg" style="width: 100%" />
    </div>

    <div class="mySlides">
      <img src="../assets/img/service.jpg" style="width: 100%" />
    </div>

    <div class="mySlides">
      <img src="../assets/img/service.jpg" style="width: 100%" />
    </div>

    <a class="prev" @click="plusSlides(-1)">&#10094;</a>
    <a class="next" @click="plusSlides(1)">&#10095;</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      slideIndex: 1,
    };
  },
  methods: {
    plusSlides(n: number) {
      this.showSlides((this.$data.slideIndex += n));
    },
    showSlides(n: number) {
      var i;
      /* global HTMLCollectionOf */
      var slides = document.getElementsByClassName(
        'mySlides'
      ) as HTMLCollectionOf<HTMLElement>;

      if (n > slides.length) {
        this.$data.slideIndex = 1;
      }
      if (n < 1) {
        this.$data.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }

      slides[this.$data.slideIndex - 1].style.display = 'block';
    },
  },
  mounted() {
    this.showSlides(this.$data.slideIndex);
  },
});
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: column;
  position: relative;
  height: calc(100% - 40px);
  width: 100%;
  margin: calc(5px - 0.78vw);
  padding: 0;
  overflow: hidden;
}

img {
  border-top-left-radius: 55px;
  border-bottom-left-radius: 55px;
  border-top-right-radius: 55px;
  border-bottom-right-radius: 55px;
}

.mySlides {
  display: none;
  width: 100%;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px 32px 24px 32px;
  margin-top: -30px;
  color: #ffffffb1;
  font-weight: bold;
  font-size: 100px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
