<template>
  <div class="header">
      <div v-show="showHeader" class="header-return">
        <span class="border-return"></span>
        <span class="iconfont return">&#xe624;</span>
      </div>
      <div v-show="!showHeader" class="header-top" :style="styleOpacity">
        <div class="header-left">
          <span class="iconfont">&#xe624;</span>
        </div>
        北京国际鲜花港
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showHeader:true,
      styleOpacity:{
        opacity:0
      }
    }
  },
  mounted() {
    let That=this;
    window.addEventListener('scroll',function(){
      let top=this.document.documentElement.scrollTop;
      if(top>45){
        let opacity=top/190;
        opacity=opacity>1?1:opacity;
        That.styleOpacity={opacity}
        That.showHeader=false;
      }else{
        That.showHeader=true;
      }
    })
  },
}
</script>

<style scoped lang="stylus">
@import '~css/var.styl';

.header-return{
  position: absolute;
  left: 5px;
  top: 5px;
  width: 36px;
  height: 36px;
}
.border-return{
  display: block;
  background: #000;
  width: 36px;
  height: 36px;
  opacity: 0.5;
  border-radius: 18px;
}
.return{
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  width: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
.header-top {
  z-index: 99;
  position: fixed;
  top:0;
  text-align: center;
  width: 100%;
  line-height: 12.222vw;
  background: $bgColor;
  color: #fff;
  font-size: 5vw;
}
.header-left {
  position: absolute;
  width: 5.556vw;
  padding: 0 2.778vw;
  text-align: center;
  font-weight: bold;
}
</style>