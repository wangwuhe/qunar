<template>
  <div class="like">
    <div class="like-top">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" />
      猜你喜欢
    </div>
    <ul>
      <li class="like-item border-bottom" v-for="item in likeList" :key="item.id">
        <div class="like-img">
          <img :src="item.imgUrl" alt />
        </div>
        <div class="like-text">
          <div class="like-title">{{item.title}}</div>
          <div class="like-msg">{{item.msg}}条评论</div>
          <div class="like-map">
            <span class="like-mark">
              ￥
              <b>{{item.pre}}</b>
            </span>起
            <span class="like-item-map">{{item.map}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["likeList"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.like {
  margin-top: 2.778vw;
  font-size: 3.889vw;
  background: white;
  padding: 0 2.778vw;
}
.like-top {
  padding: 2.778vw 0;
  font-size: 4.444vw;
}
.like-top img {
  width: 4.167vw;
  height: 4.167vw;
}
.like-item {
  position: relative;
  overflow: hidden;
}
.like-img {
  float: left;
}
.like-img img {
  width: 27.778vw;
  height: 27.778vw;
}
.like-text {
  overflow: hidden;
  padding-left: 3.056vw;
}
.like-title {
  font-size: 5vw;
  color: #212121;
  margin-top: 5.556vw;
}
.like-msg {
  margin-top: 4.167vw;
  color: #616161;
  font-size: 3.333vw;
}
.like-map {
  margin-top: 4.167vw;
  color: #616161;
}
.like-mark {
  color: #ff8300;
}
.like-mark b {
  font-size: 5.556vw;
}
.like-item-map {
  position: absolute;
  right: 0;
  font-size: 3.889vw;
}
</style>