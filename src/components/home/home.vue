<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconsList="iconsList"></home-icons>
    <home-location></home-location>
    <home-activity></home-activity>
    <home-hot :hotList="hotList"></home-hot>
    <home-like :likeList="likeList"></home-like>
    <home-vacation :vacationList="vacationList"></home-vacation>
  </div>
</template>

<script>
import HomeHeader from "./page/Hander";
import HomeSwiper from "./page/Swiper";
import HomeIcons from "./page/Icons";
import HomeLocation from "./page/Location";
import HomeActivity from "./page/Activity";
import HomeHot from "./page/Hot";
import HomeLike from "./page/Like";
import HomeVacation from "./page/Vacation";
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeLocation,
    HomeActivity,
    HomeHot,
    HomeLike,
    HomeVacation,
  },
  data() {
    return {
      swiperList: [],
      hotList: [],
      iconsList: [],
      likeList: [],
      vacationList: [],
    };
  },
  mounted() {
    this.$http.get("/api/dataHome.json").then((res) => {
      const data = res.data.data[0];
      this.hotList = data.hotList;
      this.iconsList = data.iconsList;
      this.likeList = data.likeList;
      this.swiperList = data.swiperList;
      this.vacationList = data.vacationList;
    });
  },
};
</script>

<style scoped>
.home {
  background: #f5f5f5;
}
</style>