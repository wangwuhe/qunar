<template>
  <div class="home">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <home-location></home-location>
      <home-activity></home-activity>
      <home-hot></home-hot>
  </div>
</template>

<script>
import HomeHeader from './page/Hander'
import HomeSwiper from './page/Swiper'
import HomeIcons from './page/Icons'
import HomeLocation from './page/Location'
import HomeActivity from './page/Activity'
import HomeHot from './page/Hot'
export default {
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeLocation,
        HomeActivity,
        HomeHot
    }
}
</script>

<style scoped>
.home{
    background: #f5f5f5;
}
</style>