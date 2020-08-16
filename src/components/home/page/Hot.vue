<template>
  <div class="hot">
    <div class="hot-top">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" />
      <span>本周热门榜单</span>
      <span class="hot-title">全部榜单</span>
    </div>
    <ul class="hot-list">
      <li class="hot-item" v-for="item in hotList" :key="item.id">
        <img :src="item.imgUrl" alt />
        <p>{{item.title}}</p>
        <p>
          <span class="hot-mark">￥{{item.mark}}</span>起
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["hotList"],
  data() {
    return {};
  },
};
</script>

<style scoped lang="stylus">
@import '~css/common.styl';

.hot {
  background: white;
  margin-top: 2.778vw;
  font-size: 3.889vw;
}

.hot-top {
  padding: 2.778vw;
  position: relative;
}

.hot-top img {
  width: 4.167vw;
  height: 4.167vw;
}

.hot-top span {
  color: #212121;
  font-size: 4.444vw;
}

.hot-top span.hot-title {
  position: absolute;
  right: 2.778vw;
  color: #616161;
  font-size: 3.889vw;
}

.hot-list {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  height: 41.667vw;
}

.hot-item {
  display: inline-block;
  padding: 0 2.778vw;
  width: 27.778vw;
  height: 27.778vw;
}

.hot-item img {
  width: 100%;
  height: 100%;
}

.hot-item p {
  margin-top: 1.389vw;
  text-align: center;
  textOverflow();
}

.hot-item p .hot-mark {
  color: #ff8300;
  font-size: 4.444vw;
}
</style>