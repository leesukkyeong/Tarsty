<template>
  <swiper :modules="modules" :pagination="{ clickable: true }">
    <swiper-slide>
      <img class='src' :src="imgSrc1"/>
    </swiper-slide>
    <swiper-slide>
      <img class='src' :src="imgSrc2"/>
    </swiper-slide>
    <swiper-slide>
      <img class='src' :src="imgSrc3"/>
    </swiper-slide>
  </swiper>
</template>

<script>
  import SwiperClass, { Pagination } from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

  // import swiper module styles
  import 'swiper/css'
  import 'swiper/css/pagination'
  // more module style...

  export default {
    props: ['imgSrc1', 'imgSrc2', 'imgSrc3'],
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination]
      }
    }
  }
</script>

<style scoped>
.src {
  width: 85%;
  height: 700px;
}
</style>5