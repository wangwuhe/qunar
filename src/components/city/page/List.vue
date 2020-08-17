<template>
<div ref="container" class="container">
  <div class="content">
    <div class="hot">
      <div class="hot-title">热门城市</div>
      <ul class="hot-list">
        <li class="hot-item" @click="changeCityName(item.name)" v-for="item in hotCities" :key="item.id">{{item.name}}</li>
      </ul>
    </div>

    <div class="sort">
      <div class="sort-title">字母排序</div>
      <ul class="sort-list">
        <li class="sort-item" v-for="(val,key) in cities" :key="key" @click="changeSort(key)">{{key}}</li>
      </ul>
    </div>

    <div class="list">
      <div v-for="(val,key) in cities" :key="key" :ref="key">
        <div class="list-title">{{key}}</div>
        <ul class="list-msg">
          <li class="list-item" @click="changeCityName(item.name)" v-for="item in val" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll';
import {mapMutations} from 'vuex';
export default {
  props: ["cities","hotCities"],
  data() {
    return {
      scroll:''
    }
  },
created() {
    this.$nextTick(() => {
        // 执行滚动方法
        this.initScroll();
    })
},
  methods: {
    changeSort(key){
      this.scroll.scrollToElement(this.$refs[key][0])
    },
    changeCityName(name){
      this.changeCity(name)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity']),
    initScroll() {
      let container=this.$refs['container'];
      this.scroll = new BScroll(container,{
        mouseWheel: true,//开启鼠标滚轮
        click: true
      })
    }
  },
};
</script>

<style scoped lang="stylus">
@import '~css/common.styl';

.container{
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  bottom: 0;
  top: 12.222vw;
  background: #f5f5f5;
}
.hot-title {
  font-size: 3.333vw;
  color: #212121;
  padding: 2.778vw 4.167vw;
}
.hot-list {
  position: relative;
  overflow: hidden;
  background: white;
  font-size: 3.889vw;
}
.hot-list::before {
  content: " ";
  position: absolute;
  height: 100%;
  width: 33.333%;
  left: 33.333%;
  border-left: 0.278vw solid #ddd;
  border-right: 0.278vw solid #ddd;
}
.hot-item {
  position: relative;
  color: #212121;
  width: 33.33%;
  text-align: center;
  height: 12.5vw;
  line-height: 12.5vw;
  float: left;
  border-bottom: 0.278vw solid #ddd;
}

.sort-title {
  font-size: 3.333vw;
  color: #212121;
  padding: 2.778vw 4.167vw;
}
.sort-list {
  position: relative;
  overflow: hidden;
  background: white;
  font-size: 3.889vw;
}
.sort-item {
  color: #212121;
  width: 16.666%;
  text-align: center;
  height: 12.5vw;
  line-height: 12.5vw;
  float: left;
}

.list-title {
  font-size: 3.333vw;
  color: #212121;
  padding: 2.778vw 4.167vw;
}

.list-msg {
  position: relative;
  background: #fff;
  overflow: hidden;
}

.list-msg:before {
  content: ' ';
  position: absolute;
  left: 25%;
  width: 25%;
  height: 100%;
  border-left: 0.278vw solid #ddd;
  border-right: 0.278vw solid #ddd;
}

.list-msg:after {
  content: ' ';
  position: absolute;
  left: 75%;
  width: 0%;
  height: 100%;
  border-left: 0.278vw solid #ddd;
}

.list-item {
  position: relative;
  width: 25%;
  font-size: 4.167vw;
  text-align: center;
  line-height: 12.5vw;
  float: left;
  border-bottom: 0.278vw solid #ddd;
  textOverflow();
}
</style>