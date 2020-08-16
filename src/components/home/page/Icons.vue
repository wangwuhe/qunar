<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(item,index) in page" :key="index">
        <div class="icons-item" v-for="page in item" :key="page.id">
          <img :src="page.imgUrl" alt />
          <p>{{page.title}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ["iconsList"],
  data() {
    return {
      swiperOption: {},
    };
  },
  computed: {
    page() {
      let pages = [];
      this.iconsList.forEach((item, index) => {
        let idx = Math.floor(index / 8);
        if (!pages[idx]) {
          pages[idx] = [];
        }
        pages[idx].push(item);
      });
      return pages;
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~css/common.styl';

.icons {
  width: 100%;
  overflow: hidden;
  background: white;
}

.icons-item {
  width: 25%;
  padding-bottom: 25%;
  height: 0;
  float: left;
}

.icons-item img {
  width: 15.278vw;
  height: 15.278vw;
  display: block;
  margin: 0 auto;
  padding-top: 2.778vw;
}

.icons-item p {
  margin-top: 1.389vw;
  font-size: 3.889vw;
  text-align: center;
  color: #212121;
  textOverflow();
}
</style>