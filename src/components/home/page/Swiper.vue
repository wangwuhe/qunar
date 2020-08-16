<template>
  <div class="header-swiper">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ["swiperList"],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }, //这样写小圆点就有了
        loop: true,
      },
    };
  },
};
</script>

<style scoped>
.header-swiper {
  background: #ccc;
  height: 0;
  padding-bottom: 26.67%;
}
.header-swiper img {
  width: 100%;
  height: 100%;
}
</style>