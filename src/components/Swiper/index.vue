<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item,index) in bannerData" :key="index">
      <img :src="item.src" :title="item.title">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props: ['bannerData'],
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true,
          autoplay: true
          // Some Swiper option/callback...
        }
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