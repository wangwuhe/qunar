<template>
  <div class="sort">
    <div class="sort-title">字母排序</div>
    <ul class="sort-list">
      <li class="sort-item" v-for="(val,key) in cities" :key="key">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["cities"],
};
</script>

<style scoped>
.sort-title {
  font-size: 12px;
  color: #212121;
  padding: 10px 15px;
}
.sort-list {
  position: relative;
  overflow: hidden;
  background: white;
  font-size: 14px;
}
.sort-item {
  color: #212121;
  width: 16.666%;
  text-align: center;
  height: 45px;
  line-height: 45px;
  float: left;
}
</style>