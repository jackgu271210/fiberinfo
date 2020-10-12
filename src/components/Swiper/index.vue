<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item,index) in swiperPics" :key="index">
      <img :src="item">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true
          // Some Swiper option/callback...
        },
        swiperPics: [
          "http://www.fibreinfo.com//uploadpic/ad/service1_201961413583472072.jpg",
          "http://www.fibreinfo.com//uploadpic/ad/service1_201911113462496282.jpg",
          "http://www.fibreinfo.com//uploadpic/ad/service1_201911113453825629.jpg"
        ]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style lang="scss" scoped>
.swiper-slide {
  img {
    width: 100%;
  }
}
</style>