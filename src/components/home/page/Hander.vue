<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <router-link to="/city">
        {{city}}
        <span class="iconfont">&#xe6aa;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed:{
    ...mapState(['city'])
  }
};
</script>

<style scoped lang="stylus">
@import '~css/var.styl';

.header {
  width: 100%;
  line-height: 12.222vw;
  background: $bgColor;
  color: #fff;
  font-size: 5vw;
  display: flex;
}

.header-search {
  flex: 1;
  background: #fff;
  height: 8.333vw;
  margin: 1.944vw 0;
  border-radius: 1.389vw;
  color: #e4e7ea;
  line-height: 8.333vw;
  font-size: 3.889vw;
  padding-left: 2.778vw;
}

.header-left {
  width: 5.556vw;
  padding: 0 2.778vw;
  text-align: center;
  font-weight: bold;
}

.header-right {
  font-size: 3.889vw;
  padding: 0 2.778vw;
}

.header-right a {
  color: white;
}
</style>