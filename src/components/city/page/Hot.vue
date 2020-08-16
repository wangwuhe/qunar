<template>
  <div class="hot">
    <div class="hot-title">热门城市</div>
    <ul class="hot-list">
      <li class="hot-item" v-for="item in hotCities" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["hotCities"],
};
</script>

<style scoped>
.hot-title {
  font-size: 12px;
  color: #212121;
  padding: 10px 15px;
}
.hot-list {
  position: relative;
  overflow: hidden;
  background: white;
  font-size: 14px;
}
.hot-list::before {
  content: " ";
  position: absolute;
  height: 100%;
  width: 33.333%;
  left: 33.333%;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}
.hot-item {
  color: #212121;
  width: 33.33%;
  text-align: center;
  height: 45px;
  line-height: 45px;
  float: left;
  border-bottom: 1px solid #ddd;
}
</style>